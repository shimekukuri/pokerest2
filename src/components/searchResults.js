import React from "react";
import Pokecard from "./pokecard";

export default function SearchResults(props) {
  const { searchState, searchResults } = props;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "15px",
          maxHeight: "65vh",
          overflow: "overlay",
        }}
      >
        <div
          style={{
            backgroundColor: "hsla(359, 50%, 50%, 0.79)",
            width: "80vw",
            borderRadius: "5px",
            height: "100%"
          }}
        >
          <div style={{ margin: "10px" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignContent: "center",
                  width: "100%",
                }}
              >
                {searchResults.map((pokemon, i) => (
                  <Pokecard key={i} pokemon={[pokemon]} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
