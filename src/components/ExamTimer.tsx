import { Clock } from 'lucide-react';
import { useEffect } from 'react';
import { useQuizStore } from '../store/quizStore';

export default function ExamTimer({ onTimeUp }: { onTimeUp: () => void }) {
  const timeRemaining = useQuizStore(state => state.timeRemaining);
  const tickTimer = useQuizStore(state => state.tickTimer);
  const isSubmitted = useQuizStore(state => state.isSubmitted);

  useEffect(() => {
    if (timeRemaining <= 0 && !isSubmitted) {
      onTimeUp();
      return;
    }
    if (isSubmitted) return;

    const timer = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isSubmitted, tickTimer, onTimeUp]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const isLowTime = timeRemaining < 300; // less than 5 minutes

  return (
    <div className={`flex items-center justify-center gap-2 font-mono text-lg md:text-xl font-bold p-3 rounded-lg border transition-colors ${isLowTime ? 'bg-red-50 text-red-600 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800 animate-pulse' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700'}`}>
      <Clock className="w-5 h-5 flex-shrink-0" />
      <span>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
    </div>
  );
}
