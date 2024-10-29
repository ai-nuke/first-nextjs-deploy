"use client";
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">
        My First Next.js 14 Deployment!
      </h1>
      <p className="text-xl mb-4">
        Current count: {count}
      </p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setCount(count + 1)}
      >
        Click me!
      </button>
    </main>
  );
}