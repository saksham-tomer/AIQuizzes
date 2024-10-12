import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { FacebookIcon } from "lucide-react";
import React from "react";
import HyperText from "../magicui/hyper-text";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-gray-900 py-3 absolute min-w-full left-0 right-0  rounded-t-xl">
      <div className="container mx-auto flex justify-between items-center">
        <HyperText
          className="font-bold text-2xl md:text-4xl text-purple-300"
          text="Quizzy"
        />

        <div className="flex text-sm space-x-8 text-gray-400">
          <a href="#" className="hover:text-white">
            Pricing
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full border-2 border-purple-500 hover:bg-gray-700"
          >
            <FacebookIcon className="w-5 h-5 text-purple-300 hover:text-purple-400" />
          </a>

          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full border-2 border-yellow-300 hover:bg-gray-700"
          >
            <LinkedInLogoIcon className="w-5 h-5 text-yellow-300 hover:text-yellow-400" />
          </a>

          <a
            href="#"
            className="p-2 bg-gray-800 rounded-full border-2 border-pink-400 hover:bg-gray-700"
          >
            <TwitterLogoIcon className="w-5 h-5 text-pink-300 hover:text-pink-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
