import "./square.css";
const square = ({ color }) => {
  return (
    <main>
      <div className="square" style={{ backgroundColor: `${color}` }}></div>
    </main>
  );
};

export default square;
