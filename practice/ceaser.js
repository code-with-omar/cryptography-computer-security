const encrypt = (plainText, key) => {
    let result = "";
    plainText = plainText.toUpperCase();
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        if (char >= 'A' && char <= 'Z') {
            let asciiValue = char.charCodeAt();
            let newAsciiValue = (asciiValue + key - 65) % 26 + 65
            let character = String.fromCharCode(newAsciiValue);
            // console.log(character)
            result += character;
        } else {
            result += char
        }
    }
    console.log(result)
    return result;
}

const decryption = (text, s) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            let integer = char.charCodeAt();
            let newLetterInteger = (integer - s + 65) % 26 + 65;
            let ch = String.fromCharCode(newLetterInteger);
            result += ch;
        } else {
            result += char;
        }
    }
    return result
}
const text = "INFORMATION and communication";
const key = 5;
console.log("Plain Text : ", text);
console.log("Shifting key :", key);
const cipherText = encrypt(text, key)
// console.log("Cipher text: ",cipherText)
const decryptText = decryption(cipherText, key);
console.log(decryptText)
