import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";

const Header = React.lazy(() => import("./components/Main/MainHeader/Header.jsx"));

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
