import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import PokeDetails from "./components/pokedetails";

//components imports

import Search from "./components/search";
import SearchResults from "./components/searchResults";

//ACTIONS exports

export const SEARCH_ACTIONS = {
  SET_SEARCH_STRING: `setSearchString`,
  SET_SEARCH_GROUP: `setSearchGroup`,
};

export const RESULTS_ACTIONS = {
  SET: `setSearchResults`,
  CLEAR: `clearSearchResults`,
  ADD: `addSearchResults`,
  SELECT: `pokemonSelected`,
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
  return `https://pokeapi.co/api/v2/${
    searchGroup === `` ? `pokemon/` : searchGroup
  }${searchString}/`;
};

const searchResultsDispacherFunc = (searchResults, action) => {
  switch (action.type) {
    case RESULTS_ACTIONS.ADD:
      searchResults = [...searchResults, action.payload];
      break;
    case RESULTS_ACTIONS.CLEAR:
      searchResults = action.payload;
      break;
    case RESULTS_ACTIONS.SET:
      break;
    case RESULTS_ACTIONS.SELECT:
      break;
    default:
      return;
  }
  console.log(searchResults);
  return searchResults;
};

function App() {
  const [searchState, searchDispacher] = useReducer(searchDispacherFunc, null);
  const [submitted, setSubmitted] = useState(0);
  const [switcher, setSwitcher] = useState(false);
  const [pokemonFocus, setPokemonFocus] = useState({});
  const [searchResults, resultsDispatcher] = useReducer(
    searchResultsDispacherFunc,
    []
  );

  //useEffect

  useEffect(() => {
    if (searchState === null) {
      //change later to handle when search is empty with an object {isActive : false}
      return;
    } else {
      fetch(`${searchState}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Trouble fetching data`);
          }
          return response.json();
        })
        .then((data) => {
          resultsDispatcher({ type: RESULTS_ACTIONS.ADD, payload: data });
        });
    }
  }, [submitted]);

  //handler functions

  const handlePokemonFocus = (e) => {
    setSwitcher((prev) => !prev);
    setPokemonFocus(e);
  };

  //returned jsx

  return (
    <>
      <Search
        searchDispacher={searchDispacher}
        setSubmitted={setSubmitted}
        resultsDispatcher={resultsDispatcher}
      />
      {switcher === false && (
        <SearchResults
          searchState={searchState}
          searchResults={searchResults}
          onSelect={handlePokemonFocus}
        />
      )}
      {switcher === true && <PokeDetails pokemonFocus={pokemonFocus} onSelect={handlePokemonFocus} />}
    </>
  );
}

export default App;
