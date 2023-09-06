import React, { useState, useEffect } from 'react'
import { Button } from 'flowbite-react'

export default function Timer() {

    const [count, setCount] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isPlaying])

    const toggleTimer = () => {
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }

  return (
    <>
      <h1 className='mb-2'>Count: {count}</h1>
      <Button onClick={toggleTimer}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
    </>
  );
}