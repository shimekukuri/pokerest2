import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

import Search from "./components/search";

export const SEARCH_ACTIONS = {
  SET_SEARCH_STRING: `setSearchString`,
};

export const TEAM_ACTIONS = {};

const searchDispacherFunc = (searchState, action) => {
  let searchString = ``;

  // eslint-disable-next-line default-case
  switch (action.type) {
    case SEARCH_ACTIONS.SET_SEARCH_STRING:
      searchString = action.payload.searchString;
  }
  console.log(searchString);
  return searchString;
};

function App() {
  const [searchState, searchDispacher] = useReducer(searchDispacherFunc, null);

  useEffect(() => {
    if (searchState === null) {
      //change later to handle when search is empty with an object {isActive : false}
      console.log(searchState);
      return;
    } else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchState}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Trouble fetching data`);
        }
        return response.json();
      })
      .then((data) => console.log(data));
    }
  }, [searchState]);

  return (
    <>
      <Search searchDispacher={searchDispacher} />
    </>
  );
}

export default App;
