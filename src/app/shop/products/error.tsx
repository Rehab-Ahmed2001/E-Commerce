"use client";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full rounded-2xl bg-white shadow-lg p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
