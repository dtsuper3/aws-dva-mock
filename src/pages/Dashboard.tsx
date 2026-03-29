import { Play, BookOpen, Clock, Activity, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useQuizStore } from '../store/quizStore';

export default function Dashboard() {
  const navigate = useNavigate();
  const startTest = useQuizStore(state => state.startTest);
  const history = useQuizStore(state => state.history);
  const currentAttempt = useQuizStore(state => state.currentAttempt);
  const mode = useQuizStore(state => state.mode);

  const handleStartExam = () => {
    startTest('exam', 8); // using 8 for the sample questions
    navigate('/exam');
  };

  const handleStartPractice = () => {
    startTest('practice', 8);
    navigate('/practice');
  };

  const bestScore = history.length > 0 
    ? Math.max(...history.map(h => (h.score / h.totalQuestions) * 1000)) 
    : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          AWS Certified Developer Associate
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Pass the DVA-C02 exam with confidence. Take full-length mock exams or practice specific domains.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mb-6">
            <Clock className="w-7 h-7 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Exam Simulation</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[48px] leading-relaxed">
            65 questions • 130 minutes. Strict timer and scoring exactly like the real exam.
          </p>
          <button
            onClick={handleStartExam}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer py-3.5 px-6 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98]"
          >
            <Play className="w-5 h-5" fill="currentColor" />
            Start Mock Exam
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
          <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Practice Mode</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[48px] leading-relaxed">
            Instant feedback, detailed explanations, and AWS documentation references.
          </p>
          <button
            onClick={handleStartPractice}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white py-3.5 px-6 rounded-xl font-semibold transition-all hover:shadow-lg active:scale-[0.98]"
          >
            <Activity className="w-5 h-5" />
            Start Practice
          </button>
        </div>
      </div>

      {currentAttempt && !useQuizStore(state => state.isSubmitted) && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-1">Test in Progress</h3>
            <p className="text-sm text-amber-700 dark:text-amber-400">You have an unfinished {mode} session.</p>
          </div>
          <button
            onClick={() => navigate(`/${mode}`)}
            className="bg-amber-600 hover:bg-amber-700 text-white cursor-pointer px-8 py-3 rounded-xl font-semibold transition-colors hover:shadow-md whitespace-nowrap active:scale-[0.98]"
          >
            Resume Test
          </button>
        </div>
      )}

      {history.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <History className="w-6 h-6 text-gray-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Progress</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Total Attempts</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">{history.length}</div>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Best Score</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                <span className={bestScore >= 720 ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'}>
                  {Math.round(bestScore)}
                </span>
                <span className="text-lg text-gray-400">/1000</span>
              </div>
            </div>
            <div className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">Overall Pass Rate</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {Math.round((history.filter(h => h.passed).length / history.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
