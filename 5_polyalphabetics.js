// const generatedKey = (string, key) => {
//     key = key.split('');
//     console.log(key);
//     if (string.length === key.length) {
//         return key.join("");
//     } else {
//         for (let i = 0; i < string.length - key.length; i++) {
//             key.push(key[i % key.length]);
//         }
//         return key.join('');
//     }

// }

const cipherText = (string, key) => {
    string = string.toUpperCase();
    key = key.toUpperCase();
    let cipher_text = "";
    for (let i = 0; i < string.length; i++) {
        let x = string.charCodeAt(i);
        // console.log(x);
        let y = key.charCodeAt(i)
        // console.log(x);
        let sum = x + y;
        // console.log(sum);
        let value = (sum % 26) + 65;
        // console.log(letter)
        cipher_text += (String.fromCharCode(value))
    }
    return cipher_text
}


// decryption
const decrypt = (cipherText, key) => {
    key = key.toUpperCase();
    cipherText = cipherText.toUpperCase();
    let decipherText = ''
    for (let i = 0; i < cipherText.length; i++) {
        let x = cipherText.charCodeAt(i);
        let y = key.charCodeAt(i);
        let difference = x - y;
        // console.log(difference)
        if (difference < 0) {
            difference = difference + 26
        }
        // console.log(difference)
        let value = difference + 65
        decipherText += (String.fromCharCode(value))
    }
    return decipherText;
}
let string = "playfair";
let keyword = "hellohel";
console.log("Plain text : ", string);
console.log("Key: ", keyword);
console.log("==================================")
let cipherTextGenerate = cipherText(string, keyword);
console.log("Cipher text : ", cipherTextGenerate);
console.log("====================================")
let decipherTextGenerate = decrypt(cipherTextGenerate, keyword);
console.log("Decipher text :", decipherTextGenerate);