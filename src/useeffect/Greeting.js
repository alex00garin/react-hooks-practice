import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'flowbite-react';

export default function Greeting() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
        setUserName('');
    }

    // Use useEffect to change the username after 3 seconds
    useEffect(() => {
        if (isLoggedIn) {
            const timeoutId = setTimeout(() => {
                setUserName("How are you?");
            }, 3000);

            // Cleanup: Clear the timeout if the component unmounts or isLoggedIn becomes false
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isLoggedIn]);

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
