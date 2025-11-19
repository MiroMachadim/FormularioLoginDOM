let botao = document.getElementById("botao");

function validacoes(){
    erros_senha()
    erros_email()
}

function erros_email(){
    let email = document.getElementById("email")?.value;

    if (email === ""){
    document.getElementById("erro_sem_email").style.display = "block";
    }
    else{
    document.getElementById("erro_sem_email").style.display = "none";
    }

    if (email.length < 10){
    document.getElementById("erro_email_pequeno").style.display = "block";
    }
    else{
    document.getElementById("erro_email_pequeno").style.display = "none";
    }

    let regex = /^[a-z0-9]+[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!regex.test(email)){
    document.getElementById("erro_email_incompleto").style.display = "block";
    }
    else{
    document.getElementById("erro_email_incompleto").style.display = "none";
    }

    if (email !== "" && email.length >= 10 && regex.test(email)){
        document.getElementById("email_correto").style.display = "block"
    }
}

function erros_senha(){
    let senha = document.getElementById("senha")?.value;

    if (senha === ""){
    document.getElementById("erro_sem_senha").style.display = "block";
    }
    else{
    document.getElementById("erro_sem_senha").style.display = "none";
    }

    if (senha.length < 6){
    document.getElementById("erro_senha_pequena").style.display = "block";
    }
    else{
    document.getElementById("erro_senha_pequena").style.display = "none";
    }

    let temNumero = /[0-9]/.test(senha);
    let temMaiuscula = /[A-Z]/.test(senha);
    let temMinuscula = /[a-z]/.test(senha);

    if (!temNumero){
    document.getElementById("erro_senha_sem_numero").style.display = "block";
    }
    else{
    document.getElementById("erro_senha_sem_numero").style.display = "none";
    }

    if (!temMaiuscula){
    document.getElementById("erro_senha_sem_Lmaiuscula").style.display = "block";
    }
    else{
    document.getElementById("erro_senha_sem_Lmaiuscula").style.display = "none";
    }

    if (!temMinuscula){
    document.getElementById("erro_senha_sem_Lminuscula").style.display = "block";
    }
    else{
    document.getElementById("erro_senha_sem_Lminuscula").style.display = "none";
    }

    if (senha !== "" && senha.length >= 6 && temNumero && temMaiuscula && temMinuscula){
        document.getElementById("senha_correta").style.display = "block";
    }
}


