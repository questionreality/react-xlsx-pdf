import React, { useContext } from "react";
import { DataContext } from "../util/Context";
import { jsPDF } from "jspdf";

function Download() {
const { userInputs } = useContext(DataContext);
  const downloadPdf = () => {
    const doc = new jsPDF();
    userInputs.forEach((element, i) => {
      doc.text(String(element), 10, 10 * (i + 1));
    });
    doc.save("userInput.pdf");
    console.log(doc);
  };
  return (
    <button
      className="sm:mr-auto mb-5 sm:mb-0 btn-green btn  btn-large"
      onClick={downloadPdf}
    >
      Download as pdf
    </button>
  );
}

export default Download;
