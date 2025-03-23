import React from "react";

const Projects = () => {
  const projects = [
    { title: "Project One", description: "A cool project", link: "#" },
    { title: "Project Two", description: "Another awesome project", link: "#" },
  ];

  return (
    <section id="projects" className="py-16 text-white">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="w-80 bg-gray-800 p-6 rounded-md">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-400 mt-2 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
