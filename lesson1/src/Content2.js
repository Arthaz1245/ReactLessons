import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content2 = () => {
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
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />

              <label
                style={item.checked ? { color: "#A3E419" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content2;
