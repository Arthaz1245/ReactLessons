import Square from "./square/square";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("");
  return (
    <div className="App">
      <Square color={color} />
      <SearchBar color={color} setColor={setColor} />
    </div>
  );
}

export default App;
