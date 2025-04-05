
import React from 'react';

interface CharacterCounterProps {
  text: string;
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({ text }) => {
  const charCount = text.length;
  const wordCount = text ? text.trim().split(/\s+/).filter(Boolean).length : 0;
  
  return (
    <div className="text-sm text-muted-foreground flex gap-4">
      <div>
        <span className="font-medium">Символы:</span> {charCount}
      </div>
      <div>
        <span className="font-medium">Слова:</span> {wordCount}
      </div>
    </div>
  );
};

export default CharacterCounter;
