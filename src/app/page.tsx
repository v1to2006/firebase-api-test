"use client";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsEmailVerified(user.emailVerified);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="grid place-items-center content-center">
      {!user ? (
        <>
          <h1 className="pt-20 text-black font-medium text-3xl">
            You are not signed in
          </h1>
          <a href="/signin" className="mt-5 text-blue-700 hover:underline">
            Sign In
          </a>
          <a href="/signup" className="mt-5 text-blue-700 hover:underline">
            Sign Up
          </a>
        </>
      ) : (
        <>
          <h1 className="pt-20 text-black font-medium text-3xl">
            You are signed in as {user.email}
          </h1>
          {!isEmailVerified && (
            <p className="text-red-500 mt-2">
              Your email is not verified. Please check your email.
            </p>
          )}
          <button
            type="button"
            className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

Home.requireAuth = true;
