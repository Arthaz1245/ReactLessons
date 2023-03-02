import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
const Layout = ({ search, setSearch }) => {
  const { width } = useWindowSize();
  return (
    <div className="App">
      <Header title="React JS Blog" width={width} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
