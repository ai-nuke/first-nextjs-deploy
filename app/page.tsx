"use client";
import { useState } from 'react';
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const [count, setCount] = useState(0);
  const { user, isLoaded } = useUser();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">
        My First Next.js 14 Deployment!
      </h1>
      
      {!isLoaded ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <p className="mb-4">Welcome, {user.firstName}!</p>
          <p className="text-xl mb-4">
            Current count: {count}
          </p>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
            onClick={() => setCount(count + 1)}
          >
            Click me!
          </button>
          <SignOutButton>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Sign Out
            </button>
          </SignOutButton>
        </>
      ) : (
        <SignInButton>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Sign In
          </button>
        </SignInButton>
      )}
    </main>
  );
}