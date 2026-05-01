import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";

const Navbar = async() => {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("auth")?.value === "true";

  async function logoutAction() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.delete("auth");
  }
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
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link href="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li>
                <form action={logoutAction}>
                  <button type="submit" className="text-error w-full text-left">Logout</button>
                </form>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/login" className="btn btn-primary text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;