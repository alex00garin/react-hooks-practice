import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const increasment = () => {
        setCount(count + 1)
    }
    const decreasment = () => {
        setCount(count - 1)
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increasment}>+</button>
            <button onClick={decreasment}>-</button>
        </>
    )
}
