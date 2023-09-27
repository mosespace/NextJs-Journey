"use client";
import Hello from "@/Components/Shapes";
import SubmitButton from "@/Components/Submit-button";
import React, {useRef, useState} from "react";

export default function Home(){
  const[shapeWidth, setShapeWidth] = useState('square');

  const handleClick=()=>{
    setShapeWidth('rectangle');
  }
  return(
    <section>
      <Hello shapes={shapeWidth}/>
      <SubmitButton bg="bg" message=" To Rectangle" functionClick={handleClick}/>
    </section>
  );
}