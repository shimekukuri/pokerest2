import React, { useState } from "react";
import { SEARCH_ACTIONS } from "../App";

export default function Search(props) {
  const { searchDispacher } = props;
  const [search, setSearch] = useState(``);

  const handleSearchStringChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchDispacher({
      type: SEARCH_ACTIONS.SET_SEARCH_STRING,
      payload: { searchString: search },
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
              width: "80%",
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
                    style={{ width: "100%" }}
                    value={search}
                    onChange={handleSearchStringChange}
                  />
                </form>
                <div>
                  <select style={{ width: "100%", marginTop: "5px" }}>
                    <option value={"yolo"}>Yolo</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
