const email = document.getElementById("loginEmail")
const password = document.getElementById("loginPassword")
const buttonLogin = document.getElementById("loginButton")

buttonLogin.addEventListener('click', login, false)

function login(event) {
    let loginEmail = email.value
    let loginPassword = password.value

    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword).then(response => {
        console.log('sucess', response)
        window.location.href = "../admin/dashbord.html"
    }).catch(error => {
        console.log('error', error)
        alert(`Erro ao logar!! Email ou Senha inválido`)
    })
}