"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const isLoggedIn = !!session;

  const handleLogout = async () => {
    await authClient.signOut();
    router.refresh();
  };

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/courses">Courses</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-4 md:px-6 lg:px-8 sticky top-0 z-50 min-h-16 sm:min-h-17 md:min-h-18">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-100"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost hover:bg-transparent border-none px-1 sm:px-2"
        >
          <img
            src="/logo.png"
            alt="SkillSphere"
            className="h-8 sm:h-9 md:h-11 lg:h-12 object-contain"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1 font-medium">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-1 sm:gap-2">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar ring ring-primary"
            >
              <div className="w-9 sm:w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={
                    session?.user?.image ||
                    "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-xl border border-base-200"
            >
              <li className="p-2 border-b border-base-200">
                <p className="font-bold text-lg truncate">
                  {session?.user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {session?.user?.email}
                </p>
              </li>
              <li>
                <Link href="/profile" className="justify-between text-sm">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-error w-full text-left text-sm"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-1.5 sm:gap-2">
            <Link
              href="/login"
              className="btn btn-ghost btn-sm sm:btn-md text-xs sm:text-sm px-3 sm:px-4 rounded-xl"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-primary btn-sm sm:btn-md text-xs sm:text-sm border-0 text-white bg-linear-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl px-3 sm:px-4"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
