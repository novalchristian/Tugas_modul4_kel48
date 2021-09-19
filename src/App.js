import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import input1 from "./input/input1";
import Profile from "./useContext/context";
import Index from "./product/index";
import Anggota from "./home/Anggota";
import Click from './useEffect/UseEffect';
import home from "./home/home";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="navv">
          <div className="title" style={{ marginLeft: "5em" }}>
            <p>Tugas Modul 4</p>
          </div>
          <nav style={{ float: "right", position: "relative", bottom: "2.5em", marginRight: "5em", }} className="right">
            <Link className="text" to="/home">Home</Link>
            <Link className="text" to="/anggota">Anggota</Link>
            <Link className="text" to="/input">Input</Link>
            <Link className="text navtext2" to="/profile">Profile Noval</Link>
            <Link className="text" to="/Effect">Effect</Link>
            <Link className="text" to="/Click">Click</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/input" exact component={input1} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/Effect" exact component={Index} />
          <Route path="/anggota" exact component={Anggota} />
          <Route path="/CLick" exact component={Click} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
