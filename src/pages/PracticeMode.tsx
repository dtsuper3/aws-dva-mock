import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';

export default function PracticeMode() {
  const navigate = useNavigate();
  const currentAttempt = useQuizStore(state => state.currentAttempt);
  const currentQuestionIndex = useQuizStore(state => state.currentQuestionIndex);
  const setAnswer = useQuizStore(state => state.setAnswer);
  const setQuestionIndex = useQuizStore(state => state.setQuestionIndex);
  const clearCurrentTest = useQuizStore(state => state.clearCurrentTest);

  const [examQuestions] = useState(questions);
  const [showFeedback, setShowFeedback] = useState(false);
  
  useEffect(() => {
    if (!currentAttempt) {
      navigate('/');
    }
  }, [currentAttempt, navigate]);

  if (!currentAttempt) return null;

  const currentQuestion = examQuestions[currentQuestionIndex];
  const userAnswers = currentAttempt.userAnswers || {};
  const currentSelectedOptions = userAnswers[currentQuestion.id] || [];

  const handleSelectOption = (optionId: string) => {
    if (showFeedback) return;
    
    const isMulti = currentQuestion.isMultiSelect;
    let newSelection;
    if (isMulti) {
      if (currentSelectedOptions.includes(optionId)) {
        newSelection = currentSelectedOptions.filter(id => id !== optionId);
      } else {
        newSelection = [...currentSelectedOptions, optionId];
      }
    } else {
      newSelection = [optionId];
    }
    setAnswer(currentQuestion.id, newSelection);
  };

  const handleCheckAnswer = () => {
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setShowFeedback(false);
      setQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleFinish = () => {
    clearCurrentTest();
    navigate('/');
  };

  const isCurrentAnswered = currentSelectedOptions.length > 0;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Practice Mode</h1>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Question {currentQuestionIndex + 1} of {examQuestions.length}
          </p>
        </div>
        <button
           onClick={handleFinish}
           className="text-gray-500 hover:text-gray-900 dark:hover:text-white font-medium transition-colors border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Exit Practice
        </button>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden shadow-inner">
        <div 
          className="bg-emerald-500 h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${((currentQuestionIndex + 1) / examQuestions.length) * 100}%` }}
        ></div>
      </div>

      <QuestionCard
        question={currentQuestion}
        selectedOptionIds={currentSelectedOptions}
        onSelectOption={handleSelectOption}
        showFeedback={showFeedback}
      />

      <div className="flex justify-end pt-4">
        {!showFeedback ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!isCurrentAnswered}
            className="px-8 py-3 rounded-xl font-bold bg-emerald-600 text-white disabled:opacity-50 hover:bg-emerald-700 shadow-md transition-all active:scale-[0.98]"
          >
            Check Answer
          </button>
        ) : currentQuestionIndex === examQuestions.length - 1 ? (
          <button
            onClick={handleFinish}
            className="px-8 py-3 rounded-xl font-bold bg-emerald-600 text-white hover:bg-emerald-700 shadow-md transition-all active:scale-[0.98]"
          >
            Complete Practice
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-8 py-3 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all active:scale-[0.98]"
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}
