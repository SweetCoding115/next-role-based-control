import { NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const HomePage: NextPage = () => {
  const { data: session } = useSession();

  const user = session?.user;
  return (
    <div className="container m-auto">
      <div className="grid place-content-center min-h-screen relative">
        <div className="flex flex-row justify-end items-end gap-3 absolute right-0 top-10">
          <Link className="btn" href="/admin">
            Admin
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">Welcome to NextJS DaisyUI Starter</h1>

          {user ? (
            <>
              <h2>You are logged in as {user?.email} </h2>

              <button className="btn" onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <Link className="btn btn-outline" href="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage;
