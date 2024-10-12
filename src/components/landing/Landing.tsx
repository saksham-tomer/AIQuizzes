"use client";
import React from "react";
import HyperText from "../magicui/hyper-text";
import Image from "next/image";
import "./style.css";
import {
  BarChartIcon,
  BellIcon,
  BookmarkFilledIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  ArrowUpRight,
  BookCopy,
  BookIcon,
  Check,
  MailIcon,
  PieChart,
  RadioTower,
  SlackIcon,
} from "lucide-react";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

function Landing() {
  return (
    <div className="container mx-auto px-4">
      <section className="flex flex-col md:flex-row mt-12 gap-6">
        {/* Left Section */}
        <div className="flex flex-col w-full md:w-1/2 p-4 md:p-6 gap-2 text-start">
          <HyperText
            className="font-bold text-4xl md:text-6xl lg:text-7xl text-purple-300"
            text="Quizzy"
          />
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-1">
            Create Quizzes
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-1">
            Participate in Quizzes
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">
            AI Analysis & Results
          </h1>
          <p className="text-sm text-gray-500 max-w-xs mt-4 md:text-base lg:text-lg">
            Generate Questions with the help of AI. Multiple Choice as well as
            open ended questions. AI smart analysis and leaderboard.
          </p>
          <div className="flex items-center gap-4 md:gap-10 flex-row mt-6">
            <button className="px-4 md:px-6 dark:border-r-white dark:border-b-white dark:border-white border-r-8 dark:bg-purple-400 dark:hover:bg-purple-500 hover:bg-purple-400 border-b-8 py-1.5 rounded-xl border-2 font-bold border-black shadow-2xl">
              Try For Free
            </button>
            <p className="font-semibold hover:shadow-lg p-2 rounded-xl cursor-pointer">
              Pricing
            </p>
          </div>

          <div className="flex bg-[url('https://th.bing.com/th/id/OIP.0c2DbyeqngA-_f2pnt1uPwHaB-?rs=1&pid=ImgDetMain')] max-w-sm p-2 mt-6 rounded-3xl bg-cover bg-no-repeat flex-row items-center gap-8">
            <Image
              src={"/phone.png"}
              alt=""
              width={50}
              height={50}
              className=""
            />
            <h3 className="font-bold dark:text-black text-xl md:text-2xl ml-2">
              AI Generation
            </h3>
          </div>
          <div className="flex bg-[url('https://th.bing.com/th/id/OIP.0c2DbyeqngA-_f2pnt1uPwHaB-?rs=1&pid=ImgDetMain')] max-w-sm p-2 px-4 bg-cover rounded-3xl bg-no-repeat flex-row items-center gap-8">
            <Image
              src={"/rocket.png"}
              alt=""
              width={50}
              height={50}
              className=""
            />
            <h3 className="font-bold text-xl dark:text-black md:text-2xl ml-2">
              AI Analysis
            </h3>
          </div>
          <div className="flex bg-[url('https://th.bing.com/th/id/OIP.0c2DbyeqngA-_f2pnt1uPwHaB-?rs=1&pid=ImgDetMain')] max-w-sm p-2 px-4 bg-cover bg-no-repeat rounded-3xl flex-row items-center gap-8">
            <Image
              src={"/store.png"}
              alt=""
              width={50}
              height={50}
              className=""
            />
            <h3 className="font-bold text-xl dark:text-black md:text-2xl ml-2">
              Stats & Leaderboard
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 min-h-screen md:min-h-full bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 overflow-hidden">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="relative z-10 text-white text-center p-8">
            <Image
              src={"/hand.webp"}
              alt=""
              width={200}
              height={200}
              className="absolute bottom-0 left-0 top-1/2 transform translate-y-full animate-in transition-transform duration-300  -translate-x-8 -rotate-3 scale-x-[-1] rounded-lg"
            />
            <Image
              src={"/hand.webp"}
              alt=""
              width={200}
              height={200}
              className="absolute w-72 h-72 md:w-96 md:h-96 bottom-0 right-0 top-1/2  transform translate-y-full transition-transform duration-300 hover:scale-105 translate-x-8 -rotate-3 rounded-lg"
            />
            <div className="px-6 md:px-8 py-2 border-2 border-r-4 text-black bg-white border-b-8 border-pink-400 rounded-2xl font-bold text-sm md:text-lg lg:text-xl flex items-center gap-2 transition-transform fade-in-30 animate-in max-w-[18rem] md:max-w-[22rem] absolute right-4 md:right-8 duration-300 hover:scale-105">
              <BellIcon className="font-bold w-4 h-4 md:w-8 md:h-8" />
              Generate Quiz
            </div>
            <div className="px-6 md:px-8 py-2 border-2 border-r-4 text-black bg-white border-b-8 border-purple-400 rounded-2xl font-bold text-sm md:text-lg lg:text-xl flex items-center mt-8 transition-transform fade-in-30 max-w-[20rem] md:max-w-[28rem] animate-in duration-300 absolute left-4 md:left-8 top-20 hover:scale-105 gap-2">
              <BarChartIcon className="font-bold w-4 h-4 md:w-8 md:h-8" />
              Generate Quiz
            </div>
            <div className="px-6 md:px-8 py-2 border-2 border-r-4 text-black bg-white border-b-8 border-black transition-transform fade-in-30 animate-in duration-300 hover:scale-105 rounded-2xl mt-9 font-bold text-sm md:text-lg lg:text-xl flex items-center absolute right-6 md:right-14 top-44 gap-2">
              <PersonIcon className="font-bold w-4 h-4 md:w-8 md:h-8" />
              Generate Quiz
            </div>
            <div className="px-6 md:px-8 py-2 font-bold border-2 border-r-4 text-black bg-white border-b-8 border-yellow-500 transition-transform fade-in-30 animate-in duration-300 hover:scale-105 rounded-2xl mt-4 text-sm md:text-lg lg:text-xl flex items-center absolute left-4 md:left-10 top-72 gap-2">
              <BookCopy className="font-bold w-4 h-4 md:w-8 md:h-8" />
              Generate Quiz
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-24 px-8 lg:px-16">
        <div className="flex w-1/2 text-start mt-8 flex-col items-center">
          <h1 className="font-bold text-2xl md:text-4xl">
            Create Multiple Quizzes in Different Formats
          </h1>
          <p className="text-xs p-2 mt-2 md:text-sm text-gray-400 font-light">
            Quizzy creates quizzes in multiple formats like MCQs, open ended
            questions. Smart analysis by AI. Compete with your friends and see
            the leaderboard.
          </p>

          <div className="flex items-center mr-auto  flex-col gap-2 mt-2">
            <div className="flex-row text-xs md:text-sm font-normal text-gray-500 flex gap-2">
              <Check className="w-6 font-bold h-6 border dark:bg-white border-r-4 border-b-4 border-purple-400 rounded-md p-1 text-purple-800 " />
              Get detailed analysis of your quiz
            </div>
            <div className="flex-row text-xs md:text-sm font-normal text-gray-500 flex gap-2">
              <Check className="w-6 font-bold h-6 border border-r-4 dark:bg-white border-b-4 border-purple-400 rounded-md p-1 text-purple-800 " />
              Get detailed analysis of your quiz
            </div>
            <div className="flex-row text-xs md:text-sm font-normal text-gray-500 flex gap-2">
              <Check className="w-6 font-bold h-6 border border-r-4 border-b-4 dark:bg-white border-purple-400 rounded-md p-1 text-purple-800 " />
              Get detailed analysis of your quiz
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-2xl"
            src={"/monitor.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-24 px-8 lg:px-16">
        <div className="w-1/2">
          <Image
            className="rounded-2xl"
            src={"/message.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-4xl">
            Compete With Your Friends
          </h1>
          <p className="text-xs p-2 mt-2 md:text-sm text- text-gray-400 font-light">
            Get ahead of your friends by competing with them in quizzes. Get to
            know where you stand in the leaderboard.
          </p>
          <div className="flex flex-row items-center justify-center mt-4 gap-4">
            <SlackIcon className="w-10 h-10 rounded-xl p-2 border-2 border-yellow-200 shadow-md font-bold text-black border-r-4 border-b-4  transform transition-transform animate-in duration-300 hover:scale-105 dark:bg-white" />
            <MailIcon className=" w-10 h-10 rounded-xl border-2 border-yellow-200 font-bold text-black shadow-md border-r-4 border-b-4 p-2 transform transition-transform animate-in duration-300 hover:scale-105 dark:bg-white" />
            <RadioTower className=" w-10 h-10 rounded-xl border-2 border-yellow-200 font-bold text-black border-r-4 shadow-md border-b-4 p-2 transform transition-transform animate-in duration-300 hover:scale-105 dark:bg-white" />
            <PieChart className="w-10 h-10 rounded-xl border-2 border-yellow-200 font-bold text-black border-r-4 border-b-4 shadow-md p-2 transform transition-transform animate-in duration-300 hover:scale-105 dark:bg-white" />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-24 px-8 lg:px-16">
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-2xl md:text-4xl">
            Smart AI Analysis Score
          </h1>
          <p className="text-xs p-2 mt-2 md:text-sm text- text-gray-400 font-light">
            The score generated by AI is based on the answers given by the user.
            The analysis is done by the AI and the results are generated
          </p>
          <div className="flex flex-row  gap-4 flex-wrap mt-4">
            <p className="border-2 animate-in duration-300 transition-colors fade-in-30 hover:scale-105 max-w-[12rem] flex flex-row cursor-pointer hover:bg-pink-50 items-center font-semibold text-xs border-r-8 border-b-8 border-pink-300 p-2 rounded-2xl text-black bg-white dark:text-black">
              status.designmodo.com
              <ArrowUpRight className="min-h-2 min-w-2 ml-2 dark:text-black" />
            </p>
            <p className="border-2 animate-in duration-300 transition-colors fade-in-30 hover:scale-105 max-w-[12rem] flex flex-row cursor-pointer hover:bg-pink-50 items-center font-semibold text-xs border-r-8 border-b-8 border-pink-300 p-2 rounded-2xl text-black bg-white dark:text-black">
              status.designmodo.com
              <ArrowUpRight className="min-h-2 min-w-2 ml-2 dark:text-black" />
            </p>
            <p className="border-2 animate-in duration-300 transition-colors fade-in-30 hover:scale-105 max-w-[12rem] flex flex-row cursor-pointer hover:bg-pink-50 items-center font-semibold text-xs border-r-8 border-b-8 border-pink-300 p-2 rounded-2xl text-black bg-white dark:text-black">
              status.designmodo.com
              <ArrowUpRight className="min-h-2 min-w-2 ml-2 dark:text-black" />
            </p>
            <p className="border-2 animate-in duration-300 transition-colors fade-in-30 hover:scale-105 max-w-[12rem] flex flex-row cursor-pointer hover:bg-pink-50 items-center font-semibold text-xs border-r-8 border-b-8 border-pink-300 p-2 rounded-2xl text-black bg-white dark:text-black">
              status.designmodo.com
              <ArrowUpRight className="min-h-2 min-w-2 ml-2 dark:text-black" />
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-2xl"
            src={"/mac.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-24 px-8 lg:px-16">
        <div className="w-1/2 flex flex-col gap-4">
          <h4 className="md:text-sm text-xs font-bold text-purple-500">
            AVAILABLE NOW
          </h4>
          <h1 className="font-bold text-2xl md:text-4xl">Join The Community</h1>
          <p className="text-xs p-2 mt-2 md:text-sm text- text-gray-400 font-light">
            Join the community and get ahead of your friends by competing with
            them in quizzes. Get to know where you stand in the leaderboard.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-2xl"
            src={"/placeholder.png"}
            alt=""
            width={500}
            height={500}
          />
        </div>
      </section>
      <Testimonial />
      <section className="min-w-full">
        <div className="relative min-w-full min-h-screen md:min-h-full  bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 overflow-hidden">
          <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
          <div className="relative flex flex-col items-center z-10 text-black text-center p-8">
            <h1 className="font-4xl md:text-5xl lg:text-6xl font-bold">
              Get your
            </h1>
            <h1 className="font-4xl md:text-5xl lg:text-6xl font-bold">
              Free Account now
            </h1>
            <p className="text-xs mt-4 font-medium text-black max-w-xs text-center">
              Create quizzes that increase your knowledge. Share with your
              friends and grow as a community where you quiz each other. Learn
              from the best.
            </p>
            <button className="border-2 rounded-lg mt-8 bg-white font-bold hover:bg-gray-50 px-6 py-1 border-black">
              Try for Free
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Landing;
