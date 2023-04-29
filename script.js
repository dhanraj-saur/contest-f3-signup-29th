document.getElementById("error").style.display = "none"
document.getElementById("success").style.display = "none"

function signUp() {
    var nameValue = document.getElementById("input-fname").value;
    var emailValue = document.getElementById("input-email").value;
    var passwordValue = document.getElementById("input-password").value;
    var confirmPasswordValue = document.getElementById(
        "input-confirm-password"
    ).value
    var userData = localStorage.getItem('users');
    userData = JSON.parse(userData);

    if (userData) {
        let isExist = userData.some((item) => {

            return (item.email == emailValue)

        })

        if (isExist) {
            document.getElementById("error").style.display = "block"
            // alert("pls enter the email")
            return
        }
    }
    
    if (passwordValue == confirmPasswordValue) {

        var userObj = {
            name: nameValue,
            email: emailValue,
            pass: passwordValue,
            singupDate: new Date(),
        }

        localStorage.setItem("currentUser", JSON.stringify(userObj))
        var users = [];
        if (localStorage.getItem("users")) {
            
            users = JSON.parse(localStorage.getItem("users"));

        }
        else {   
            users = [];
        }
        users.push(userObj);
        localStorage.setItem("users", JSON.stringify(users));
        genrateToken()
        window.location.href = "./profile.html";
    }

}
document.getElementById("btn").addEventListener("click", signUp);



function genrateToken() {
    let token_str = "abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
    let len = 16;
    let token = "";
    let n = token_str.length;
    for (i = 0; i < len; i++) {
        token += token_str.charAt(Math.floor(Math.random() * n));
    }
    localStorage.setItem('token', token);
}