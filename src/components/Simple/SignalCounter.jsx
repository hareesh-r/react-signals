import { signal } from "@preact/signals-react";

const count = signal(0);

export default function SignalCounter() {
  console.log("SignalCounter rendered");

  return (
    <div className="p-8 bg-white bg-opacity-50 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">Signal Counter</h3>
      <p className="text-3xl font-semibold text-gray-700 mb-8">Count: {count}</p>
      <button
        onClick={() => count.value++}
        className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 hover:from-emerald-600 hover:to-teal-600"
      >
        Increment
      </button>
    </div>
  );
}
