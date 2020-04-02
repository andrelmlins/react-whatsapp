import React from "react";
import ReactWhatsapp from "../lib";
import logo from "./logo.png";

const App = () => (
  <div className="content">
    <img src={logo} className="logo" alt="Logo Create React Dependency" />
    <h1 className="title">Create React Dependency</h1>
    <section className="library">
      <ReactWhatsapp
        number="+055 (81) 98852-7655"
        message="Meu envio"
        style={{
          border: "none",
          boxShadow: "none",
          backgroundColor: "#00838f",
          color: "#FFF",
          padding: "0px 20px",
          fontSize: 20,
          height: 40
        }}
      >
        Abrir Whatsapp
      </ReactWhatsapp>
    </section>
  </div>
);

export default App;
