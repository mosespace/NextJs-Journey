"use client";

import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Projects";

export default function Home(){
  return (
  <main>
    <NavBar/>
    <Hero/>
    <Projects/>
    <Contact/>
  </main>
  )
}
