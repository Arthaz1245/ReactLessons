import { useState } from "react";
const Content = () => {
  const [product, setProduct] = useState("Apple");
  const [count, setCount] = useState(0);
  const handleGroceryProducts = () => {
    const products = ["Apple", "Watermelon", "Orange", "Potatoes"];
    const int = Math.floor(Math.random() * 4);
    setProduct(products[int]);
  };
  const handleClick = () => {
    console.log("You clicked it");
  };
  const handleCountinc = () => {
    setCount(count + 1);
  };
  const handleCountdec = () => {
    setCount(count - 1);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>You want {product}</p>
      <button onClick={handleGroceryProducts}>Click it</button>
      <button onClick={handleCountdec}>-</button>
      {count}
      <button onClick={handleCountinc}>+</button>
    </main>
  );
};

export default Content;
