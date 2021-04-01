import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../util/Context";
import fuzzySearch from "fuzzysearch";

function AutoComplete() {
  const { data } = useContext(DataContext);
  const [searchKey, setSearchKey] = useState("");
  const [keys, setKeys] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [display, setDisplay] = useState(false);
  // save value as well (do this later)
  const [userInputs, setUserInputs] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      console.log(data[0]);
      if (keys?.length === 0) {
        for (const [key, value] of Object.entries(data[0])) {
          setKeys((keys) => keys.concat(key));
        }
      }
    }
    setSearchKey(keys[0]);
  }, [data, keys]);

  const setSuggestion = (name) => {
    setSearchInput(name);
    setDisplay(false);
  };
  const HandleKeyDown = (event) => {};
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-gray-900 font-medium">Choose the Search Key:</h1>
        <fieldset className="radio-group w-full py-5 text-gray-800">
          {keys?.length !== 0
            ? keys?.map((key, i) => (
                <div className="md:inline md:px-6 first:pl-0" key={i}>
                  <input
                    type="radio"
                    value={key}
                    name={key}
                    checked={searchKey === key}
                    onChange={(e) => setSearchKey(e.target.value)}
                  />{" "}
                  <span
                    className={
                      searchKey === key ? "font-medium text-primary-700" : ""
                    }
                  >
                    {key}
                  </span>
                </div>
              ))
            : null}
        </fieldset>
      </div>
      <div className="search w-full">
        <input
          type="text"
          className="input input-autocomplete "
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value.toLowerCase());
          }}
          onFocus={() => setDisplay(true)}
          onBlur={() => setDisplay(false)}
        />
        {display && searchKey && (
          <div className="suggestions w-1/2 mx-auto bloc bg-gray-100 text-gray-700 rounded-b-xl shadow-md">
            {data
              .map((ele) => ele[searchKey] ?? "")
              .filter((ele) =>
                fuzzySearch(
                  searchInput,
                  JSON.stringify(ele).trim().toLowerCase()
                )
              )
              .slice(0, 5)
              .map((ele, i) => {
                return ele ? (
                  <div
                    className="option px-5 py-2 border-gray-300 border-b-2 border-dotted last:border-b-0 "
                    key={i}
                    onClick={() => setSuggestion(ele)}
                    dataName={ele}
                    tabIndex="0"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setSuggestion(ele);
                      }
                    }}
                  >
                    {ele}
                  </div>
                ) : null;
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoComplete;
