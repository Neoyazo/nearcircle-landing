import React from 'react';

export default function NearCircleLandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-xl space-y-6">
        <h1 className="text-5xl font-bold text-blue-800">NearCircle</h1>
        <p className="text-lg text-gray-700">
          Meet real people, right here, right now.
        </p>
        <p className="text-gray-600">
          A spontaneous, platonic social app helping you connect instantly with others nearby for coffee, a walk, or just a chat.
        </p>
        <div className="bg-white p-6 rounded-2xl shadow-xl space-y-4">
          <h2 className="text-xl font-semibold">Join our early access list</h2>
          <input type="email" placeholder="Enter your email" className="w-full border p-2 rounded" />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded">
            Notify Me
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Launching soon in Luxembourg City 🚀
        </p>
      </div>
    </div>
  );
}