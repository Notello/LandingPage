import React, { useState } from 'react';

export const QuizQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
  };

  const renderAnswerButton = (answer: string, label: string) => {
    const isCorrect = answer === 'd';
    const isSelected = selectedAnswer === answer;

    let buttonClassName = 'px-4 py-2 rounded-md w-full border m-2 text-left';
    if (isAnswered) {
      if (isSelected && isCorrect) {
        buttonClassName += ' bg-green-500';
      } else if (isSelected && !isCorrect) {
        buttonClassName += ' bg-red-500';
      } else if (!isSelected && isCorrect) {
        buttonClassName += ' bg-green-500';
      } else {
        buttonClassName += '';
      }
    } else {
      buttonClassName += ' bg-white hover:bg-gray-100';
    }

    return (
      <button
        key={answer}
        className={buttonClassName}
        onClick={() => handleAnswerSelect(answer)}
        disabled={isAnswered}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="flex flex-col w-96 h-96 border-2 bg-white rounded-lg m-10 items-center">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">What is 25 x 4?</h2>
        <div className="flex-column">
          {renderAnswerButton('a', 'A: 45')}
          {renderAnswerButton('b', 'B: 66')}
          {renderAnswerButton('c', 'C: 0')}
          {renderAnswerButton('d', 'D: 100')}
        </div>
      </div>
    </div>
  );
};
