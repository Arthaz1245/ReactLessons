import Square from "./square/square";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <SearchBar
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
