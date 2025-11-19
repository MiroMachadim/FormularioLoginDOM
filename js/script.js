const botao = document.getElementById("botao");
const answerEmail = document.getElementById("verificacaoEmail");
const answerSenha = document.getElementById("verificacaoSenha");

function limpar_validacoes(){
    answerEmail.innerHTML = "";
    answerSenha.innerHTML = "";
}

function erros_email(){
    let email = document.getElementById("email")?.value;
    answerEmail.innerHTML = " ";
    answerEmail.style.color = "red";

    if (email === ""){
        answerEmail.innerHTML += '<p> Informe um E-mail <p/>';
    } else {
        if (email.length < 10){
            answerEmail.innerHTML += '<p> Email deve conter 10+ caracteres <p/>';
        } else {
            answerEmail.innerHTML += '<p style="color: green;"> Email deve conter 10+ caracteres <p/>';
        }
    
        let regex = /^[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    
        if (!regex.test(email)){
            answerEmail.innerHTML += '<p> Email inválido/incompleto <p/>';
        }
    }


    if (answerEmail.innerHTML.length > 0) {
        answerEmail.style.display = "block";
    } else{
        answerEmail.style.display = "none";
    }
}

function erros_senha(){
    let senha = document.getElementById("senha")?.value;
    answerSenha.innerHTML = "";
    answerSenha.style.color = "red";

    if (senha === ""){
        answerSenha.innerHTML = '<p> Informe uma senha <p/>';
        return;
    }

    if (senha.length < 6){
        answerSenha.innerHTML += '<p> Senha deve conter 6+ caracteres <p/>';
    } else {
        answerSenha.innerHTML += '<p style="color: green;"> Senha deve conter 6+ caracteres <p/>';
    }

    let temNumero = /[0-9]/.test(senha);
    let temMaiuscula = /[A-Z]/.test(senha);
    let temMinuscula = /[a-z]/.test(senha);

    if (!temNumero){
        answerSenha.innerHTML += '<p> Senha deve conter número (1, 2 ...) <p/>';
    } else {
        answerSenha.innerHTML += '<p style="color: green;"> Senha deve conter número (1, 2 ...) <p/>';
    }

    if (!temMaiuscula){
        answerSenha.innerHTML += '<p> Senha deve conter letra maiúscula <p/>';
    } else {
        answerSenha.innerHTML += '<p style="color: green;"> Senha deve conter letra maiúscula <p/>';
    }

    if (!temMinuscula){
        answerSenha.innerHTML += '<p> Senha deve conter letra minúscula <p/>';
    } else {
        answerSenha.innerHTML += '<p style="color: green;"> Senha deve conter letra minúscula <p/>';
    }

    if (answerSenha.innerHTML.length > 0) {
        answerSenha.style.display = "block";
    } else{
        answerSenha.style.display = "none";
    }
}


