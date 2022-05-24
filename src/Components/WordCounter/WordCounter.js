import "./wordCounter.css";
import React, { useState, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function WordCounter() {
  const [inputStr, setInputStr] = useState("");
  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");
  const [splittedList, setSplittedList] = useState([]);
  const [singleCharNum, setSingleCharNum] = useState([]);
  const [binary, setBinary] = useState("");
  const [showBinary, setShowBinary] = useState(false);
  useEffect(() => {
    setNumber("");
  }, []);

  useEffect(() => {
    Singler();
    ToBinary();
  }, [number]);

  //=============================================
  function ToBinary() {
    var bi = [];
    for (var i = 0; i < inputStr.length; i++) {
      bi += inputStr[i].charCodeAt(0).toString(2) + " ";
    }
    setBinary(bi);
  }
  //==============================================
  function Singler() {
    var y = String(number);
    var x = y.length;
    if (x > 1) {
      while (y.length > 1) {
        var t = 0;
        for (let z in y) {
          t += Number(y[z]);
        }
        y = String(t);
      }
      setSingleCharNum(Number(y));
    } else {
      setSingleCharNum(number);
    }
  }
  //=======================================
  function CopyToClipboard(input) {
    navigator.clipboard.writeText(input);
    toast("Copied To ClipBoard !");
  }
  //======================================
  var count = 0;
  function CalculateIt() {
    for (let index = 0; index < inputStr.length; index++) {
      var x = inputStr[index];
      if (x === "a" || x === "A") {
        count += 1;
      } else if (x === "b" || x === "B") {
        count += 2;
      } else if (x === "c" || x === "C") {
        count += 3;
      } else if (x === "d" || x === "D") {
        count += 4;
      } else if (x === "e" || x === "E") {
        count += 5;
      } else if (x === "f" || x === "F") {
        count += 6;
      } else if (x === "g" || x === "G") {
        count += 7;
      } else if (x === "h" || x === "H") {
        count += 8;
      } else if (x === "i" || x === "I") {
        count += 9;
      } else if (x === "j" || x === "J") {
        count += 10;
      } else if (x === "k" || x === "K") {
        count += 11;
      } else if (x === "l" || x === "L") {
        count += 12;
      } else if (x === "m" || x === "M") {
        count += 13;
      } else if (x === "n" || x === "N") {
        count += 14;
      } else if (x === "o" || x === "O") {
        count += 15;
      } else if (x === "p" || x === "P") {
        count += 16;
      } else if (x === "q" || x === "Q") {
        count += 17;
      } else if (x === "r" || x === "R") {
        count += 18;
      } else if (x === "s" || x === "S") {
        count += 19;
      } else if (x === "t" || x === "T") {
        count += 20;
      } else if (x === "u" || x === "U") {
        count += 21;
      } else if (x === "v" || x === "V") {
        count += 22;
      } else if (x === "w" || x === "W") {
        count += 23;
      } else if (x === "x" || x === "X") {
        count += 24;
      } else if (x === "y" || x === "Y") {
        count += 25;
      } else if (x === "z" || x === "Z") {
        count += 26;
      }
    }
    setNumber(count);
  }
  function Printer(inpu) {
    console.log("printer : ", inpu.split("."), " [[[" + typeof inpu + "]]]");
  }

  function binaryAgent(str) {
    Printer(str);
    var newBin = str.toString().split(" ");
    var binCode = [];
    var i;
    for (i = 0; i < newBin.length; i++) {
      binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
    }
  }
  //===============================================
  return (
    <>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="col-12 row ta-center">
          {" "}
          <div className="col-12 col-sm-6 mt-10 ms-auto word-taker-div pos-relative row">
            <input
              onChange={(e) => {
                setInputStr(e.target.value);
                setNumber(0);
                setShowBinary(false);
              }}
              id="inputBinary"
              onKeyUp={(e) => binaryAgent(e.target.value)}
              className="word-taker col-11"
            />

            <button
              className="col-1 cal-butt"
              onClick={() => {
                CalculateIt();
                setShowBinary(true);
                binaryAgent(inputStr);
              }}
            >
              {/* <MdDoubleArrow /> */}
              <img
                className="cal-icon"
                alt="calculate-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABJElEQVRoge2aUQ6CMAyGhzEcSj2YF1D0GHoQX/Qo4jU+H4SYoGR062CBfk9ASNufPy1bwDnDMKIASuAMvBifGqiAUkPIaQIBXY4aQuom2CY6mDz3tsldawQDQKGupPnXIYHDSpJRFEUhuX+VqpCxETvSIn1iQwl1fDaOJBfSbVbfeSizcSS4R4bS7SXfeSjmyJQvyX8s15FU749YZuOICckNsRDgpr5t+uUurcvbuO2YbZt87GV8N38faqvfvoSh16Ust0dyZTZC1NdaWtelmCM2tRJhQnLDplZu2NTKDROSG4ueWg+NxB7EW10v7SZaPbBy/iGOvJqA2+iqhAC75tD7MXRIj1ydc3vn3GNCYy7REfj8MFDx/Uw9Jk/ggMYPA4axcN5UDsvz7V14kwAAAABJRU5ErkJggg=="
              />
            </button>
          </div>
        </div>

        {/* <div>
          <p className="">{number != 0 ? number : null}</p>
          <p className="" style={{ color: "red" }}>
            {singleCharNum != 0 ? singleCharNum : null}
          </p>
          <p style={{ color: "green" }}>{showBinary ? binary : null}</p>
        </div> */}

        <div className="row results-row ">
          <div className="col-xs-6 col-sm-3 org-number-div">
            <h3 className="col-12 result-heading">Numerical Value : </h3>
            {number != 0 ? number : null}
          </div>
          <div className="col-xs-6 col-sm-3 single-number-div">
            <h3 className="col-12 result-heading">
              single character Numerical Value :{" "}
            </h3>

            {singleCharNum != 0 ? singleCharNum : null}
          </div>
          <div className="col-12 row col-sm-3 binary-number-div">
            <button
              className="col-2 copy-button"
              onClick={() => CopyToClipboard(binary)}
              disabled={showBinary ? false : true}
            >
              {" "}
              <MdOutlineContentCopy />
            </button>

            <h3 className="col-12 result-heading">Binary equivalent : </h3>

            <p className="binary-par"> {showBinary ? binary : null}</p>
          </div>
        </div>
        <ToastContainer
          className="toastMes"
          position="bottom-right"
          hideProgressBar="true"
          autoClose={1500}
          style={{ color: "red" }}
        />
      </div>
    </>
  );
}

export default WordCounter;
