function checkPalindrome(){

    let text = document.getElementById("text").value;

    let original = text.toLowerCase();

    let reversed = original.split("").reverse().join("");

    let result = document.getElementById("result");

    if(original === reversed){
        result.innerHTML = text + " is a Palindrome";
    }
    else{
        result.innerHTML = text + " is NOT a Palindrome";
    }
}