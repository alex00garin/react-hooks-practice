import React, { useState } from 'react'

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
                <div>
                    <h4>Hello {userName}</h4>
                    <button onClick={handleLogOut}>Logout</button>
                </div>
            ) : ( 
                <div>
                    <input 
                        type='text'
                        value={userName}
                        placeholder={'Your name here'}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <button onClick={handleLogin}>Log In</button>
                </div>
            )}
        </>
    )
}
