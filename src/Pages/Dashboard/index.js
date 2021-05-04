import React from "react";

import { Navbar } from "./styles";

import api from "../../services/api";

export default function Dashboard() {
  function handleInfo() {
    api.get("/pontoturistico", function(req, res){
      console.log(res.data);
    });
  }

  return (
    <div>
      <Navbar>
        <a href="/">Home</a>
        <a href="/pontoturistico">Pontos Turisticos</a>
      </Navbar>

      <button onClick={handleInfo()}></button>
    </div>
  );
}
