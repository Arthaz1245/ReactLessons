import Row from "../Row/Row";
const TableFile = ({ items }) => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableFile;
