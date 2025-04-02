const display = document.getElementById("display");


const appendNumber = (index) => {
    // console.log("appendNumber", index);
    if (display.innerText === "0") {
        display.innerText = index;
    }

    else {
        display.innerText += index;
    }

};

const operate = (operator) => {
    // console.log("operate", operator);
    if (display.innerText === "0") {
        return;
    }
    if (display.innerText.endsWith("+") || display.innerText.endsWith("-") || display.innerText.endsWith("*") || display.innerText.endsWith("/")) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

const operateClear = () => {
    // console.log("operateClear");
    display.innerText = "0";
}


// const clearDisplay = () => {
//     console.log(display.innerText);
//     if (display.innerText === "0") {
//         return;
//     }
// }