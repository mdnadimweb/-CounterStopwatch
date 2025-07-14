import React, { useState, useRef } from 'react';

const CounterStopwatch = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => setTime(t => t + 1), 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center space-y-8">
        <h1 className="text-2xl font-bold text-gray-500">Counter & Stopwatch</h1>

        {/* Counter */}
        <div>
          <p className="text-lg font-semibold mb-3">Counter: {count}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded"
            >
              -
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-100 hover:bg-green-200 text-green-300 px-4 py-2 rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Stopwatch */}
        <div>
          <p className="text-lg font-semibold mb-3">Time: {time}s</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={start}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded"
            >
              Start
            </button>
            <button
              onClick={stop}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded"
            >
              Stop
            </button>
            <button
              onClick={reset}
              className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterStopwatch;
