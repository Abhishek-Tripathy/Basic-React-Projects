import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-6xl font-bold mb-6">Counter</h1>
      <h2 className="text-4xl mb-12">Current Value: <span className="font-semibold text-5xl">{count}</span></h2>
      
      <div className="flex gap-6">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-3xl hover:bg-green-600 transition"
        >
          Add Value
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-3xl hover:bg-red-600 transition"
        >
          Remove Value
        </button>
      </div>
    </div>
  );
}

export default Counter;
