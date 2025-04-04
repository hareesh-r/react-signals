import { useState } from "react";

export default function UseStateCounter() {
  const [count, setCount] = useState(0);
  console.log("useState: component re-rendered");

  return (
    <div className="p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">useState Counter</h3>
      <p className="text-3xl font-semibold text-gray-700 mb-8">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-600 hover:to-indigo-600"
      >
        Increment
      </button>
    </div>
  );
}
