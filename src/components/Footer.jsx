import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-auto">
      <nav>
        <h6 className="footer-title">Contact Us</h6>
        <p className="text-sm">Email: support@skillsphere.com</p>
        <p className="text-sm">Phone: +1 (555) 123-4234</p>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/terms" className="link link-hover">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy policy
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            className="link link-hover"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            className="link link-hover"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
          <a
            className="link link-hover"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
