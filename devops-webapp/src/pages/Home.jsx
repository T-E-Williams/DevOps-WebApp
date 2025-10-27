// src/pages/Home.jsx

import { Link } from "react-router-dom";
import React, { useState } from "react";

// File tree structure
const fileStructure = {
  Files: {
    A: { A1: {} },
    B: { B1: {} },
    C: { C1: {} },
  },
};

// Recursive file tree component
const FileTreeNode = ({ node }) => {
  const [collapsed, setCollapsed] = useState({});

  const toggle = (key) => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <ul className="pl-4">
      {Object.keys(node).map((key) => (
        <li key={key}>
          {Object.keys(node[key]).length > 0 ? (
            <div
              onClick={() => toggle(key)}
              className="cursor-pointer font-medium hover:text-blue-600 select-none flex items-center gap-1"
            >
              {collapsed[key] ? "-" : "+"} {key}
            </div>
          ) : (
            <div className="pl-4"> {key}</div>
          )}
          {Object.keys(node[key]).length > 0 && collapsed[key] && (
            <FileTreeNode node={node[key]} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:underline"
        >
          DevOps
        </Link>

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
      <main className="flex flex-col flex-1 items-center justify-center gap-8 p-6">
        <h2 className="text-4xl font-semibold text-gray-700 text-center">
          DevOps Dashboard
        </h2>

        {/* File Tree */}
        <div className="w-full max-w-md bg-white shadow rounded p-4">
          <h3 className="font-bold text-lg mb-2">File Tree</h3>
          <FileTreeNode node={fileStructure} />
        </div>
      </main>
    </div>
  );
}
