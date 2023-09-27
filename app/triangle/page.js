"use client";
import Shapes from "@/Components/Shapes";  // Import the Hello component
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component


function About() {
  const handler = () => {
    console.log("This is a Triangle");
}
    return (
        
    <section>
      <Shapes shapes="triangle" />
        <SubmitButton bg="bg3" message=" Circle" functionClick={handler}/>
    </section>
    )
}
export default About;