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
  };
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            {item.item}
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content2;
