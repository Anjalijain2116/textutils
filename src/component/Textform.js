// import React from "react";
import React, { useState } from 'react';

// const [text, setText] = useState('Enter Text here2');

export default function Textform(props) {
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handlelowclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    // const handleCopy = () => {
    //     var text = document.getElementById("myBox");

    //     if (text && text.value != null) {
    //         text.select();
    //         navigator.clipboard.writeText(text.value);
    //     }
    //     else {
    //         console.log("value of text is null");
    //     }
    // }

    //using this we can change text via change in text in text box 
    const handleonchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here2');
    return (
        <>
            <div className='container'  style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} id="my-box" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupclick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowclick}>Convert to Lowercase</button>
                {/* <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button> */}
            </div>
            <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>your text summary</h1>
                <p>
                    {/* {text.split(" ").length} words and {text.length} characters */}
                    {/* {text.split(" ").filter((element)=>{return element.length!==0}).length} */}
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                    
                </p>
                {/* <p>{0.008 * text.split(" ").length} minutes to read</p> */}
                {/* <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p> */}
                <p>{0.008 *  text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            </div>
        </>
    )
}