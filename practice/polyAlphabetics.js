const generatedKey = (string, key) => {
    let keyLen = key.length;
    key = key.split('');
    for (i = 0; i < string - keyLen; i++) {
        key.push(key[i % keyLen]);
    }
    return key.join('');
}

const cipherText = (plaintext, keyword) => {
    plaintext = plaintext.toUpperCase();
    keyword = keyword.toUpperCase();
    let cipherText1 = "";
    for (let i = 0; i < plaintext.length; i++) {
        let x = plaintext.charCodeAt(i);
        let y = keyword.charCodeAt(i);
        let sum = x + y;
        let value = (sum % 26) + 65;
        cipherText1 += (String.fromCharCode(value));
    }
    return cipherText1;
}

const decrypt = (cipherText, key) => {
    key = key.toUpperCase();
    cipherText = cipherText.toUpperCase();
    let decipherText = "";
    for (let i = 0; i < cipherText.length; i++) {
        let x = cipherText.charCodeAt(i);
        let y = key.charCodeAt(i);
        let difference = x - y;
        if (difference < 0) {
            difference += 26;
        }
        let value = difference + 65;
        decipherText += String.fromCharCode(value);
    }
    return decipherText
}
let string = "omar"
let keyword = "ice";
if (string !== keyword) {
    const key = keyword;
    keyword = generatedKey(string.length, keyword);
    console.log(keyword)
}
const cipherTextGenerate = cipherText(string, keyword);
console.log(cipherTextGenerate)

const decipherTextGenerate = decrypt(cipherTextGenerate, keyword)
console.log(decipherTextGenerate);