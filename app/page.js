"use client";
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component
import Hello from "@/components/Hello";  // Import the Hello component

function Home(){
  const handler = () => {
    console.log("Your leaving the Home Page");
}
  return (
    <section>

      <Hello message= "It's a message on the home"/>

      <h1> Hi, Welcome; Hello World </h1>
      <p>This is the first page </p>
      <SubmitButton bg="bg" message=" 1" functionClick={handler}/>
      
    </section>
  )
}
export default Home;