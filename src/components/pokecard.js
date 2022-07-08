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
          <div>
            <div style={{textAlign: "center"}}>{pokemon[0].name}</div>
            <img src={pokemon[0].sprites.front_default} alt={"pokemon image"} />
          </div>
        </div>
      </div>
    </>
  );
}
