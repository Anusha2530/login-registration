// Registration Validation

document.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){

        document.getElementById("message")
        .innerHTML = "Passwords do not match";

        document.getElementById("message")
        .style.color = "red";
    }

    else{

        document.getElementById("message")
        .innerHTML = "Registration Successful";

        document.getElementById("message")
        .style.color = "green";
    }

});


// Show/Hide Register Password

function togglePassword(){

    let pass =
    document.getElementById("password");

    if(pass.type === "password"){
        pass.type = "text";
    }

    else{
        pass.type = "password";
    }

}


// Show/Hide Login Password

function toggleLoginPassword(){

    let pass =
    document.getElementById("loginPassword");

    if(pass.type === "password"){
        pass.type = "text";
    }

    else{
        pass.type = "password";
    }

}


// AJAX Username Check

document.getElementById("username")
.addEventListener("keyup", function(){

    let username = this.value;

    fetch("check.php?username=" + username)

    .then(response => response.text())

    .then(data => {

        document.getElementById("message")
        .innerHTML = data;

        document.getElementById("message")
        .style.color = "blue";

    });

});