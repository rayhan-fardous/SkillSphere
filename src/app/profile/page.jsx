import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaUserEdit,
  FaEnvelope,
  FaCalendarAlt,
  FaUserCircle,
} from "react-icons/fa";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?callbackUrl=/profile");
  }

  const user = session.user;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-white rounded-4xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="relative h-56 bg-linear-to-r from-blue-600 via-purple-600 to-pink-500">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative px-6 sm:px-10 lg:px-14 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div className="-mt-20 flex flex-col sm:flex-row items-center sm:items-end gap-6">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-white">
                <Image
                  src={
                    user.image ||
                    "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000"
                  }
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center sm:text-left pb-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {user.name}
                </h1>

                <p className="text-gray-500 flex items-center justify-center sm:justify-start gap-2">
                  <FaEnvelope className="w-4 h-4 text-blue-500" />
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <Link
                href="/profile/update"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                <FaUserEdit className="w-4 h-4" />
                Update Profile
              </Link>
            </div>
          </div>

          <div className="mt-12 mb-10 border-t border-gray-100"></div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Account Information
            </h2>
            <p className="text-gray-500">
              Manage and review your personal account details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                <FaUserCircle className="w-5 h-5 text-blue-600" />
              </div>

              <p className="text-sm text-gray-500 mb-2">Full Name</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {user.name}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                <FaEnvelope className="w-5 h-5 text-purple-600" />
              </div>

              <p className="text-sm text-gray-500 mb-2">Email Address</p>
              <h3 className="text-lg font-semibold text-gray-900 break-all">
                {user.email}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
                <FaCalendarAlt className="w-5 h-5 text-pink-600" />
              </div>

              <p className="text-sm text-gray-500 mb-2">Member Since</p>
              <h3 className="text-lg font-semibold text-gray-900">
                {new Date(user.createdAt).toLocaleDateString()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
