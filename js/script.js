const botao = document.getElementById("botao");
const answerEmail = document.getElementById("verificacaoEmail");
const answerSenha = document.getElementById("verificacaoSenha");
let validacao = [false, false];

function limpar_validacoes(){
    answerEmail.innerHTML = "";
    answerSenha.innerHTML = "";
}

function validarInput() {
    if (validacao[0] && validacao[1]) {
        alert("Sucesso!")
        validacao = [false, false];
    }
}

function erros_email(){
    let email = document.getElementById("email")?.value;
    answerEmail.innerHTML = "";
    answerEmail.style.color = "red";
    let counter = 0;
    validacao[0] = false;
    
    if (email === ""){
        answerEmail.innerHTML = '<p> Informe um E-mail';
    } else {
        let innerHTML = "<ol>"
        
        if (email.length < 10){
            innerHTML += '<li> Email deve conter 10+ caracteres';
        } else {
            innerHTML += '<li style="color: green;"> Email deve conter 10+ caracteres';
            counter++;
        }

        if (!email.includes("@") || !email.includes(".")) {
            innerHTML += '<li> Email deve conter @ e .';
        } else {
            innerHTML += '<li style="color: green;"> Email deve conter @ e .';
            counter++;
        }
    
        let regex = /^[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    
        if (!regex.test(email)){
            innerHTML += '<li> Email inválido/incompleto';
        } else {
            innerHTML += '<li style="color: green;"> Email inválido/incompleto';
            counter++;
        }
        answerEmail.innerHTML = innerHTML;
        console.log(counter)
        console.log(email)
    }

    if (counter === 3) {
        validacao[0] = true;
    }
}

function erros_senha(){
    let senha = document.getElementById("senha")?.value;
    answerSenha.innerHTML = "";
    answerSenha.style.color = "red";
    let counter = 0;
    validacao[1] = false;
    
    if (senha === ""){
        answerSenha.innerHTML = '<p> Informe uma senha';
    } else {
        let innerHTML = "<ol>"
        
        if (senha.length < 6){
            innerHTML += '<li> Senha deve conter 6+ caracteres ';
        } else {
            innerHTML += '<li style="color: green;"> Senha deve conter 6+ caracteres';
            counter++;
        }
    
        let temNumero = /[0-9]/.test(senha);
        let temMaiuscula = /[A-Z]/.test(senha);
        let temMinuscula = /[a-z]/.test(senha);
    
        if (!temNumero){
            innerHTML += '<li> Senha deve conter número (1, 2 ...)';
        } else {
            innerHTML += '<li style="color: green;"> Senha deve conter número (1, 2 ...) ';
            counter++;
        }
    
        if (!temMaiuscula){
            innerHTML += '<li> Senha deve conter letra maiúscula';
        } else {
            innerHTML += '<li style="color: green;"> Senha deve conter letra maiúscula';
            counter++;
        }
    
        if (!temMinuscula){
            innerHTML += '<li> Senha deve conter letra minúscula';
        } else {
            innerHTML += '<li style="color: green;"> Senha deve conter letra minúscula ';
            counter++;
        }
        answerSenha.innerHTML = innerHTML;
    }

    if (counter === 4) {
        validacao[1] = true;
    } 
}


