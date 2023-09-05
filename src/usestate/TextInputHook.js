import React, { useState } from 'react'
import { TextInput } from 'flowbite-react'

export default function TextInputHook() {

    const [text, setTextInput] = useState('')    
    const handleInputChange = (event) => {
        setTextInput(event.target.value)
    }

    return (
        <>
            <h4 className='mb-2 text-md font-semibold'>Your text here: {text}</h4>
            <TextInput
            className='font-light'
            value={text}
            onChange={handleInputChange}/>
        </>
    )
}
