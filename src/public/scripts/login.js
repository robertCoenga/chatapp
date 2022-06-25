function emailValidation(email){
    let mailFormat = '^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
    return email.match(mailFormat)
}

function validarEmail(){
    let email = document.getElementById('emailAddress')
    let validMail = emailValidation(email.value)

    if(validMail){
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
        return
    }
    email.classList.remove('is-valid')
    email.classList.add('is-invalid')
}

function validarSenha(){
    let senha = document.getElementById('password')

    if(senha.value.length >= 8){
        senha.classList.remove('is-invalid')
        senha.classList.add('is-valid')
        return
    }
    senha.classList.remove('is-valid')
    senha.classList.add('is-invalid')
}

function verifyInputs(){
    // TODO: Verificar as entradas e em seguida chamar sendLoginRequest()
}

function sendLoginRequest(){
    // TODO: Pegar os dados do form e enviar para o servidor para logar o usuário
}

function loginGoogle(){
    // TODO: OAuth?
}

function loginFacebook(){
    // TODO: OAuth?
}

function redirectToRegisterPage(){
    window.location.href = "./cadastro.html"
}
