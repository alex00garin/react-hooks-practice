import React, { useState } from 'react'

export default function ToggleMessage() {
    
    const [messageVisible, setMessageVisible] = useState(false)

    const hide = () => {
        setMessageVisible(false)
    }
    const show = () => {
        setMessageVisible(true)
    }
    
    return (
        <>
            <p>ToggleMessage: {messageVisible ? 'Message is visible' : 'Message is hidden'}</p>
            <button onClick={show}>Show</button>
            <button onClick={hide}>Hide</button>
        </>
    )
}
