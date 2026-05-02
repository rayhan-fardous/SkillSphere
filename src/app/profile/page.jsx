import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const user = session.user;
  return (
    <div className="py-12 px-8 max-w-4xl mx-auto w-full">
      <div className="bg-base-100 shadow-xl border border-base-200 rounded-xl overflow-hidden p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary">
              <img
                src={
                  user.image ||
                  "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
                }
                alt="Profile picture"
              />
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-500 mb-6">{user.email}</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/profile/update"
                className="btn border-0 text-white bg-linear-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl"
              >
                Update Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="divider my-10">Account Information</div>

        <div className="grid grid-cols-1  gap-4">
          <div className="bg-base-200 p-3 rounded-md">
            <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Full Name
            </h3>
            <p className="text-lg font-medium">{user.name}</p>
          </div>
          <div className="bg-base-200 p-3 rounded-md">
            <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Email Address
            </h3>
            <p className="text-lg font-medium">{user.email}</p>
          </div>
          <div className="bg-base-200 p-3 rounded-md">
            <h3 className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Member Since
            </h3>
            <p className="text-lg font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
