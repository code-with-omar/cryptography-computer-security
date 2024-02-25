// Function to brute force decrypt the ciphertext for Caesar Cipher
function bruteForceDecrypt(ciphertext) {
    for (let shift = 0; shift < 26; shift++) {
        let decryptedText = caesarDecrypt(ciphertext, shift);
        console.log(`Shift ${shift}: ${decryptedText}`);
    }
}

// Function to brute force encrypt the plaintext for Caesar Cipher
function bruteForceEncrypt(plainText) {
    for (let shift = 0; shift < 26; shift++) {
        let encryptedText = caesarEncrypt(plainText, shift);
        console.log(`Shift ${shift}: ${encryptedText}`);
    }
}

// Function to encrypt plaintext using Caesar Cipher with a given shift
function caesarEncrypt(plainText, shift) {
    let encryptedText = "";
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = char === char.toUpperCase();
            let base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            encryptedText += String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base);
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

// Function to decrypt ciphertext using Caesar Cipher with a given shift
function caesarDecrypt(ciphertext, shift) {
    let decryptedText = "";
    for (let i = 0; i < ciphertext.length; i++) {
        let char = ciphertext[i];
        if (/[a-zA-Z]/.test(char)) {
            let isUpperCase = char === char.toUpperCase();
            let base = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            decryptedText += String.fromCharCode((char.charCodeAt(0) - base - shift + 26) % 26 + base);
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

let plantext = 'hello';
console.log('Brute Force Encryption for Caesar Cipher:');
bruteForceEncrypt(plantext);

let ciphertext = "ifmmp";
console.log("\nBrute Force Decryption for Caesar Cipher:");
bruteForceDecrypt(ciphertext);
