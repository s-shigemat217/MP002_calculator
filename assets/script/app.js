const display = document.getElementById("display");

// 数字の入力
const appendNumber = (index) => {
    // console.log("appendNumber", index);
    if (display.innerText === "0") {
        display.innerText = index;
    } else {
        display.innerText += index;
    }
};

// 演算子の入力
const appendOperater = (operator) => {
    // 入力値が0の場合は、何もしない
    if (display.innerText === "0") {
        return;
    }
    // 演算子が最後に押された場合は、演算子を置き換える
    // それ以外の場合は、演算子を追加する
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

// 「＝」が押された時の処理
const operateCalc = () => {
    // console.log("operate", operator);
    if (display.innerText.endsWith("+") || display.innerText.endsWith("-") || display.innerText.endsWith("*") || display.innerText.endsWith("/")) {
        return;
    }
    try {
        display.innerText = eval(display.innerText.replace(/×/g, "*").replace(/÷/g, "/"));
    } catch (error) {
        display.innerText = "エラー";
    }
}

// キーボード入力を処理する関数
const handleKeyboardInput = (event) => {
    const key = event.key;

    if (!isNaN(key)) {
        // 数字キーが押された場合
        appendNumber(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        // 演算子キーが押された場合
        appendOperater(key);
    } else if (key === "Enter" || key === "=") {
        // Enterキーまたは = キーが押された場合
        operateCalc();
    } else if (key === "Backspace") {
        // Backspaceキーが押された場合
        if (display.innerText.length > 1) {
            display.innerText = display.innerText.slice(0, -1);
        } else {
            display.innerText = "0";
        }
    } else if (key === "Escape" || key === "Delete") {
        // Escapeキーが押された場合
        operateClear();
    }
};

// キーボードイベントリスナーを追加
document.addEventListener("keydown", handleKeyboardInput);