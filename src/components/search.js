import React, { useState } from "react";
import { SEARCH_ACTIONS } from "../App";
import { RESULTS_ACTIONS } from "../App";

export default function Search(props) {
  const { searchDispacher, setSubmitted, resultsDispatcher } = props;
  const [search, setSearch] = useState(``);

  const handleSearchResultClear = () => {
    resultsDispatcher({type: RESULTS_ACTIONS.CLEAR, payload : []});
  };

  const handleSearchStringChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchDispacher({
      type: SEARCH_ACTIONS.SET_SEARCH_STRING,
      payload: { searchString: search },
    });
    setSubmitted((prev) => prev + 1);
    setSearch(``);
  };

  const handleGroupSelection = (e) => {
    console.log(e.target.value, "it worked");
    searchDispacher({
      type: SEARCH_ACTIONS.SET_SEARCH_GROUP,
      payload: { searchGroup: e.target.value },
    });
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              backgroundColor: "hsla(359, 50%, 50%, 0.79)",
              width: "80vw",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  width: "10%",
                }}
              >
                <form onSubmit={handleFormSubmit}>
                  <input
                    placeholder="Search Params"
                    style={{ width: "96%" }}
                    value={search}
                    onChange={handleSearchStringChange}
                    required
                  />
                </form>
                <div>
                  <select
                    style={{ width: "100%", marginTop: "5px" }}
                    onChange={handleGroupSelection}
                    required
                  >
                    <option>Select what to search for</option>
                    <option value={"pokemon/"}>Pokemon</option>
                    <option value={"berry/"}>Berry</option>
                  </select>
                </div>
              </div>
              <div style={{ width: "10%" }}>
                <div
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  <button onClick={handleSearchResultClear}>
                    clear search results
                  </button>
                </div>
              </div>
              <div>test 22</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
