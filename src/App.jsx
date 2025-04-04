import UseStateCounter from "./components/Simple/UseStateCounter";
import SignalCounter from "./components/Simple/SignalCounter";
import UseStateCounterComplex from "./components/Complex/UseStateCounterComplex";
import SignalCounterComplex from "./components/Complex/SignalCounterComplex";
import ReactPerf from "./components/Benchmark/ReactPerf";
import SignalsPerf from "./components/Benchmark/SignalsPerf";
import { useState } from "react";

function App() {
  const [exampleNo] = useState(3);
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-12">
          React Counter Comparison
        </h1>

        {/* Counter Components Simple Example */}
        {exampleNo === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <UseStateCounter />
            <SignalCounter />
          </div>
        )}

        {/* Counter Components Complex Example */}
        {exampleNo === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <UseStateCounterComplex />
            <SignalCounterComplex />
          </div>
        )}

        {/* Performance Benchmark Components */}
        {exampleNo === 3 && (
          <>
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent my-8">
              Performance Benchmarks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ReactPerf />
              <SignalsPerf />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
