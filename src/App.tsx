import { useState } from "react";

function App() {
  const [list, setList] = useState(["Isaias", "Antonio"]);
  const [newItem, setNewItem] = useState("");
  function addToList() {
    setList((state) => [...state, newItem]);
  }
  return (
    <main>
      <input
        placeholder="new-item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
