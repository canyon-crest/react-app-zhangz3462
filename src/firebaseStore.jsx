import { useState } from "react";
import { db } from "./firebase"; // Path to your firebase config file
import { collection, addDoc } from "firebase/firestore"; 
import { doc, setDoc } from "firebase/firestore"; // Add doc and setDoc to your imports

function AddItemForm() {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = async (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") return;
  
    try {
      // doc(db, collection, documentID) points to the specific spot
      // setDoc saves the data there (overwriting if it already exists)
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
      <button onClick={handleAddItem}>Add to Firestore</button>
    </div>
  );
}

export default AddItemForm;