import Row from "../Row/Row";
export const Table = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item />
          ))}
        </tbody>
      </table>
    </div>
  );
};
