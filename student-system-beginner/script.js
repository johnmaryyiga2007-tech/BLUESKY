
function registerUser() {

    let fullName = document.getElementById("fullName").value;
    let regNumber = document.getElementById("regNumber").value;
    let email = document.getElementById("email").value;
    let gender = document.getElementById("gender").value;
    let year = document.getElementById("year").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    let messageBox = document.getElementById("messageBox");


    messageBox.classList.remove("hidden");

    
    if (fullName == "" || regNumber == "" || email == "" || gender == "" || year == "" || course == "" || password == "" || confirmPassword == "") {
        messageBox.innerHTML = "Error: All fields are mandatory.";
        messageBox.className = "message-box error";
        return false;
    }


    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        messageBox.innerHTML = "Error: Please enter a valid email format.";
        messageBox.className = "message-box error";
        return false;
    }

    
    if (password.length < 6) {
        messageBox.innerHTML = "Error: Password must be at least 6 characters long.";
        messageBox.className = "message-box error";
        return false;
    }


    if (password != confirmPassword) {
        messageBox.innerHTML = "Error: Passwords do not match.";
        messageBox.className = "message-box error";
        return false;
    }


    messageBox.innerHTML = "Registration Successful!";
    messageBox.className = "message-box success";
    
    return false; 
}


function loginUser() {
    let identifier = document.getElementById("loginIdentifier").value;
    let password = document.getElementById("loginPassword").value;
    let messageBox = document.getElementById("messageBox");

    messageBox.classList.remove("hidden");


    if (identifier == "" || password == "") {
        messageBox.innerHTML = "Error: Please fill out all login fields.";
        messageBox.className = "message-box error";
        return false;
    }

    
    if (identifier == "admin" && password == "1234") {
        messageBox.innerHTML = "Login successful! Entering portal...";
        messageBox.className = "message-box success";
    } else {
        messageBox.innerHTML = "Error: Invalid username/email or password.";
        messageBox.className = "message-box error";
    }

    return false;
}

function togglePassword(inputId) {
    let passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
