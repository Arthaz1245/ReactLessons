import "./square.css";
const square = ({ color }) => {
  return (
    <main>
      <div className="square" style={{ backgroundColor: `${color}` }}>
        <p>{color ? color : "Empty Value"}</p>
      </div>
    </main>
  );
};
square.defaultProps = {
  color: "Empty Value",
};

export default square;
