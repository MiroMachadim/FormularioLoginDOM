const botao = document.getElementById("botao");
const answerEmail = document.getElementById("verificacaoEmail");
const answerSenha = document.getElementById("verificacaoSenha");

function handleVerification(){
    erros_email();
    erros_senha();
    return false;
}

function erros_email(){
    let email = document.getElementById("email")?.value;
    answerEmail.innerHTML = " ";
    answerEmail.style.color = "red";

    if (email === ""){
        answerEmail.innerHTML += "<p> Sem Email <p/>";
    }

    if (email.length < 10){
        answerEmail.innerHTML += "<p> Email Pequeno <p/>";
    }

    let regex = /^[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!regex.test(email)){
        answerEmail.innerHTML += "<p> Email Incompleto <p/>";
    }

    if (answerEmail.innerHTML.length > 0) {
        answerEmail.style.display = "block";
    } else{
        answerEmail.style.display = "none";
    }
    console.log(answerEmail.innerHTML);
}

function erros_senha(){
    let senha = document.getElementById("senha")?.value;
    answerSenha.innerHTML = "";
    answerSenha.style.color = "red";

    if (senha === ""){
        answerSenha.innerHTML = "<p> Sem Senha <p/>";
    }

    if (senha.length < 6){
        answerSenha.innerHTML += "<p> Senha Pequena <p/>";
    }

    let temNumero = /[0-9]/.test(senha);
    let temMaiuscula = /[A-Z]/.test(senha);
    let temMinuscula = /[a-z]/.test(senha);

    if (!temNumero){
        answerSenha.innerHTML += "<p> Senha Sem Número <p/>";
    }

    if (!temMaiuscula){
        answerSenha.innerHTML += "<p> Senha Sem Letra Maiúscula <p/>";
    }

    if (!temMinuscula){
        answerSenha.innerHTML += "<p> Senha Sem Letra Minúscula <p/>";
    }

    if (answerSenha.innerHTML.length > 0) {
        answerSenha.style.display = "block";
    } else{
        answerSenha.style.display = "none";
    }
    console.log(answerSenha.innerHTML);
}


