import { clsx } from 'clsx';
import { Flag } from 'lucide-react';

interface QuestionNavigatorProps {
  totalCount: number;
  currentIndex: number;
  onSelect: (index: number) => void;
  answeredIndexes: number[];
  flaggedIndexes: number[];
}

export default function QuestionNavigator({
  totalCount,
  currentIndex,
  onSelect,
  answeredIndexes,
  flaggedIndexes
}: QuestionNavigatorProps) {

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
      <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 px-1">Question Navigator</h3>
      <div className="grid grid-cols-5 gap-2.5 max-h-[250px] md:max-h-[min(60vh,400px)] overflow-y-auto p-1.5 scrollbar-thin">
        {Array.from({ length: totalCount }).map((_, i) => {
          const isCurrent = i === currentIndex;
          const isAnswered = answeredIndexes.includes(i);
          const isFlagged = flaggedIndexes.includes(i);

          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={clsx(
                "relative flex items-center justify-center aspect-square rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5",
                {
                  "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-105 z-10": isCurrent,
                  "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 border border-green-200 dark:border-green-800": !isCurrent && isAnswered,
                  "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600": !isCurrent && !isAnswered,
                }
              )}
            >
              {i + 1}
              {isFlagged && (
                <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-orange-100 dark:bg-orange-900/80 border border-orange-400 dark:border-orange-500 shadow-sm">
                  <Flag className="w-2.5 h-2.5 text-orange-600 dark:text-orange-400" fill="currentColor" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
