import React, { useState } from 'react'
import { Button } from 'flowbite-react'

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
            <p className='mb-2 text-md font-semibold'>ToggleMessage: {messageVisible ? 'Message is visible' : 'Message is hidden'}</p>
            <div className='flex flex-row gap-2'>
            <Button onClick={show}>Show</Button>
            <Button onClick={hide}>Hide</Button>
            </div>
        </>
    )
}
