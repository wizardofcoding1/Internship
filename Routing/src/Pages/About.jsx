import React from "react";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0f172a] text-white px-4 py-16 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={logo}
              alt="About Us"
              className="rounded-2xl w-full max-w-md shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              About Us
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Welcome to{" "}
              <span className="text-yellow-500 font-semibold">
                My Portfolio
              </span>
              ! I'm a passionate full-stack web developer focused on building
              responsive and intelligent web applications using technologies
              like React, Express, and AI integrations.
            </p>

            <p className="text-gray-400 text-md leading-relaxed">
              With a strong background in JavaScript, Python, MongoDB, and cloud
              deployment, I enjoy crafting intuitive user experiences and
              solving real-world problems with code. This portfolio showcases my
              latest projects, skills, and aspirations as I grow in the field of
              software development.
            </p>

            <div className="mt-8">
              <Link to="/project">
                <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition">
                  Explore Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
