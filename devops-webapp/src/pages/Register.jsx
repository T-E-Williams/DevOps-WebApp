import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) setMessage("Registered successfully!");
      else setMessage(`${data.error || "Registration failed"}`);
    } catch (err) {
      setMessage("Network error");
    }
  };

  return (
<div className="min-h-screen bg-gray-100 flex flex-col">
  {/* Navbar stays at top */}
  <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
  <Link to="/" className="text-2xl font-bold text-gray-800 hover:underline">
    DevOps WebApp
  </Link>
    <div className="flex gap-4">
      <Link
        to="/Login"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition"
      >
        Login
      </Link>
      <Link
        to="/Register"
        className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-semibold transition"
      >
        register
      </Link>
    </div>
  </header>

  {/* Form centered below header */}
  <div className="flex-1 flex items-center justify-center">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4"
    >
      <h1 className="text-2xl font-bold text-center">Register</h1>

      <input
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Register
      </button>

      {message && <p className="text-center mt-2 text-red-600">{message}</p>}
    </form>
  </div>
</div>

  );
}
