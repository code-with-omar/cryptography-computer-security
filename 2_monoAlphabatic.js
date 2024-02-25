const stringEncrypted = (s) => {
    const normalChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const codedChar = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
        'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
        'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    let encryptedString = "";
    for (let char of s) {
        let found = false;
        for (let i = 0; i < 26; i++) {
            if (char === normalChar[i]) {
                encryptedString += codedChar[i];
                found = true;
                break;
            }
        }
        if (!found) {
            encryptedString += char;
        }
    }
    console.log("Encrypted Text :",encryptedString);
    return {
        encryptedString,
        normalChar,
        codedChar,
    }
}

const stringDncrypted = (s, normalChar, codedChar) => {
    let decryptedString = "";
    for (let char of s) {
        let found = false;
        for(i=0;i<26;i++){
            if(char===codedChar[i]){
                decryptedString+=normalChar[i];
                found=true;
                break;
            }
        
        }
        if(!found){
            decryptedString+=char;
        }
        
    }
    console.log("Decrypted message :",decryptedString)
}
const main = () => {
    const plainText = "Welcome to ICE";
    console.log("Plan Text :",plainText);
    // Encription
    const encryptedMessage = stringEncrypted(plainText.toLocaleLowerCase());
    // console.log(encryptedMessage);
    const { encryptedString, normalChar, codedChar } = encryptedMessage;
    const dencryptedMessage = stringDncrypted(encryptedString, normalChar, codedChar)
}
main()