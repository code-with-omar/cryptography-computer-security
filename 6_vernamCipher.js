const generateKey = (planText) => {
    const len = planText.length;
    // console.log(len)
    let key = "";
    for (let i = 0; i < len; i++) {
        let randomNumber = Math.floor((Math.random() * 26) + 65);
        // console.log(randomNumber)
        let chart = String.fromCharCode(randomNumber);
        key += chart;
    }
    return key
}

const encrypt = (planText, key) => {
    let cipherText = "";
    let cipherCode = [];
    for (let i = 0; i < planText.length; i++) {
        let x = planText.charCodeAt(i);
        let y = key.charCodeAt(i);
        let asciiValue = x ^ y;
        cipherCode.push(asciiValue);
        let char = String.fromCharCode(asciiValue % 26 + 65);
        cipherText += char; // Append the character to the cipherText string
    }
    return [cipherText, cipherCode]; // Return both the cipherText and cipherCode array
}

const decrypt = (cipherCode, key) => {
    let planText = "";
    for (let i = 0; i <= cipherCode.length; i++) {
        let x = cipherCode[i]
        let y = key.charCodeAt(i);
        let asciiValue = x ^ y;
        planText += String.fromCharCode(asciiValue)
    }
    return planText;
}

const planText = "Information and communication";
const key = generateKey(planText);
// console.log(key);
const [cipherText, cipherCode] = encrypt(planText, key);
console.log("Encrypted text: ", cipherText);

let decryptedText = decrypt(cipherCode, key)
console.log("Return PlanText: ", decryptedText)