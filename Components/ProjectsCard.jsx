import Image from "next/image";
export default function ProjectCard({ link, imgurl }) {
  return (
    <a href={link} className="project-card">
      <Image src={imgurl} fill alt="" />
    </a>
  );
}
