import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import pokeDatos from "./Components/Main/datos";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
     <div className="Header">
      <Header />
    </div>
    <div className="pokeCards">
        {pokeDatos.map((pokeDatos) => (
          <Main
            id={pokeDatos.id}
            nombre={pokeDatos.especialidad}
            imagen={pokeDatos.imagen}
          />
        ))}
    </div>
    </div>
)
}

export default App;
