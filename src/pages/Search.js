import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../util/Context";
import AutoComplete from "../components/AutoComplete";
import Download from "../components/Download";
import FileInput from "../components/FileInput";
import Logout from "../components/Logout";
import Loader from "react-loader-spinner";

function Search() {
  const { data, setData } = useContext(DataContext);
  // state1 - input visible, nothing else visible
  // state2 - input visible, loader visible
  // state3 - autocomplete,download and logout buttons visible
  const [loading, setLoading] = useState("state1");
  useEffect(() => {
    //   initial data is []
    if (data.length !== 0) {
      console.log("data", data);
      setLoading("state3");
    }
  }, [data]);
  return (
    <div className="p-12">
      {/* Loading Spinner while data loads and then the UI*/}
      <FileInput loading={loading} setLoading={setLoading} />
      {loading === "state2" ? (
        <div className="flex">
          <Loader
            type="Circles"
            color="#3e92cc"
            height={250}
            width={250}
            className="mx-auto"
          />
        </div>
      ) : loading === "state3" ? (
        <div className="flex flex-col md:px-10">
          <AutoComplete />{" "}
          <div className="flex flex-row flex-center">
            <Download /> <Logout />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
