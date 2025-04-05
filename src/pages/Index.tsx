
import React from 'react';
import TextEditor from '@/components/TextEditor';

const Index: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Текстовый помощник</h1>
          <p className="text-muted-foreground">
            Анализируйте, редактируйте и улучшайте ваш текст
          </p>
        </header>
        
        <main>
          <TextEditor />
        </main>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Текстовый помощник</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
