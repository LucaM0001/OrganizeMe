import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Tasks from "./components/Tasks/Tasks";

const App = () => {
  return (
    <div className="container" id="app">
      <Tasks />
    </div>
  );
};

export default App;
