const generateKey = (plainText) => {
    let key = "";
    for (let i = 0; i < plainText; i++) {
        let randomNumber = Math.floor(Math.random() * 26) + 65;
        let chart = String.fromCharCode(randomNumber);
        key += chart;
    }
    return key
}
const encrypt = (plainText, key) => {
    let cipherText = ""
    let cipherCode = [];
    for (let i = 0; i < plainText.length; i++) {
        let x = plainText.charCodeAt(i);
        let y = key.charCodeAt(i);
        let asciiValue = x ^ y;
        cipherCode.push(asciiValue);
        let char = String.fromCharCode(asciiValue % 26 + 65);
        cipherText += char;
    }
    return [cipherText, cipherCode]
}
const decrypt = (cipherCode, key) => {
    let plainText = "";
    for (let i = 0; i < cipherCode.length; i++) {
        let x = cipherCode[i];
        let y = key.charCodeAt(i);
        let asciiValue = x ^ y;
        plainText += String.fromCharCode(asciiValue);
    }
    return plainText;
}
const plainText = "Information and"
const key = generateKey(plainText.length);
// console.log(key)
const [cipherText, cipherCode] = encrypt(plainText, key);
console.log(cipherText)
const decryptedText = decrypt(cipherCode, key);
console.log(decryptedText)