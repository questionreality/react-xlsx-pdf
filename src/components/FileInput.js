import React, { useContext } from "react";
import { DataContext } from "../util/Context";
import * as XLSX from "xlsx";

function FileInput({ loading, setLoading }) {
  const { setData } = useContext(DataContext);

  const readExcel = (file) => {
    setLoading("state2");
    setData([]);
    const promise = new Promise((resolve, reject) => {
      console.log("name", file.name.split(".").pop());
      if (file.name.split(".").pop() !== "xlsx") {
        throw new Error("File is of improper format");
      }
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0]; //get the first sheet
        const ws = wb.Sheets[wsname];
        const sheetData = XLSX.utils.sheet_to_json(ws);
        // setData
        localStorage.setItem("data", JSON.stringify(sheetData));
        setLoading("state3");
        setData((data) => [...sheetData]);
        resolve(sheetData);
      };
      fileReader.onerror = (err) => {
        setLoading("state2");
        reject(err);
      };
    });
    promise
      .then((returnData) => {
        console.log(returnData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-100% text-center mb-10">
      <label className="cursor-pointer  inline">
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <span className="text-lg">☝️</span>
        <span className="text-primary-700 sm:text-lg bg-primary-50 underline font-semibold">
          Upload an excel file
        </span>
      </label>
    </div>
  );
}

export default FileInput;
