"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaArrowRight, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to log in.");
    } else {
      toast.success("Logged in successfully!");
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (session) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-gray-100 px-4 py-12">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-blue-600 via-purple-600 to-pink-500 text-white p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Welcome Back to SkillSphere
            </h1>

            <p className="text-lg text-white/80 leading-relaxed max-w-md">
              Continue learning, explore premium courses, and grow your skills
              with the best online learning platform.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <span>Access your enrolled courses</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <span>Track your learning progress</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  ✓
                </div>
                <span>Learn from expert instructors</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Login</h2>

            <p className="text-gray-500">
              Sign in to continue your learning journey
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="#"
                className="text-sm text-blue-600 hover:text-purple-600 transition"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Login
                  <FaArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-200 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >
            <FaGoogle className="text-red-500 w-5 h-5" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-purple-600 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
