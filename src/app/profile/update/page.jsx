"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Link from "next/link";

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
      <div className="flex justify-center items-center py-40">
        <span className="loading loading-spinner loading-lg text-primary"></span>
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

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Failed to update profile.");
    } else {
      toast.success("Profile updated successfull!");
      router.push("/profile");
      router.refresh();
    }
  };
  return (
    <div className="py-16 px-4 flex justify-center items-center flex-1">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl rounded-2xl border border-base-200">
        <div className="card-body">
          <div className="mx-auto mb-4">
            <h2 className="text-2xl font-bold mb-2">Update Profile</h2>
          </div>

          <form onSubmit={handleUpdate} className="flex flex-col gap-4">
            <div className="flex justify-center mb-4">
              <div className="avatar">
                <div className="w-28 rounded-full ring ring-primary">
                  <img
                    src={
                      image ||
                      "https://images.unsplash.com/vector-1742875355318-00d715aec3e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
                    }
                    alt="Avatar Preview"
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full rounded-xl"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Image URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                className="input input-bordered w-full rounded-xl"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="flex gap-4 mt-4 mb-4">
              <Link
                href="/profile"
                className="btn btn-outline flex-1 rounded-xl"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="btn btn-primary flex-1 border-0 text-white bg-linear-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
