import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';
import { questions } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import ExamTimer from '../components/ExamTimer';
import QuestionNavigator from '../components/QuestionNavigator';

export default function ExamMode() {
  const navigate = useNavigate();
  const currentAttempt = useQuizStore(state => state.currentAttempt);
  const currentQuestionIndex = useQuizStore(state => state.currentQuestionIndex);
  const flaggedQuestions = useQuizStore(state => state.flaggedQuestions);
  const setAnswer = useQuizStore(state => state.setAnswer);
  const toggleFlag = useQuizStore(state => state.toggleFlag);
  const setQuestionIndex = useQuizStore(state => state.setQuestionIndex);
  const submitTest = useQuizStore(state => state.submitTest);

  const [examQuestions] = useState(questions);
  
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

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleTimeUp = () => {
    handleSubmit();
  };

  const handleSubmit = () => {
    let correctCount = 0;
    const domainScores: Record<string, { correct: number; total: number }> = {
      'Development': { correct: 0, total: 0 },
      'Security': { correct: 0, total: 0 },
      'Deployment': { correct: 0, total: 0 },
      'Troubleshooting': { correct: 0, total: 0 },
    };

    examQuestions.forEach(q => {
      if (!domainScores[q.domain]) {
        domainScores[q.domain] = { correct: 0, total: 0 };
      }
      domainScores[q.domain].total += 1;
      
      const userAns = currentAttempt.userAnswers?.[q.id] || [];
      const isCorrect = 
        q.correctOptions.length === userAns.length && 
        q.correctOptions.every(id => userAns.includes(id));
      
      if (isCorrect) {
        correctCount += 1;
        domainScores[q.domain].correct += 1;
      }
    });

    const score = (correctCount / examQuestions.length) * 1000;
    
    submitTest({
      ...currentAttempt,
      score,
      passed: score >= 720,
      domainScores,
    } as any);

    navigate('/results');
  };

  const answeredIndexes = examQuestions
    .map((q, i) => ((userAnswers[q.id]?.length || 0) > 0 ? i : -1))
    .filter(i => i !== -1);
  const flaggedIndexes = examQuestions
    .map((q, i) => (flaggedQuestions.includes(q.id) ? i : -1))
    .filter(i => i !== -1);

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto h-[calc(100vh-8rem)]">
      <div className="flex-1 flex flex-col min-h-0 animate-in fade-in slide-in-from-left-4 duration-500">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Question {currentQuestionIndex + 1} of {examQuestions.length}
          </h2>
          <div className="lg:hidden">
            <ExamTimer onTimeUp={handleTimeUp} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 pb-4 scrollbar-thin">
          <QuestionCard
            question={currentQuestion}
            selectedOptionIds={currentSelectedOptions}
            onSelectOption={handleSelectOption}
          />
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2.5 rounded-lg font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 disabled:opacity-50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={() => toggleFlag(currentQuestion.id)}
            className={`px-6 py-2.5 rounded-lg font-medium border-2 transition-colors ${
              flaggedQuestions.includes(currentQuestion.id)
                ? 'border-orange-500 bg-orange-50 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
                : 'border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400 hover:border-orange-400 hover:text-orange-600 dark:hover:border-orange-500 dark:hover:text-orange-400'
            }`}
          >
            {flaggedQuestions.includes(currentQuestion.id) ? 'Unflag' : 'Flag for Review'}
          </button>

          {currentQuestionIndex === examQuestions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-2.5 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Submit Exam
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="hidden lg:block">
          <ExamTimer onTimeUp={handleTimeUp} />
        </div>
        <QuestionNavigator
          totalCount={examQuestions.length}
          currentIndex={currentQuestionIndex}
          answeredIndexes={answeredIndexes}
          flaggedIndexes={flaggedIndexes}
          onSelect={setQuestionIndex}
        />
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Progress Summary</h4>
          <div className="space-y-3">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
              <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-500"></div> Answered:</span>
              <span className="text-green-600 dark:text-green-400 font-bold">{answeredIndexes.length}</span>
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
              <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-orange-500"></div> Flagged:</span>
              <span className="text-orange-600 dark:text-orange-400 font-bold">{flaggedIndexes.length}</span>
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
              <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div> Unanswered:</span>
              <span className="text-red-500 dark:text-red-400 font-bold">{examQuestions.length - answeredIndexes.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
