import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../util/Context";
import fuzzySearch from "fuzzysearch";

function AutoComplete() {
  const { data, userInputs, setUserInputs } = useContext(DataContext);
  const [searchKey, setSearchKey] = useState("");
  const [keys, setKeys] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [display, setDisplay] = useState(false);
  // save value as well (do this later)
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (data.length !== 0) {
      console.log(data[0]);
      if (keys?.length === 0) {
        for (const [key] of Object.entries(data[0])) {
          setKeys((keys) => keys.concat(key));
        }
      }
    }
    setSearchKey(keys[0]);
  }, [data, keys]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  const saveUserInput = (input) => {
    localStorage.setItem(
      "userInputs",
      JSON.stringify(userInputs.concat(input))
    );
    setUserInputs(userInputs.concat(input));
  };
  const setSuggestion = (name) => {
    setSearchInput(name);
    setDisplay(false);
    saveUserInput(String(name));
  };
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-gray-900 font-medium">Choose the Search Key:</h1>
        <fieldset className="radio-group w-full py-5 text-gray-800">
          {keys?.length !== 0
            ? keys?.map((key, i) => (
                <div className="md:inline-block md:px-6 first:pl-0" key={i}>
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
      <div className="search w-full" ref={wrapperRef}>
        <input
          type="text"
          className={`input input-autocomplete`}
          value={searchInput}
          placeholder="Search the data"
          onChange={(e) => {
            setSearchInput(e.target.value.toLowerCase());
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveUserInput(e.target.value);
            }
          }}
          onFocus={() => setDisplay(true)}
        />
        {display && searchKey && (
          <div className="suggestions md:w-1/2 md:mx-auto bloc bg-gray-100 text-gray-700 rounded-b-xl shadow-md">
            {data
              .map((ele) => ele[searchKey] ?? "")
              .filter((ele) =>
                fuzzySearch(
                  searchInput,
                  JSON.stringify(ele).trim().toLowerCase()
                )
              )
              .slice(0, 5)
              // .concat(userInputs)
              // .slice(0, 10)
              .map((ele, i) => {
                return ele ? (
                  <div
                    className="option px-5 py-2 text-gray-700 border-gray-300 border-b-2 border-dotted last:border-b-0 "
                    key={i}
                    onClick={() => setSuggestion(ele)}
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
            {[...userInputs]
              .reverse()
              .slice(0, 3)
              .map((ele, i) => {
                return ele ? (
                  <div
                    className="option px-5 py-2 text-gray-400 border-gray-300 border-b-2 border-dotted last:border-b-0 "
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
