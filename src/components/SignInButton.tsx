"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

type Props = { text: string };

const SignInButton = ({ text }: Props) => {
  return (
    <button
      className="flex items-center justify-center p-3.5 px-6 hover:bg-pink-400 bg-pink-300 border-x-2 border-l-0 border-gray-600 "
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </button>
  );
};

export default SignInButton;
