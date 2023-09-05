import React from "react"
import Counter from "./Counter"
import ToggleMessage from "./ToggleMessage"
import TextInput from "./TextInput"
import ItemList from "./ItemList"
import AuthenticationForm from "./AuthenticationForm"

function App() {
  return (
    <>
     {/* useState */}
      <Counter />  
      <ToggleMessage />
      <TextInput />
      <ItemList />
      <AuthenticationForm />
      {/* useEffect */}
    </>
  );
}

export default App
