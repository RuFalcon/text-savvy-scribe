
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowUp, ArrowDown, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

interface TextControlsProps {
  text: string;
  onTextChange: (newText: string) => void;
}

const TextControls: React.FC<TextControlsProps> = ({ text, onTextChange }) => {
  const [isChecking, setIsChecking] = useState(false);

  const handleUppercase = () => {
    if (!text.trim()) {
      toast.warning("Введите текст перед преобразованием");
      return;
    }
    onTextChange(text.toUpperCase());
    toast.success("Текст преобразован в верхний регистр");
  };

  const handleLowercase = () => {
    if (!text.trim()) {
      toast.warning("Введите текст перед преобразованием");
      return;
    }
    onTextChange(text.toLowerCase());
    toast.success("Текст преобразован в нижний регистр");
  };

  const checkSpelling = async () => {
    if (!text.trim()) {
      toast.warning("Введите текст для проверки");
      return;
    }
    
    setIsChecking(true);
    toast.info("Проверка орфографии и пунктуации...");
    
    try {
      // Яндекс.Спеллер API для проверки русского текста
      const response = await fetch(`https://speller.yandex.net/services/spellservice.json/checkText?text=${encodeURIComponent(text)}&lang=ru`);
      
      if (!response.ok) {
        throw new Error('Ошибка при проверке текста');
      }
      
      const data = await response.json();
      
      if (data.length === 0) {
        toast.success("Проверка завершена! Ошибок не найдено.");
      } else {
        let correctedText = text;
        let errorCount = data.length;
        
        // Применяем исправления
        [...data].reverse().forEach(error => {
          const { pos, len, s } = error;
          const suggestions = s[0]; // Берем первое предложенное исправление
          
          if (suggestions) {
            const beforeError = correctedText.substring(0, pos);
            const afterError = correctedText.substring(pos + len);
            correctedText = beforeError + suggestions + afterError;
          }
        });
        
        onTextChange(correctedText);
        toast.success(`Найдено и исправлено ошибок: ${errorCount}`);
      }
    } catch (error) {
      console.error('Ошибка при проверке правописания:', error);
      toast.error("Произошла ошибка при проверке текста");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        onClick={checkSpelling}
        className="flex items-center gap-2"
        variant="secondary"
        disabled={isChecking}
      >
        {isChecking ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <CheckCircle size={18} />
        )}
        Проверить орфографию
      </Button>
      <Button 
        onClick={handleUppercase}
        className="flex items-center gap-2"
        variant="outline"
        disabled={isChecking}
      >
        <ArrowUp size={18} />
        В верхний регистр
      </Button>
      <Button 
        onClick={handleLowercase}
        className="flex items-center gap-2"
        variant="outline"
        disabled={isChecking}
      >
        <ArrowDown size={18} />
        В нижний регистр
      </Button>
    </div>
  );
};

export default TextControls;
