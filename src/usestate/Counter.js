import React, { useState } from 'react'
import { Button } from 'flowbite-react'

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
            <p className='mb-2'>Count: {count}</p>
            <div className='flex flex-row gap-2'>
            <Button className='w-16' onClick={increasment}>+</Button>
            <Button className='w-16' onClick={decreasment}>-</Button>
            </div>
        </>
    )
}
