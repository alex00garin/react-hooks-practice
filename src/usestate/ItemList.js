import React, { useState } from 'react'
import { Button, TextInput } from 'flowbite-react'

export default function ItemList() {

    // Define initial states
    // Initialize the state from local storage or as an empty array
    const [item, setItem] = useState(() => {
        const storedItemList = localStorage.getItem('itemList');
        return storedItemList ? JSON.parse(storedItemList) : [];
    });

    // A string to store the current item being typed
    const [currentItem, setCurrentItem] = useState('');

    // Function to handle input field changes
    const handleOnChange = (event) => {
        // Update the currentItem with the value from the input field
        setCurrentItem(event.target.value);
    }

    // Function to add an item to the list
    function addItem() {
        if (currentItem.trim() !== '') {
            // Create a new array by spreading the existing 'item' array and adding 'currentItem'
            const updatedItemList = [...item, currentItem];
            setItem(updatedItemList); // Update the state
            setCurrentItem(''); // Clear the input field
      
            // Update local storage with the modified item list
            localStorage.setItem('itemList', JSON.stringify(updatedItemList));
        }
    }
    
    // Function to remove an item from the list
    function removeItem(index) {
        // Create a new array by filtering out the item at the specified index
        const updatedItemList = item.filter((_, i) => i !== index);
        setItem(updatedItemList); // Update the state
      
        // Update local storage with the modified item list
        localStorage.setItem('itemList', JSON.stringify(updatedItemList));
    }

    return (
        <>
            
            <TextInput className='mb-2' type='text' placeholder='Add items' value={currentItem} onChange={handleOnChange}/>
            <Button className='mb-2' onClick={addItem}>Add Item</Button>
            <h4 className='mb-2 text-xl font-semibold'>Items:</h4>
            <ul>
                {item.map((item, index) => (
                   <li className='grid grid-cols-2 mb-2 justify-between' key={index}>{item}
                   <Button className='w-20' onClick={() => removeItem(index)}>Delete</Button></li>
                ))}
            </ul>
        </>
    )
}
