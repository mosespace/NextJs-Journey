"use client";
import Hello from "@/components/Hello";  // Import the Hello component
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component


function About() {
  const handler = () => {
    console.log("Your leaving the About Page");
}
    return (
        
    <section>
      <Hello message= "It's a message on the about-us"/>
        <h1>About Us?</h1>
        <p>
        Hello, this is the hello world section.
        </p>
        <SubmitButton bg="bg3" message=" 3" functionClick={handler}/>
    </section>
    )
}
export default About;