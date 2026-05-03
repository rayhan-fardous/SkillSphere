import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-5">
              <Image
                src="/logo.png"
                alt="SkillSphere Logo"
                width={160}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </div>

            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              SkillSphere is a modern online learning platform where users can
              explore courses, watch lessons, and enroll in skill-based
              programs.
            </p>

            <div className="flex gap-3">
              <a className="w-10 h-10 rounded-xl bg-white/5 hover:bg-linear-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a className="w-10 h-10 rounded-xl bg-white/5 hover:bg-linear-to-r hover:from-red-500 hover:to-pink-600 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                <FaYoutube className="w-4 h-4" />
              </a>

              <a className="w-10 h-10 rounded-xl bg-white/5 hover:bg-linear-to-r hover:from-sky-500 hover:to-blue-600 flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-105">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Courses", path: "/courses" },
                { name: "Profile", path: "/profile" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 group"
                  >
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <IoMailOutline className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm text-gray-300">
                    support@skillsphere.com
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <IoCallOutline className="w-5 h-5 text-purple-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-sm text-gray-300">+8809658-453320</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <IoLocationOutline className="w-5 h-5 text-pink-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-sm text-gray-400 mb-5">
              Subscribe to receive updates, new courses, and learning tips.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition"
              />

              <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2026 SkillSphere. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
