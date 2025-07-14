import React, { useState, useRef } from 'react';

const CounterStopwatch = () => {
  const [count, setCount] = useState(0);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md space-y-10">
        <h1 className="text-3xl font-bold text-center text-gray-800">Counter & Stopwatch</h1>

        {/* Counter Section */}
        <div className="bg-blue-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">Counter</h2>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setCount(count - 1)}
              className="bg-red-200 hover:bg-red-300 text-red-800 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-200 hover:bg-green-300 text-green-800 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Stopwatch Section */}
        <div className="bg-yellow-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-xl font-semibold text-yellow-700 mb-4 text-center">Stopwatch</h2>
          <div className="text-2xl font-bold text-center mb-4">{time}s</div>
          <div className="flex justify-center gap-3">
            <button
              onClick={startStopwatch}
              className="bg-blue-200 hover:bg-blue-300 text-blue-800 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Start
            </button>
            <button
              onClick={stopStopwatch}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 text-lg font-semibold rounded-lg"
            >
              Stop
            </button>
            <button
              onClick={resetStopwatch}
              className="bg-red-200 hover:bg-red-300 text-red-800 px-6 py-3 text-lg font-semibold rounded-lg"
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
