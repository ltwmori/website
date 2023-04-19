// LetterWithBoundary.tsx
import React from 'react';

interface LetterWithBoundaryProps {
  letter: string;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  textColor?: string;
}

const LetterWithBoundary: React.FC<LetterWithBoundaryProps> = ({
  letter,
  size = 10,
  strokeWidth = 2,
  strokeColor = 'border-blue-500',
  textColor = 'text-blue-500',
}) => {
  const circleSize = `h-${size} w-${size}`;

  return (
    <div
      className={`relative flex items-center justify-center text-center ${circleSize}`}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center rounded-full border ${strokeColor} border-${strokeWidth}`}
      ></div>
      <span className={`${textColor}`}>{letter.toUpperCase()}</span>
    </div>
  );
};

export default LetterWithBoundary;
