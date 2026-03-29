import { clsx } from 'clsx';
import { CheckCircle2, Circle, Square, CheckSquare } from 'lucide-react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOptionIds: string[];
  onSelectOption: (optionId: string) => void;
  showFeedback?: boolean;
}

export default function QuestionCard({
  question,
  selectedOptionIds,
  onSelectOption,
  showFeedback = false
}: QuestionCardProps) {
  const isMulti = question.isMultiSelect;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
          {question.domain}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {isMulti ? 'Select multiple options' : 'Select one option'}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
        {question.text}
      </h3>

      <div className="space-y-3 relative">
        {question.options.map(option => {
          const isSelected = selectedOptionIds.includes(option.id);
          const isCorrectAnswer = showFeedback && question.correctOptions.includes(option.id);
          const isIncorrectSelection = showFeedback && isSelected && !question.correctOptions.includes(option.id);

          return (
            <button
              key={option.id}
              onClick={() => onSelectOption(option.id)}
              disabled={showFeedback}
              aria-pressed={isSelected}
              className={clsx(
                "w-full text-left p-4 rounded-lg border-2 transition-all flex items-start gap-3",
                {
                  "border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:border-blue-700 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300": !isSelected && !showFeedback,
                  "border-blue-500 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-500 text-blue-900 dark:text-blue-100": isSelected && !showFeedback,
                  "border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-600 text-green-900 dark:text-green-100": isCorrectAnswer,
                  "border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-600 text-red-900 dark:text-red-100": isIncorrectSelection,
                  "opacity-50": showFeedback && !isCorrectAnswer && !isIncorrectSelection
                }
              )}
            >
              <div className="flex-shrink-0 mt-0.5">
                {isMulti ? (
                  isSelected ? <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <Square className="w-5 h-5 text-gray-400" />
                ) : (
                  isSelected ? <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <Circle className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <span className="font-medium inline-block flex-1">{option.text}</span>
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/50 animate-in slide-in-from-bottom-2 fade-in">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Explanation</h4>
          <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed mb-4">
            {question.explanation}
          </p>
          {question.referenceUrl && (
            <a
              href={question.referenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              AWS Documentation Reference →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
