"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { FaUser, FaImage, FaUserEdit, FaArrowLeft } from "react-icons/fa";

const ProfileUpdatePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  if (isPending) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    router.push("/login?callbackUrl=/profile/update");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name,
      image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to update profile");
    } else {
      toast.success("Profile updated successfully!");
      router.push("/profile");
      router.refresh();
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-4xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 px-8 py-10 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <FaUserEdit className="w-7 h-7" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Update Profile
          </h1>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-[6px] border-white shadow-xl bg-gray-100">
                <Image
                  src={
                    image ||
                    "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000"
                  }
                  alt="Profile Preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Profile Image URL
              </label>

              <div className="relative">
                <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500" />

                <input
                  type="url"
                  placeholder="https://example.com/profile-image.jpg"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/profile"
                className="flex items-center justify-center gap-2 flex-1 border border-gray-300 bg-white text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition"
              >
                <FaArrowLeft className="w-4 h-4" />
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-linear-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] hover:from-purple-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-70"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdatePage;
