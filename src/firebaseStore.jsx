import { useState } from "react";
import { db } from "./firebase"; 
import { doc, setDoc } from "firebase/firestore"; 

function AddItemForm() {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = async (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") return;
  
    try {
      await setDoc(doc(db, "items", "SG20vIrbx1NTneLFGFhm"), {
        text: inputValue,
        createdAt: new Date()
      });
      
      setInputValue("");
      alert("Document updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter text..." 
      />
      <button onClick={handleAddItem}>Add to Database!</button>
    </div>
  );
}

export default AddItemForm;