
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CharacterCounter from './CharacterCounter';
import TextControls from './TextControls';

const TextEditor: React.FC = () => {
  const [text, setText] = useState('');
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  
  const updateText = (newText: string) => {
    setText(newText);
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Текстовый редактор</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea 
          placeholder="Введите или вставьте текст здесь..." 
          value={text} 
          onChange={handleTextChange}
          className="min-h-[300px] text-base p-4 resize-y focus:outline-none"
        />
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <CharacterCounter text={text} />
          <TextControls text={text} onTextChange={updateText} />
        </div>
      </CardContent>
    </Card>
  );
};

export default TextEditor;
