const Content = () => {
  const handleGroceryProducts = () => {
    const products = ["Apple", "Watermelon", "Orange", "Potatoes"];
    const int = Math.floor(Math.random() * 4);
    return products[int];
  };
  return (
    <main>
      <p>You want {handleGroceryProducts()}</p>
    </main>
  );
};

export default Content;
