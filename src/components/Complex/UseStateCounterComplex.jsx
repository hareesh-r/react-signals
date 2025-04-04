import { useState } from 'react';

// Nested component that displays the count
const CountDisplay = ({ count }) => {
  console.log('CountDisplay rendered');
  return (
    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      Count: {count}
    </div>
  );
};

// Nested component for increment button
const IncrementButton = ({ onIncrement }) => {
  console.log('IncrementButton rendered');
  return (
    <button
      onClick={onIncrement}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-blue-600 hover:to-indigo-600"
    >
      Increment
    </button>
  );
};

// Nested component for decrement button
const DecrementButton = ({ onDecrement }) => {
  console.log('DecrementButton rendered');
  return (
    <button
      onClick={onDecrement}
      className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-rose-600 hover:to-pink-600"
    >
      Decrement
    </button>
  );
};

// Main component
const UseStateCounterComplex = () => {
  const [count, setCount] = useState(0);
  const [dummyState, setDummyState] = useState(false);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const toggleDummy = () => setDummyState(prev => !prev);

  console.log('UseStateCounterComplex rendered');

  return (
    <div className="p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8">useState Complex Counter</h2>
      <div className="mb-8">
        <CountDisplay count={count} />
      </div>
      <div className="flex gap-4 mb-8">
        <IncrementButton onIncrement={increment} />
        <DecrementButton onDecrement={decrement} />
      </div>
      <div className="space-y-4">
        <button
          onClick={toggleDummy}
          className="w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-gray-600 hover:to-slate-600"
        >
          Toggle Dummy State
        </button>
        <p className="text-sm font-medium text-gray-600">
          Dummy State: {dummyState.toString()}
        </p>
      </div>
    </div>
  );
};

export default UseStateCounterComplex; 