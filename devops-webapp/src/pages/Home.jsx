// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
  <Link to="/" className="text-2xl font-bold text-gray-800 hover:underline">
    DevOps WebApp
  </Link>

        {/* Login button top-left or right */}
        <div className="flex gap-4">
          <Link
            to="/login"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center">
        <h2 className="text-4xl font-semibold text-gray-700">
          Welcome to the DevOps Dashboard
        </h2>
      </main>
    </div>
  );
}
