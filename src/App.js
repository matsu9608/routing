import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/router";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Home1</Link>
        <br />
        <Link to="/Page2">Home2</Link>
        <br />
        <Link to="/Page1/DetailA">Hom2</Link>
        {/* <Link to="Page1DetailA">Page1DetailA</Link> */}
      </div>
      <Router />
    </BrowserRouter>
  );
}
