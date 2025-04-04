import { signal } from '@preact/signals-react';
import { useState } from 'react';
import { measurePerformance, formatNumber, calculateStats } from './BenchmarkUtils';

const count = signal(0);

const SignalsPerf = () => {
  const [benchmarkResults, setBenchmarkResults] = useState(null);
  const [historicalResults, setHistoricalResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const increment = () => {
    count.value++;
  };

  const runBenchmark = () => {
    setIsRunning(true);
    // Small delay to allow UI to update
    setTimeout(() => {
      const results = measurePerformance(() => {
        increment();
      });
      setBenchmarkResults(results);
      setHistoricalResults(prev => [...prev, results]);
      setIsRunning(false);
    }, 100);
  };

  const stats = calculateStats(historicalResults);

  return (
    <div className="p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">
        Signals Performance Benchmark
      </h2>
      
      <div className="mb-8">
        <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Count: {count.value}
        </div>
      </div>

      <div className="space-y-6">
        <button
          onClick={runBenchmark}
          disabled={isRunning}
          className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isRunning ? 'Running Benchmark...' : 'Run Benchmark'}
        </button>

        {benchmarkResults && (
          <div className="space-y-4">
            <div className="p-6 bg-white/30 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">Latest Results:</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  Execution Time: <span className="font-mono font-medium">{benchmarkResults.executionTime}ms</span>
                </p>
                <p className="text-gray-700">
                  Operations/Second: <span className="font-mono font-medium">{formatNumber(benchmarkResults.operationsPerSecond)}</span>
                </p>
              </div>
            </div>

            {stats && (
              <div className="p-6 bg-white/30 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Aggregate Statistics ({stats.totalRuns} runs):</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-right py-2">Min</th>
                        <th className="text-right py-2">Avg</th>
                        <th className="text-right py-2">Max</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2">Execution Time (ms)</td>
                        <td className="text-right font-mono">{stats.minExecutionTime}</td>
                        <td className="text-right font-mono">{stats.avgExecutionTime}</td>
                        <td className="text-right font-mono">{stats.maxExecutionTime}</td>
                      </tr>
                      <tr>
                        <td className="py-2">Operations/Second</td>
                        <td className="text-right font-mono">{formatNumber(stats.minOpsPerSecond)}</td>
                        <td className="text-right font-mono">{formatNumber(stats.avgOpsPerSecond)}</td>
                        <td className="text-right font-mono">{formatNumber(stats.maxOpsPerSecond)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignalsPerf;
