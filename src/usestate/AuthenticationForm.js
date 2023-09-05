import React, { useState } from 'react'
import { Button, TextInput } from 'flowbite-react'

export default function AuthenticationForm() {

    // Initialize a state variable isLoggedIn with an initial value of false
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Initialize a state variable userName with an initial value of an empty string
    const [userName, setUserName] = useState('');

    // Define a function handleLogin that sets isLoggedIn to true when called
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    // Define a function handleLogOut
    const handleLogOut = () => {
        // Set isLoggedIn to false when the user logs out
        setIsLoggedIn(false);
        // Set userName to an empty string when the user logs out
        setUserName('');
    }
    
    return (
        <>
            {isLoggedIn ? (
                <div className='h-[100px]'>
                    <h3 className='mb-2 text-xl mt-2 pb-2'>Hello {userName}</h3>
                    <Button onClick={handleLogOut}>Logout</Button>
                </div>
            ) : ( 
                <div className='h-[100px]'>
                    <TextInput 
                        type='text'
                        value={userName}
                        placeholder={'Your name here'}
                        onChange={(event) => setUserName(event.target.value)}
                        className='mb-3'
                    />
                    <Button onClick={handleLogin}>Log In</Button>
                </div>
            )}
        </>
    )
}
