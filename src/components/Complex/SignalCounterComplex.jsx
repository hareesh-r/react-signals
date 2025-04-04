import { signal } from '@preact/signals-react';

const count = signal(0);
const dummyState = signal(false);

const UseSignalCounterComplex = () => {

  console.log('UseSignalCounterComplex rendered');

  // Nested component that displays the count
  const CountDisplay = () => {
    console.log('CountDisplay rendered');
    return (
      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
        Count: {count}
      </div>
    );
  };

  const IncrementButton = () => {
    console.log('IncrementButton rendered');
    return (
      <button
        onClick={() => count.value++}
        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-emerald-600 hover:to-teal-600"
      >
        Increment
      </button>
    );
  };

  const DecrementButton = () => {
    console.log('DecrementButton rendered');
    return (
      <button
        onClick={() => count.value--}
        className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-rose-600 hover:to-pink-600"
      >
        Decrement
      </button>
    );
  };

  return (
    <div className="p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8">signals-react Complex Counter</h2>
      <div className="mb-8">
        <CountDisplay />
      </div>
      <div className="flex gap-4 mb-8">
        <IncrementButton />
        <DecrementButton />
      </div>
      <div className="space-y-4">
        <button
          onClick={() => (dummyState.value = !dummyState.value)}
          className="w-full px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-gray-600 hover:to-slate-600"
        >
          Toggle Dummy State
        </button>
        <p className="text-sm font-medium text-gray-600">
          Dummy State: {dummyState.value.toString()}
        </p>
      </div>
    </div>
  );
};

export default UseSignalCounterComplex;
