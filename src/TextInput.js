import React, { useState } from 'react'

export default function TextInput() {

    const [textInput, setTextInput] = useState('')    
    const handleInputChange = (event) => {
        setTextInput(event.target.value)
    }

    return (
        <>
            <p>Hello: {textInput}</p>
            <input 
            value={textInput}
            onChange={handleInputChange}/>
        </>
    )
}
