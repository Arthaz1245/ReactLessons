import Header from "./Header";
//import Content from "./Content";
import Content2 from "./Content2";
import { useState } from "react";
import Footer from "./Footer";
function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Chicken with legs" },
    { id: 2, checked: false, item: "Potatoes with drugs" },
    { id: 3, checked: true, item: "Articles" },
    { id: 4, checked: false, item: "I dont Know" },
  ]);
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    //local storage to save information when its reload
    localStorage.setItem("shoppnglist", JSON.stringify, listItems);
  };
  const handleDelete = (id) => {
    const itemDeleted = items.filter((item) => item.id !== id);
    setItems(itemDeleted);
    localStorage.setItem("shoppnglist", JSON.stringify, itemDeleted);
  };
  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content2
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
