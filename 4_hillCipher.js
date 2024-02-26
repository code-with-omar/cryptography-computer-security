const hillEncrypted = (plainText, key) => {
    plainText = plainText.toLowerCase();

    let encryptedCode = [];
    for (let i = 0; i < plainText.length; i++) {
        let integer = plainText[i].charCodeAt() - 97; // Subtract 97 to map 'a' to 0, 'b' to 1, ...
        encryptedCode.push(integer);
    }

    let cipherMat = [];
    for (let i = 0; i < encryptedCode.length; i += 2) {
        if (i + 1 < encryptedCode.length) {
            let slice = encryptedCode.slice(i, i + 2);
            cipherMat.push(slice);
        } else if (i < encryptedCode.length) {
            // Handle the case when there's only one element left
            cipherMat.push([encryptedCode[i], 0]);
        }
    }

    let result = '';
    for (let i = 0; i < cipherMat.length; i++) {
        let row = cipherMat[i];
        let encryptedRow = [
            (key[0][0] * row[0] + key[0][1] * row[1]) % 26,
            (key[1][0] * row[0] + key[1][1] * row[1]) % 26
        ];
        for (let j = 0; j < encryptedRow.length; j++) {
            result += String.fromCharCode(encryptedRow[j] + 97);
        }
    }

    return result;
}

let message = "omar";
let matrix = [[3, 3], [2, 2]];
const encrypted = hillEncrypted(message, matrix);
console.log("Encrypted Result:", encrypted);
