export const measurePerformance = (callback, iterations = 10000) => {
  const startTime = performance.now();

  // Run the operation multiple times
  for (let i = 0; i < iterations; i++) {
    callback();
  }

  const endTime = performance.now();
  const executionTime = endTime - startTime;

  return {
    executionTime: executionTime.toFixed(2),
    operationsPerSecond: (iterations / (executionTime / 10000)).toFixed(2),
    timestamp: new Date().toISOString()
  };
};

export const calculateStats = (results) => {
  if (!results || results.length === 0) return null;

  const executionTimes = results.map(r => parseFloat(r.executionTime));
  const opsPerSecond = results.map(r => parseFloat(r.operationsPerSecond));

  return {
    // Execution Time Stats
    avgExecutionTime: (executionTimes.reduce((a, b) => a + b, 0) / results.length).toFixed(2),
    minExecutionTime: Math.min(...executionTimes).toFixed(2),
    maxExecutionTime: Math.max(...executionTimes).toFixed(2),
    
    // Operations Per Second Stats
    avgOpsPerSecond: (opsPerSecond.reduce((a, b) => a + b, 0) / results.length).toFixed(2),
    minOpsPerSecond: Math.min(...opsPerSecond).toFixed(2),
    maxOpsPerSecond: Math.max(...opsPerSecond).toFixed(2),
    
    // Total runs
    totalRuns: results.length
  };
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num);
}; 