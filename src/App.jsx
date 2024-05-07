import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Tasks from "./components/Tasks/Tasks";
import Notification from "./components/Notification/Notification";
import ParticlesComponent from "./components/Particles/Particles";

const App = () => {
  return (
    <>
      <ParticlesComponent id="particles" />
      <div className="container" id="app">
        <Tasks />
      </div>
      <Notification />
    </>
  );
};

export default App;
