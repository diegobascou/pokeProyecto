import React from "react";
import "./Main.css"

function pokeCard(props) {
  return (
    <div className="listaPokemones">
    <div key={props.data} className="pokeCard">
      
      <div className="pokeIds">
        <h2 className="pokeId">#{props.id}</h2>
      </div>
        <div className="pokeImages">
        <img className="pokeImage" src={props.imagen}></img> 
        </div>
      <div className="pokeName">  
      <h2 className="pokeName1">{props.nombre}</h2>
      </div>
      
    </div>
    </div>
  );
}



export default pokeCard;