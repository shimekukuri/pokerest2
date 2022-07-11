import React from "react";

export default function PokeDetails(props) {
  const { pokemonFocus, onSelect } = props;
  console.log(pokemonFocus);

  return (
    <>
      <div className="focusContainer">
        <div className="focus-box">
          <span className="focus-exit-container">
            <button className="focus-exit" onClick={onSelect}> X </button>
          </span>
          <div>
            {
              <img
                id="pokeimage"
                src={pokemonFocus[0].sprites.front_default}
                alt={"pokemon"}
              />
            }
          </div>
          <button>add to party</button>
        </div>
      </div>
    </>
  );
}
