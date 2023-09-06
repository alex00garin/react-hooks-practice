import React from 'react'
import Counter from "../usestate/Counter"
import ToggleMessage from "../usestate/ToggleMessage"
import TextInput from "../usestate/TextInputHook"
import ItemList from "../usestate/ItemList"
import AuthenticationForm from "../usestate/AuthenticationForm"


export default function UseState() {
  return (
    <>
        <div className='flex flex-col gap-5 p-4 sm:ml-64 items-center mt-5'>
            <div className="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
                <AuthenticationForm />
            </div>
            <div className="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
                <Counter /> 
            </div>
            <div className="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
                <ItemList />
            </div>
            <div className="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
                <TextInput />
            </div>
            <div className="w-96 justify-center  p-4 border border-neutral-400 rounded-lg dark:border-gray-700">
                <ToggleMessage />
            </div>
        </div>
    </>
  )
}
