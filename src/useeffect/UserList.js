import React, { useState, useEffect } from 'react';

export default function UserList() {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching user data after component mounts with a 2-second delay
        const fetchData = async () => {
            setTimeout(() => {
                // Simulate receiving user data
                const userData = [
                    { id: 1, name: 'Alice' },
                    { id: 2, name: 'Bob' },
                    { id: 3, name: 'Charlie' },
                ];

                setUsers(userData);
                setLoading(false);
            }, 2000); // Delay of 2 seconds
        };

        fetchData(); // Call the function to fetch data
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
