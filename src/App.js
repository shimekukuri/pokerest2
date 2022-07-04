import React, { useState, useEffect, useReducer } from "react";
import "./App.css";

//componants imports

import Search from "./components/search";
import SearchResults from "./components/searchResults";

//ACTIONS exports

export const SEARCH_ACTIONS = {
  SET_SEARCH_STRING: `setSearchString`,
  SET_SEARCH_GROUP: `setSearchGroup`,
};

export const TEAM_ACTIONS = {};

//dispatcher functions
//global dispatcher vars

let searchString = ``;
let searchGroup = ``;

const searchDispacherFunc = (searchState, action) => {
  switch (action.type) {
    case SEARCH_ACTIONS.SET_SEARCH_STRING:
      searchString = action.payload.searchString;
      break;
    case SEARCH_ACTIONS.SET_SEARCH_GROUP:
      searchGroup = action.payload.searchGroup;
      break;
    default:
      return;
  }
  console.log(searchString);
  return `https://pokeapi.co/api/v2/${
    searchGroup === `` ? `pokemon/` : searchGroup
  }${searchString}/`;
};

function App() {
  const [searchState, searchDispacher] = useReducer(searchDispacherFunc, null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (searchState === null) {
      //change later to handle when search is empty with an object {isActive : false}
      console.log(searchState);
      return;
    } else {
      fetch(`${searchState}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Trouble fetching data`);
          }
          return response.json();
        })
        .then((data) => console.log(data));
    }
  }, [submitted]);

  return (
    <>
      <Search searchDispacher={searchDispacher} setSubmitted={setSubmitted} />
      {searchState !== null && <SearchResults />}
    </>
  );
}

export default App;
