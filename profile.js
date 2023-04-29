(function () {
    if (!localStorage.getItem("token")) {
        window.location.href = "./index.html"
    }

    let user = JSON.parse(localStorage.getItem("currentUser"));
    document.getElementById("user_name").innerText = user.name;
    document.getElementById("user_email").innerText = user.email;
    document.getElementById("user_password").innerText = user.pass;
})()

function logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    window.location.href = "./index.html"
}
document.getElementById("logout-btn").addEventListener("click", logout);