function generateKey(length) {
    let key = "";
    for (let i = 0; i < length; i++) {
        key += String.fromCharCode(Math.floor(Math.random() * 26) + 65); // ASCII codes for A-Z
    }
    return key;
}

function encrypt(plaintext, key) {
    let ciphertext = "";
    let cipherCode = [];
    for (let i = 0; i < plaintext.length; i++) {
        let x = plaintext.charCodeAt(i) ^ key.charCodeAt(i);
        cipherCode.push(x);
        ciphertext += String.fromCharCode(x % 26 + 65);
    }
    return [ciphertext, cipherCode];
}

function decrypt(cipherCode, key) {
    let plaintext = "";
    for (let i = 0; i < cipherCode.length; i++) {
        let x = (cipherCode[i] ^ key.charCodeAt(i));
        plaintext += String.fromCharCode(x);
    }
    return plaintext;
}

let plaintext = "Information";
let key = generateKey(plaintext.length); // Generate a random key

let result = encrypt(plaintext, key);
let ciphertext = result[0];
let cipherCode = result[1];
console.log(cipherCode)
console.log("Ciphertext:", ciphertext);
let decryptedtext = decrypt(cipherCode, key);
console.log("Decrypted text:", decryptedtext);
