function encryptRailFence(text, key) {
    let rail = new Array(key);
    for (let i = 0; i < key; i++) {
        rail[i] = new Array(text.length).fill('\n');
    }
    console.log(rail)

    let dir_down = false;
    let row = 0, col = 0;

    for (let i = 0; i < text.length; i++) {
        if (row === 0 || row === key - 1) {
            dir_down = !dir_down;
        }

        rail[row][col] = text[i];
        col += 1;

        if (dir_down) {
            row += 1;
        } else {
            row -= 1;
        }
    }

    let result = "";
    for (let i = 0; i < key; i++) {
        for (let j = 0; j < text.length; j++) {
            if (rail[i][j] !== '\n') {
                result += rail[i][j];
            }
        }
    }
    return result;
}

function decryptRailFence(cipher, key) {
    let rail = new Array(key);
    for (let i = 0; i < key; i++) {
        rail[i] = new Array(cipher.length).fill('\n');
    }

    let dir_down = null;
    let row = 0, col = 0;

    for (let i = 0; i < cipher.length; i++) {
        if (row === 0) {
            dir_down = true;
        }
        if (row === key - 1) {
            dir_down = false;
        }

        rail[row][col] = '*';
        col += 1;

        if (dir_down) {
            row += 1;
        } else {
            row -= 1;
        }
    }

    let index = 0;
    for (let i = 0; i < key; i++) {
        for (let j = 0; j < cipher.length; j++) {
            if (rail[i][j] === '*' && index < cipher.length) {
                rail[i][j] = cipher[index];
                index += 1;
            }
        }
    }

    let result = "";
    row = 0, col = 0;
    for (let i = 0; i < cipher.length; i++) {
        if (row === 0) {
            dir_down = true;
        }
        if (row === key - 1) {
            dir_down = false;
        }

        if (rail[row][col] !== '*') {
            result += rail[row][col];
            col += 1;
        }

        if (dir_down) {
            row += 1;
        } else {
            row -= 1;
        }
    }
    return result;
}

console.log(encryptRailFence("attack at once", 2));
// console.log(decryptRailFence("atc toctaka ne", 2));
