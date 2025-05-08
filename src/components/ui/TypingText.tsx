
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypingText = ({
  text,
  className,
  speed = 50,
  delay = 0,
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, startTyping]);

  return (
    <div 
      ref={elementRef} 
      className={cn('font-mono', className)}
      aria-label={text}
    >
      {displayedText}
      <span className="border-r-2 border-hacker-green animate-blink ml-0.5">&nbsp;</span>
    </div>
  );
};
