"use client";
import Shapes from "@/Components/Shapes";  // Import the Hello component
import React, {useRef, useState} from "react";
import SubmitButton from "@/Components/Submit-button";  // Import the Submit Button component

export default function Services (){
    const [shapeWidth, setShapeWidth] = useState('circle');

    const handler =() =>{
        setShapeWidth('square');
        alert('It has Worked 🥳🥳🥳🥳')
    }
    return(
        <section>
            <Shapes shapes={shapeWidth} />
            <SubmitButton bg="bg4" message=" To Square" functionClick={handler}/>
        </section>
    )
}