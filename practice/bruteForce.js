const encrypt = (text, s) => {
    let result = "";
    let text1 = text.toUpperCase();
    for (let i = 0; i < text1.length; i++) {
        let char = text1[i];
        if (char >= 'A' && char <= 'Z') {
            let integer = char.charCodeAt();
            // console.log(integer);
            let newLetterInteger = (integer + s - 65) % 26 + 65;
            // console.log(newLetterInteger);

            let ch = String.fromCharCode(newLetterInteger);
            // console.log(ch)
            result += ch
        }
    }
    console.log("Cipher text : ", result);
    return result;
}

//Decryption 

const decryption = (text, s) => {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char >= 'A' && char <= 'Z') {
            let integer = char.charCodeAt();
            let newLetterInteger = (integer - s + 65) % 26 + 65;
            let ch = String.fromCharCode(newLetterInteger);
            result += ch;
        } else {
            result += char;
        }
    }
    console.log("Decryption text :", result);
}



let text = "hello";
// let s = 5;
console.log("Plan text : ", text)
// console.log("Shifting key: ", s)
for( let i=0;i<26;i++){
    const chipherText = encrypt(text, i);
    if(i==25){
        console.log("============================")
        console.log("Possible Outcome")
        console.log("============================")
        for(let j=0;j<26;j++){
            decryption(chipherText, j)
        }
    }
}


// decryption(chipherText, s)
// name.toUpperCase();
// console.log(name);