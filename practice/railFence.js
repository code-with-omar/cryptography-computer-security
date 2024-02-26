const encryptRailFence = (plainText) => {
    let encryptFastPart = "";
    let encryptLastPart = "";
    for (let i = 0; i < plainText.length; i++) {
        if (i % 2 === 0) {
            encryptFastPart += plainText[i];
        } else {
            encryptLastPart += plainText[i]
        }
    }
    const encryptText = encryptFastPart + encryptLastPart;
    return encryptText;
}
const decryptRailFence = (cipherText) => {
    let decryptedText = "";
    let halfLength = Math.ceil(cipherText.length / 2);
    for (let i = 0; i < halfLength; i++) {
        decryptedText += cipherText[i];
        if (i + halfLength < cipherText.length) {
            decryptedText += cipherText[i + halfLength];
        }
    }
    return decryptedText;
}


let plainText = "attack now india"
const encrypted = encryptRailFence(plainText);
console.log(encrypted);


const decrypt = decryptRailFence(encrypted);
console.log(decrypt);