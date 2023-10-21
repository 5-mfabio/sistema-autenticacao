function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    
    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login bem-sucedido!");
    } else {
        alert("Login falhou. Por favor, verifique seu nome de usuário e senha.");
    }
}

function register() {
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;

    if (username && password) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registro bem-sucedido! Agora você pode fazer login.");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}