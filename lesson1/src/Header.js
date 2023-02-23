const Header = ({ title }) => {
  const headerStyle = {
    backgroundColor: "#CC998F",
    color: "#3C3231",
  };
  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "Default title",
};

export default Header;
