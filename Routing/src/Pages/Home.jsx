import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-white bg-gray-900 w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl">
            I build modern full-stack applications with React, Express & AI integrations.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link to="/project">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors duration-300">
                Explore Projects
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-400 px-6 py-2 rounded text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </section>

        {/* About Preview */}
        <section className="bg-gray-800 py-12 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
            I'm Kartik Varma, a passionate developer pursuing B.Sc. CS. I love building interactive apps and learning new tech.
          </p>
          <Link to="/about">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors duration-300">
              Read More
            </button>
          </Link>
        </section>

        {/* What I Do Section */}
        <section className="bg-gray-900 py-16 px-4 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400">Responsive, scalable web apps with modern tech.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">App Development</h3>
              <p className="text-gray-400">Kotlin & Flutter for native & cross-platform apps.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
              <p className="text-gray-400">Gemini, GPT, Translator APIs, AI chatbots & tools.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Backend APIs</h3>
              <p className="text-gray-400">Node, Flask, Express & MongoDB based REST APIs.</p>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="bg-gray-800 py-12 px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Careerly</h4>
              <p className="text-gray-300">AI Career Mentor for roadmap guidance & productivity.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Translator Web</h4>
              <p className="text-gray-300">Live translator using Google Translate API via RapidAPI.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">Music App</h4>
              <p className="text-gray-300">Weather + mood-based playlists, AI music suggestions.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
