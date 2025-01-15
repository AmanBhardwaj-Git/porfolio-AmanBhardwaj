"use client"; // Mark as a client component since we're using hooks

import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const MyWorkings = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/AmanBhardwaj-Git/repos?sort=created&per_page=4");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }; // Correctly typed options
    return date.toLocaleDateString(undefined, options); // Returns formatted date
  };
  return (
    <div className="flex flex-col items-center justify-center pb-10 h-full">
      <h2 className="text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">Current Workings</h2>
      <div className=" flex flex-wrap justify-center gap-10 px-10" id="workings">
        {projects.map((project) => (
          <div key={project.id} className="my-workings-section hover:border p-5 rounded shadow-md  transition duration-200">
            <h3 className="text-2xl font-bold text-yellow-600">{project.name}</h3>
            <p className="text-gray-500">Updated on: {formatDate(project.updated_at)}</p> {/* Display formatted date */}
             <p className="flex gap-3 mt-2 text-zinc-400 hover:text-blue-500 hover:underline ">
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" >
              Visit on GitHub
            </a>
                <BsArrowUpRight />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorkings;