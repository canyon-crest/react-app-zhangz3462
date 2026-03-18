import { useState, useEffect } from "react";

function CatGenerator() {
  const [catUrl, setCatUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCat = async () => {
    setLoading(true);
    try {
      // The API returns an array of objects
      const response = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await response.json();
      
      // We grab the 'url' from the first item in the array
      setCatUrl(data[0].url);
    } catch (error) {
      console.error("Error fetching cat:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load a cat as soon as the page opens
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {loading ? (
        <p>Loading cute cat...</p>
      ) : (
        <img 
          src={catUrl} 
          alt="A cute cat" 
          style={{ width: "400px", borderRadius: "10px", display: "block", margin: "10px auto" }} 
        />
      )}
      <button onClick={fetchCat}>Get Another Cat!</button>
    </div>
  );
}

export default CatGenerator;