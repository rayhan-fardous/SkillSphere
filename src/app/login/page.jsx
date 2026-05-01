import React from 'react';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async({searchParams}) => {
  const sp = await searchParams;
  const callbackUrl = sp.callbackUrl || "/";

  async function loginAction() {
    "use server";
    const cookieStore = await cookies();
    cookieStore.set("auth", "true");
    redirect(callbackUrl);
  }

  return (
    <div className="flex items-center justify-center py-20 px-4 flex-1">
      <div className="card w-full max-w-sm bg-base-100 shadow-2xl border border-base-200">
        <div className="card-body text-center">
          <div className="mb-4 flex justify-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
             </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-6">Log in to access your secure courses</p>
          <form action={loginAction}>
            <button className="btn btn-primary w-full text-white">Log In (Mock Demo)</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;