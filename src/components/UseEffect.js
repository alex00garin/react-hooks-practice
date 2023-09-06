import React from 'react'
import Greeting from '../useeffect/Greeting'
import UserList from '../useeffect/UserList'
import ToggleButton from '../useeffect/ToggleButton'
import Timer from '../useeffect/Timer'

export default function UseEffect() {
  return (
    <>  
        <div className='flex flex-col gap-5 p-4 sm:ml-64'>
            <div class="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
              <Greeting />
            </div>
            <div class="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
              <UserList />
            </div>
            <div class="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
              <ToggleButton />
            </div>
            <div class="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
              <Timer />
            </div>

        </div>
      
    </>
  )
}
