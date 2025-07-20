import React from "react";
import Navbar from "../Components/Navbar"; // Adjust path as needed

export default function Project() {
  const projects = [
    {
      title: "Careerly",
      description: "AI Career Mentor with roadmap guidance & productivity features.",
      tech: ["React", "Node", "MongoDB", "Python AI"],
    },
    {
      title: "Translator Web",
      description: "Live text translation using Google Translate API via RapidAPI.",
      tech: ["React", "API", "Tailwind"],
    },
    {
      title: "Music App",
      description: "Mood & weather-based playlists with AI music suggestions.",
      tech: ["Kotlin", "Flutter", "API"],
    },
    {
      title: "Quiz Website",
      description: "Interactive quiz website with timer and scoring.",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Spotify Clone",
      description: "Front-end clone of Spotify with basic music playback.",
      tech: ["React", "CSS"],
    },
    {
      title: "Random Generator",
      description: "Generate random strings or data using custom logic.",
      tech: ["React", "Custom Hooks"],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white py-16 px-4 md:px-10 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-yellow-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
