
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowUp, ArrowDown } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

interface TextControlsProps {
  text: string;
  onTextChange: (newText: string) => void;
}

const TextControls: React.FC<TextControlsProps> = ({ text, onTextChange }) => {
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

  const checkSpelling = () => {
    if (!text.trim()) {
      toast.warning("Введите текст для проверки");
      return;
    }
    
    // В реальном приложении здесь был бы API-запрос для проверки орфографии
    // Здесь мы просто имитируем проверку с небольшой задержкой
    toast.info("Проверка орфографии и пунктуации...");
    
    setTimeout(() => {
      toast.success("Проверка завершена! Ошибок не найдено.");
    }, 1000);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button 
        onClick={checkSpelling}
        className="flex items-center gap-2"
        variant="secondary"
      >
        <CheckCircle size={18} />
        Проверить орфографию
      </Button>
      <Button 
        onClick={handleUppercase}
        className="flex items-center gap-2"
        variant="outline"
      >
        <ArrowUp size={18} />
        В верхний регистр
      </Button>
      <Button 
        onClick={handleLowercase}
        className="flex items-center gap-2"
        variant="outline"
      >
        <ArrowDown size={18} />
        В нижний регистр
      </Button>
    </div>
  );
};

export default TextControls;
