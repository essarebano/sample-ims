import React from "react";
import Button from "react-bootstrap/Button";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Button variant="primary" onClick={() => alert("do something")}>
        Primary
      </Button>
    </div>
  );
}
