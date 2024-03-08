let screen = document.querySelector("#screen");
let btns = document.querySelectorAll("button");
let curretVal = "",
  lastVal = "";
let dot = true;
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let val = btn.textContent;
    switch (val) {
      case "1":
        curretVal += val;
        break;
      case "2":
        curretVal += val;
        break;
      case "3":
        curretVal += val;
        break;
      case "4":
        curretVal += val;
        break;
      case "5":
        curretVal += val;
        break;
      case "6":
        curretVal += val;
        break;
      case "7":
        curretVal += val;
        break;
      case "8":
        curretVal += val;
        break;
      case "9":
        curretVal += val;
        break;
      case "0":
        let temp = [...curretVal, ...lastVal];
        temp = temp.reduce((res, ele) => res + ele);
        if (temp !== 0) curretVal += val;
        break;
      case ".":
        if (
          dot &&
          (curretVal || !curretVal || curretVal[curretVal.length - 1] !== ".")
        ) {
          curretVal += val;
          dot = false;
        }
        break;
      case "/":
        if (curretVal != "0" && !isNaN(curretVal[curretVal.length - 1])) {
          dot = true;
          curretVal += val;
        } else {
          if (lastVal) {
            dot = true;
            curretVal = lastVal + val;
          }
        }
        break;
      case "*":
        if (curretVal && !isNaN(curretVal[curretVal.length - 1])) {
          dot = true;
          curretVal += val;
        } else {
          if (lastVal) {
            dot = true;
            curretVal = lastVal + val;
          }
        }
        break;
      case "-":
        if (curretVal && !isNaN(curretVal[curretVal.length - 1])) {
          dot = true;
          curretVal += val;
        } else {
          if (lastVal) {
            dot = true;
            curretVal = lastVal + val;
          }
        }
        break;
      case "+":
        if (curretVal && !isNaN(curretVal[curretVal.length - 1])) {
          dot = true;
          curretVal += val;
        } else {
          if (lastVal) {
            dot = true;
            curretVal = lastVal + val;
          }
        }
        break;
      case "%":
        if (curretVal && !isNaN(curretVal[curretVal.length - 1])) {
          dot = true;
          curretVal += val;
        } else {
          if (lastVal) {
            dot = true;
            curretVal = lastVal + val;
          }
        }
        break;
      case "=":
        curretVal = eval(curretVal).toString();
        dot = true;
        break;
      case "AC":
        curretVal = "0";
        lastVal = "0";
        break;
      case "+/-":
        if (curretVal[0] === "-") curretVal = curretVal.slice(1);
        else if (curretVal && curretVal !== "0") curretVal = "-" + curretVal;
        else if (lastVal && lastVal !== "0") curretVal = "-" + lastVal;
        break;
      default:
        break;
    }
    if (curretVal) screen.value = curretVal;
    if (val === "=") {
      lastVal = curretVal;
      curretVal = "";
    }
    if (curretVal === "0") curretVal = "";
  });
});

let calculate = () => {
  return eval(curretVal);
};
