import React from "react";

export default function Pokecard(props) {
  const { pokemon } = props;

  console.log(pokemon[0].sprites.front_default);
  return (
    <>
      <div className="pokecard">
        <div
          style={{
            margin: "5px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ maxHeight: "25vh", overflow: "overlay" }}>
            <img src={pokemon[0].sprites.front_default} alt={"pokemon image"} />
            <div style={{ textAlign: "center" }}>{pokemon[0].name}</div>
            <div style={{ textAlign: "center" }}> id: {pokemon[0].id}</div>
          </div>
          <div className="pokestats">
            {pokemon[0].stats.map((sta) => {
              return (
                <>
                  <div>
                    {sta.stat.name}: <span>{sta.base_stat}</span>
                  </div>
                </>
              );
            })}
          </div>
          <div className="pokemoves">
            {pokemon[0].moves.map((mov) => {
              return (
                <>
                  <div>{mov.move.name}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
