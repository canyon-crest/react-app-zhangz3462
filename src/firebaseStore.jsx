import { useState } from "react";
import { db } from "./firebase"; // Path to your firebase config file
import { collection, addDoc } from "firebase/firestore"; 

function AddItemForm() {
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = async (e) => {
    e.preventDefault(); // Prevent page reload if using a form
    
    if (inputValue.trim() === "") return;

    try {
      // Add a new document with a generated ID to the "items" collection
      await addDoc(collection(db, "items"), {
        text: inputValue,
        createdAt: new Date()
      });
      
      setInputValue(""); // Clear input after successful add
      alert("Item added!");
    } catch (error) {
      console.error("Error adding document: ", error);
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