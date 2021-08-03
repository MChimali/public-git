//Standard and encrypted alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'"; 
var encryptedAlphabet= "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Buttons events listeners to activate the algorithm
document.getElementById("encrypt-button").addEventListener("click", showEncrypt);
document.getElementById("decrypt-button").addEventListener("click", showDecrypt);

//Get value from upper text-area and pass it encrypted trough encryptText() to the lower text-area
function showEncrypt () {
    var textToEncrypt = document.getElementById("decrypt-textarea").value;
    document.getElementById("encrypt-textarea").value = textChange(alphabet ,textToEncrypt.toLowerCase(), encryptedAlphabet);
    document.getElementById("decrypt-textarea").value = "";
}

//Get value from lower text-area and pass it decrypted trough decryptText() to the upper text-area
function showDecrypt () {
    var textToDecrypt = document.getElementById("encrypt-textarea").value;
    document.getElementById("decrypt-textarea").value = textChange(encryptedAlphabet, textToDecrypt.toLowerCase(), alphabet);
    document.getElementById("encrypt-textarea").value = "";
}

//Iterates trough all letters of text, gettin their indexes, and directly passing the equivalent
var textChange = (alphabetFrom, text, alphabetTo) => {

    var textResult = ""; 

    for (letter of text){
        if (letter === " ") textResult += " ";
        else{       
        var index = alphabetFrom.indexOf(letter);
        textResult += alphabetTo[index];
        }  
    }
    return textResult;
}
