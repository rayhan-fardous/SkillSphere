import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h2 className="text-9xl font-bold text-primary mb-4">404</h2>
      <h3 className="text-3xl font-semibold mb-6">Page Not Found</h3>
      <p className="text-gray-500 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="btn btn-primary text-white">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;