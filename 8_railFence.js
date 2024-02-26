const encryptRailFence = (plainText) => {

    let encryptedFastPart = "";
    let encryptedLastPart = "";
    for (let i = 0; i < plainText.length; i++) {
        if (i % 2 === 0) {
            encryptedFastPart += plainText[i];
        } else {
            encryptedLastPart += plainText[i]
        }
    }
    // console.log(encryptedFastPart)
    let encryptedText = encryptedFastPart + encryptedLastPart
    return encryptedText;
}

const decryptRailFence = (cipherText) => {
    let decryptedText = "";
    let halfLength = Math.ceil(cipherText.length / 2);
    // console.log(halfLength)
    for (let i = 0; i < halfLength; i++) {
        decryptedText += cipherText[i];
        // console.log(decryptedText)
        if (i + halfLength < cipherText.length) {
            decryptedText += cipherText[i + halfLength];
        }
    }

    return decryptedText;
}
let plainText = "attack at once"
const encrypted = encryptRailFence(plainText)
console.log(encrypted);
const decrypt = decryptRailFence(encrypted);
console.log(decrypt)



