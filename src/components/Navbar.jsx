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

  return (
    <div className="navbar bg-base-100 shadow-sm px-8 sticky top-0 z-50">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost">
          <img src="/logo.png" alt="SkillSphere" className="h-8 object-contain" />
        </Link>
      </div>
      <div className="flex-none gap-6">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/profile">My Profile</Link></li>
        </ul>
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={session?.user?.image || "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
            >
              <li className="p-2 border-b border-base-200">
                <p className="font-bold text-sm truncate">{session?.user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{session?.user?.email}</p>
              </li>
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li>
                <button onClick={handleLogout} className="text-error w-full text-left">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/register" className="btn btn-primary text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;