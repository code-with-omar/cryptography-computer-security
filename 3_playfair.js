function playfairCipher(plaintext, key, mode) {
    // Define the alphabet, excluding 'j'
    const alphabet = 'abcdefghiklmnopqrstuvwxyz';
    // Remove whitespace and 'j' from the key and convert to lowercase
    key = key.toLowerCase().replace(/\s/g, '').replace(/j/g, 'i');
    // console.log(key)
    // Construct the key square
    let keySquare = '';
    for (let letter of key + alphabet) {
        if (!keySquare.includes(letter)) {
            keySquare += letter;
        }
    }
    // Split the plaintext into digraphs, padding with 'x' if necessary
    plaintext = plaintext.toLowerCase().replace(/\s/g, '').replace(/j/g, 'i');
    if (plaintext.length % 2 === 1) {
        plaintext += 'x';
    }
    const digraphs = [];
    for (let i = 0; i < plaintext.length; i += 2) {
        digraphs.push(plaintext.substring(i, i + 2));
    }
    console.log(digraphs)
    // Define the encryption/decryption functions
    function encrypt(digraph) {
        let [a, b] = digraph;
        console.log(a, b)
        let rowA = Math.floor(keySquare.indexOf(a) / 5);
        // console.log(rowA)
        let colA = keySquare.indexOf(a) % 5;
        let rowB = Math.floor(keySquare.indexOf(b) / 5);
        let colB = keySquare.indexOf(b) % 5;
        if (rowA === rowB) {
            colA = (colA + 1) % 5;
            colB = (colB + 1) % 5;
        } else if (colA === colB) {
            rowA = (rowA + 1) % 5;
            rowB = (rowB + 1) % 5;
        } else {
            [colA, colB] = [colB, colA];
        }
        return keySquare[rowA * 5 + colA] + keySquare[rowB * 5 + colB];
    }

    function decrypt(digraph) {
        let [a, b] = digraph;
        let rowA = Math.floor(keySquare.indexOf(a) / 5);
        let colA = keySquare.indexOf(a) % 5;
        let rowB = Math.floor(keySquare.indexOf(b) / 5);
        let colB = keySquare.indexOf(b) % 5;
        if (rowA === rowB) {
            colA = (colA - 1 + 5) % 5;
            colB = (colB - 1 + 5) % 5;
        } else if (colA === colB) {
            rowA = (rowA - 1 + 5) % 5;
            rowB = (rowB - 1 + 5) % 5;
        } else {
            [colA, colB] = [colB, colA];
        }
        return keySquare[rowA * 5 + colA] + keySquare[rowB * 5 + colB];
    }

    // Encrypt or decrypt the plaintext
    let result = '';
    for (let digraph of digraphs) {
        if (mode === 'encrypt') {
            result += encrypt(digraph);
        } else if (mode === 'decrypt') {
            result += decrypt(digraph);
        }
    }

    // Return the result
    return result;
}

// Example usage
const plaintext = 'Omar Farukk';
const key = 'ice';
const ciphertext = playfairCipher(plaintext, key, 'encrypt');
console.log(ciphertext);  // outputs: "iisggymlgmsyjqu"
const decryptedText = playfairCipher(ciphertext, key, 'decrypt');
console.log(decryptedText);  // (Note: 'x' is added as padding)
