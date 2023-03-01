import { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
// import List from "./Components/List/List";
import TableFile from "./Components/TableFile/TableFile";
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`);
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json();
        setItems(listItems);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, [reqType]);
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <TableFile items={items} />
    </div>
  );
}

export default App;
