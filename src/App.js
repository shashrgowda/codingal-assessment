import { Route, Switch } from "react-router";
import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Students from "./pages/Students";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} toggle={toggle} />
      <Dropdown isMenuOpen={isMenuOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact />
        <Route path="/students" component={Students}>
          <Students />
        </Route>
      </Switch>
    </>
  );
}

export default App;
