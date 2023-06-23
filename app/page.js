"use client";

import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import AllProjects from "@/Components/AllProjects";
export default function Home(){
  return (
  <main>
    <NavBar/>
    <Hero/>
    <AllProjects/>
    <Contact/>
  </main>
  )
}
