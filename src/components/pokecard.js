import React from "react";
import typeColor from "../objects/typecolors";

export default function Pokecard(props) {
  const { pokemon, key, onSelect } = props;

  return (
    <>
      <div className="pokecard" key={key} onClick={() => onSelect(pokemon)}>
        <div
          style={{
            marginLeft: "5px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ maxHeight: "25vh", marginRight: "5px"}}>
            <div style={{ minHeight: "100%", maxHeight: "100%", width: "auto" }}>
              <img id="pokeimage" src={pokemon[0].sprites.front_default} alt={"pokemon"}/>
              <div style={{ textAlign: "center", marginTop: "0px" }}>{pokemon[0].name}</div>
              <div style={{ textAlign: "center"}}>
                {" "}
                id: {pokemon[0].id}
              </div>
              {pokemon[0].types.map((type) => {
                return (
                  <div
                    style={{
                      textAlign: "center",
                      backgroundColor: `${typeColor[type.type.name]}`,
                      margin: "0px",
                    }}
                  >
                    {type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pokestats">
            <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
              {pokemon[0].stats.map((sta, i) => {
                return (
                  <>
                    <li key={i + "pokestats"}>
                      {sta.stat.name}: <span>{sta.base_stat}</span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className="pokemoves">
            <ul style={{ listStyle: "none", padding: "0", marginRight: "5px" }}>
              {pokemon[0].moves.map((mov, i) => {
                return (
                  <>
                    <li key={i + "pokemoves"}>{mov.move.name}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
