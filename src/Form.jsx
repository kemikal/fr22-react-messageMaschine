/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Form(props) {
    
    const [inputHeading, setInputHeading] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputMessage, setInputMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Spara formulär");
        props.updateForm(inputHeading, inputName, inputMessage);
    }

    return (
        <div>
            <h2>Vad vill du skriva?</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputHeading} onChange={(e) => setInputHeading(e.target.value)}/> <br />
                <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)}/><br />
                <textarea value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}>

                </textarea><br/>
                <button>Skicka</button>
            </form>
        </div>
    );
}

export default Form;