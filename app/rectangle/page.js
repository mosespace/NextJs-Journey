"use client";
import Shapes from "@/Components/Shapes";  // Import the Hello component
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component


function Services (){
    const handler = () => {
        console.log("This is a Rectangle");
    }
    return(
        <section>
            <Shapes shapes="rectangle" />
            <SubmitButton bg="bg2" message=" Triangle" functionClick={handler}/>
        </section>
    )
}
export default Services;