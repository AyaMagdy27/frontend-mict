function calc() {
    let i = document.getElementById('num1').value;
    if (!isNaN(i) && i !== "") {
        let result = 0.025 * i;
        document.getElementById('result').innerHTML = "Your Zaka is : " + result + " EGP";
    } else {
        document.getElementById('result').innerHTML = "Please enter a valid number";
    }
};

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "ayamagdy2025@gmail.com" && password === "123456") {
        document.getElementById("login-result").innerHTML = ("Welcome");
    } else {
        document.getElementById("login-result").innerHTML = ("Invalid username or password");
    }
}

function grades() {
    if (document.getElementById('grade').value >= 90) {
        document.getElementById('grade-result').innerHTML = "Exsellent";
    }
    else if (document.getElementById('grade').value >= 80) {
        document.getElementById('grade-result').innerHTML = "Very Good";
    }
    else if (document.getElementById('grade').value >= 70) {
        document.getElementById('grade-result').innerHTML = "Good";
    }
    else if (document.getElementById('grade').value >= 60) {
        document.getElementById('grade-result').innerHTML = "Pass";
    }
    else if (document.getElementById('grade').value < 60 && document.getElementById('grade').value !== "") {
        document.getElementById('grade-result').innerHTML = "Fail";
    }
    else {
        document.getElementById('grade-result').innerHTML = "Please enter a valid number";
    }
}
function discount() {
    let price = parseFloat(document.getElementById('price').value);
    let quantity = parseFloat(document.getElementById('quantity').value);
    let discountPercent = parseFloat(document.getElementById('discount').value);
    
    let total = price * quantity;
    
    let discountAmount = total * (discountPercent / 100);
    
    let result = total - discountAmount;
    
    document.getElementById('discount-net').innerHTML = "Your total price is: " + total.toFixed(2) + " EGP";
    document.getElementById('discount-discount').innerHTML = "Your discount is: " + discountAmount.toFixed(2) + " EGP";
    document.getElementById('discount-result').innerHTML = "Your price after discount is: " + result.toFixed(2) + " EGP";
}