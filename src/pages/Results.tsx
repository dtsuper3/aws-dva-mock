import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Award, AlertTriangle, ArrowLeft, RotateCcw } from 'lucide-react';
import { useQuizStore } from '../store/quizStore';

export default function Results() {
  const navigate = useNavigate();
  const currentAttempt = useQuizStore(state => state.currentAttempt);
  const clearCurrentTest = useQuizStore(state => state.clearCurrentTest);

  useEffect(() => {
    if (!currentAttempt || !useQuizStore.getState().isSubmitted) {
      navigate('/');
    }
  }, [currentAttempt, navigate]);

  if (!currentAttempt || !useQuizStore.getState().isSubmitted) return null;

  const { score, passed, domainScores } = currentAttempt;

  const chartData = Object.entries(domainScores || {}).map(([domain, data]) => ({
    name: domain,
    percentage: Math.round((data.correct / data.total) * 100) || 0,
    correct: data.correct,
    total: data.total,
  }));

  const handleReturnHome = () => {
    clearCurrentTest();
    navigate('/');
  };

  const handleRetake = () => {
    clearCurrentTest();
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className={`p-8 md:p-12 rounded-3xl border-2 text-center transition-colors shadow-sm ${
        passed 
          ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' 
          : 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800'
      }`}>
        <div className="flex justify-center mb-6">
          {passed ? (
            <div className="w-24 h-24 bg-green-100 dark:bg-green-800/50 rounded-full flex items-center justify-center shadow-inner">
              <Award className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-red-100 dark:bg-red-800/50 rounded-full flex items-center justify-center shadow-inner">
              <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
            </div>
          )}
        </div>
        
        <h1 className={`text-3xl md:text-5xl font-extrabold mb-4 tracking-tight ${
          passed ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
        }`}>
          {passed ? 'Congratulations! You Passed!' : 'Requires More Practice'}
        </h1>
        
        <div className="text-2xl text-gray-700 dark:text-gray-300 mb-2">
          Your Score: <span className={`font-black ${passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{Math.round(score || 0)}</span> / 1000
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Passing Score: 720 / 1000
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Domain Performance</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Identify your strong areas and topics that need more work.</p>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fill: 'currentColor' }} className="text-gray-500 dark:text-gray-400 text-xs" />
              <YAxis dataKey="name" type="category" width={140} tick={{ fill: 'currentColor' }} className="text-sm font-medium text-gray-700 dark:text-gray-300" />
              <Tooltip 
                formatter={(value: any, _name: any, props: any) => [
                  `${value}% (${props.payload.correct}/${props.payload.total})`,
                  'Score'
                ]}
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '12px', border: 'none', backgroundColor: 'rgba(17, 24, 39, 0.9)', color: '#fff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
              />
              <Bar dataKey="percentage" radius={[0, 6, 6, 0]} barSize={36} animationDuration={1500}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.percentage >= 72 ? '#10b981' : '#f43f5e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
        <button
          onClick={handleReturnHome}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:shadow-sm active:scale-[0.98]"
        >
          <ArrowLeft className="w-5 h-5" />
          Dashboard
        </button>
        <button
          onClick={handleRetake}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
        >
          <RotateCcw className="w-5 h-5" />
          Retake Exam
        </button>
      </div>
    </div>
  );
}
