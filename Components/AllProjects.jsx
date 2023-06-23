import React from "react";
import ProjectsCard from "./ProjectsCard";
export default function Projects() {
  const projects = [
    {
      id: 1,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/a89fe8a4ad332d942da74da90f09fb8f/180f3/Flop.webp",
    },
    {
      id: 2,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/51307f12012e74fb2b28b5c4456f6569/180f3/Lendscape.webp",
    },
    {
      id: 3,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/3455079efad05303051f83892d0c2fe3/180f3/Tribe.webp",
    },
    {
      id: 4,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/98c1b0b7e40d8f8807d62d9269b26f1c/180f3/Promot3.webp",
    },
    {
      id: 5,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/f0f2dd77c93adb2468a85b43b49007a5/180f3/Baffy.webp",
    },
    {
      id: 6,
      link: "#",
      image:
        "https://www.aboghanbari.com/static/7882771b4b67e01db2255e01b71d6a5b/180f3/Crypto.webp",
    },
  ];

  return (
    <div className="all-projects">
      {projects.map((projects, i) => {
        return <ProjectsCard id={i} link={projects.link} imgurl={projects.image} />;
      })}
    </div>
  );
}
