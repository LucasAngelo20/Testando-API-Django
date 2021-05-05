import React, { useState, useEffect } from "react";

import api from "../../services/api.js";

export default function Pontosturisticos() {
  const [pontosTuristicos, setPontosTuristicos] = useState([]);

  const handleInfoLoad = () => {
    api.get("/pontoturistico/").then((response, require) => {
      setPontosTuristicos(response.data.results);
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 30,
        }}
      >
        <button
          onClick={() => handleInfoLoad()}
          style={{
            border: "none",
            backgroundColor: "#000",
            color: "#fff",
            padding: 10,
            fontSize: 15,
            textTransform: "uppercase",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Listar
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {pontosTuristicos.map((item) => {
          return (
            <div
              style={{
                width: 300,
                height: 400,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.10)",
                borderRadius: 25,
                marginBottom: 30,
                marginLeft: 100,
                padding: 20,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <h1>{item.nome}</h1>
              <img src={item.foto} style={{ width: 100, height: 100 }} />
              <h2>{item.descricao}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
