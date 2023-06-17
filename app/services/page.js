"use client";
import Hello from "@/components/Hello";  // Import the Hello component
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component


function Services (){
    const handler = () => {
        console.log("Your leaving the Services Page");
    }
    return(
        <section>
            <Hello message= "It's a message on the services"/>
            <h1>Why use Next.js 13.4?</h1>
            <p>Next.js 13.4 brings several new features and improvements to the framework</p>
            <SubmitButton bg="bg2" message=" 2" functionClick={handler}/>
        </section>
    )
}
export default Services;