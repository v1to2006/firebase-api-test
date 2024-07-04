"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  return (
    <div className="grid place-items-center content-center">
      <h1 className="pt-20 text-black font-medium text-3xl">
        Welcome back {session?.data?.user?.email}!
      </h1>
      <button
        type="button"
        className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}

Home.requireAuth = true;
