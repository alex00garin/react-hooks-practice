import React, { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'

export default function ToggleButton() {
    
    const [messageVisible, setMessageVisible] = useState(false)

    const hide = () => {
        setMessageVisible(false)
    }
    const show = () => {
        setMessageVisible(true)
    }

    useEffect(() => {
        // Log a message when messageVisible changes
        if (messageVisible) {
            console.log('Message visibility changed to `Show`');
        } else {
            console.log('Message visibility changed to `Hide`');
        }
    }, [messageVisible]); // Include messageVisible in the dependency array

    
    return (
        <>  
            <p className='mb-2 text-md font-semibold'>ToggleMessage: {messageVisible ? 'Message is visible' : 'Message is hidden'}</p>
            <div className='flex flex-row gap-2'>
            <Button onClick={show}>Show</Button>
            <Button onClick={hide}>Hide</Button>
            </div>
            <p className='text-xs'>PS. check console.log()</p>
        </>
    )
}
