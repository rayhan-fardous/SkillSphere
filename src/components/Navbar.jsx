import Link from "next/link";
import React from "react";

const Navbar = () => {
  const isLoggedIn = false;
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
              <li><button className="text-error">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <button className="btn btn-ghost">Login</button>
            <button className="btn btn-primary">Register</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;