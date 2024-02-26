function playfairCipher(plaintext, key, mode) {
    // Define the alphabet, excluding 'j'
    const alphabet = 'abcdefghiklmnopqrstuvwxyz';
    // Remove whitespace and 'j' from the key and convert to lowercase
    key = key.toLowerCase().replace(/\s/g, '').replace(/j/g, 'i');
    // Construct the key square
    let keySquare = '';
    for (const letter of key + alphabet) {
        if (!keySquare.includes(letter)) {
            keySquare += letter;
        }
    }
    // Split the plaintext into digraphs, padding with 'x' if necessary
    plaintext = plaintext.toLowerCase().replace(/\s/g, '').replace(/j/g, 'i');
    let replacePlaintext = '';
    if (mode === 'encrypt') {
        let it = 0;
        while (it < plaintext.length - 1) {
            if (plaintext[it] === plaintext[it + 1]) {
                replacePlaintext += plaintext[it] + 'x';
                it += 1;
            } else {
                replacePlaintext += plaintext[it] + plaintext[it + 1];
                it += 2;
            }
        }
        // replacePlaintext += (it < plaintext.length) ? plaintext[it] : '';
        console.log(replacePlaintext)
        plaintext = replacePlaintext;
    }

    if (plaintext.length % 2 === 1) {
        plaintext += 'x';
    }
    const digraphs = [];
    for (let i = 0; i < plaintext.length; i += 2) {
        digraphs.push(plaintext.substring(i, i + 2));
    }

    // Define the encryption/decryption functions
    function encrypt(digraph) {
        const [a, b] = digraph;
        let [row_a, col_a] = [Math.floor(keySquare.indexOf(a) / 5), keySquare.indexOf(a) % 5];
        let [row_b, col_b] = [Math.floor(keySquare.indexOf(b) / 5), keySquare.indexOf(b) % 5];
        if (row_a === row_b) {
            col_a = (col_a + 1) % 5;
            col_b = (col_b + 1) % 5;
        } else if (col_a === col_b) {
            row_a = (row_a + 1) % 5;
            row_b = (row_b + 1) % 5;
        } else {
            [col_a, col_b] = [col_b, col_a];
        }
        return keySquare[row_a * 5 + col_a] + keySquare[row_b * 5 + col_b];
    }

    function decrypt(digraph) {
        const [a, b] = digraph;
        let [row_a, col_a] = [Math.floor(keySquare.indexOf(a) / 5), keySquare.indexOf(a) % 5];
        let [row_b, col_b] = [Math.floor(keySquare.indexOf(b) / 5), keySquare.indexOf(b) % 5];
        if (row_a === row_b) {
            col_a = (col_a - 1 + 5) % 5;
            col_b = (col_b - 1 + 5) % 5;
        } else if (col_a === col_b) {
            row_a = (row_a - 1 + 5) % 5;
            row_b = (row_b - 1 + 5) % 5;
        } else {
            [col_a, col_b] = [col_b, col_a];
        }
        return keySquare[row_a * 5 + col_a] + keySquare[row_b * 5 + col_b];
    }

    // Encrypt or decrypt the plaintext
    let result = '';
    for (const digraph of digraphs) {
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
const plaintext = 'communication';
const key = 'monkey';
const ciphertext = playfairCipher(plaintext, key, 'encrypt');
console.log('Cipher Text:', ciphertext);
const decryptedText = playfairCipher(ciphertext, key, 'decrypt');
console.log('Decrypted Text:', decryptedText); // (Note: 'x' is added as padding)
