import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../util/Context";

function AutoComplete() {
  const { data } = useContext(DataContext);
  const [searchKey, setSearchKey] = useState("");
  const [searchArray, setSearchArray] = useState([]); //array to be feed into autocomplete component
  const [keys, setKeys] = useState([]);
  const [autocomplete, setAutocomplete] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : searchArray.filter((element) => {
      
    });
  };
  const [userInputs, setUserInputs] = useState([]);
  useEffect(() => {
    if (data.length !== 0) {
      console.log(data[0]);
      if (keys?.length === 0) {
        for (const [key, value] of Object.entries(data[0])) {
          setKeys((keys) => keys.concat(key));
        }
        setSearchKey(keys[0]);
      }
    }
  }, [data, keys]);
  useEffect(() => {
    setSearchArray(data.map((dataItem) => dataItem[searchKey]));
  }, [searchKey]);
  const handleRadioButtonChange = (e) => {
    setSearchKey(e.target.value);
  };
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-gray-900 font-medium">Choose the Search Key:</h1>
        <fieldset className="radio-group w-full py-5 text-gray-800">
          {keys?.length !== 0
            ? keys?.map((key, i) => (
                <div className="md:inline md:px-6 first:pl-0">
                  <input
                    type="radio"
                    value={key}
                    name={key}
                    checked={searchKey === key}
                    onChange={handleRadioButtonChange}
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
      <div className="search"></div>
    </div>
  );
}

export default AutoComplete;
