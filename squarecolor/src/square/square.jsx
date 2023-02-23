import "./square.css";
const square = ({ color, hexValue, isDarkText }) => {
  return (
    <main>
      <div
        className="square"
        style={{
          backgroundColor: `${color}`,
          color: isDarkText ? "#000" : "#fff",
        }}
      >
        <p>{color ? color : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </main>
  );
};
square.defaultProps = {
  color: "Empty Value",
};

export default square;
