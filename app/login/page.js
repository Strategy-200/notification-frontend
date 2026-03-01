"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (
      email === "admin@example.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("user", "admin");
      router.push("/dashboard");
    }

    else if (
      email === "operator@example.com" &&
      password === "operator123"
    ) {
      localStorage.setItem("user", "operator");
      router.push("/dashboard");
    }

    else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="p-6 border w-96">

        <h1 className="text-xl font-bold mb-4">
          Login
        </h1>

        {/* Credentials Display */}
        <div className="bg-gray-100 p-3 mb-4 text-sm">

          <p><b>Admin:</b> admin@example.com / admin123</p>
          <p><b>Operator:</b> operator@example.com / operator123</p>

        </div>

        <input
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="border p-2 w-full mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full"
        >
          Login
        </button>

      </div>

    </div>
  );
}