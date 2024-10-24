import { useState, useEffect } from 'react' // hooki
import './App.css'

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const storageText = localStorage.getItem("text");
    if (storageText) {
      setText(storageText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("text", text); // zapisywanie do localStorage
  };

  return (
    <div>
      <h1>{text || "Sentencja"}</h1>
      <input
      type='text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder = 'Podaj tekst'
      />
      <button onClick={handleSave}>Zapisz</button>


    </div>
  )
}

export default App
