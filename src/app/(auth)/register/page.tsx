"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      router.push("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="Name"
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Register;
