import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

export const Useref1 = () => {
    const [text,setText]=useState()
    const in1=useRef()

    const  handleChange=()=>{
       in1.current.value="PDAC"
    }

    
            
    
    const handleColor=()=>{
        in1.current.style.color="red"
    }
    // useEffect(()=>{

    // })


    return (
       <React.Fragment>
        <h1>Useref1</h1>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <br/>
        <button onClick={handleChange}>Change</button>
        <button onClick={handleColor}>Change</button>
       </React.Fragment>
    );
};

