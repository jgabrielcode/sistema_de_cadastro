const FORM = document.querySelector(".formulario")
const NOME = document.querySelector("#nome");
const SOBRENOME = document.querySelector("#sobrenome");
const EMAIL = document.querySelector("#email");
const CELULAR = document.querySelector("#celular");
const SENHA = document.querySelector("#senha");
const CONF_SENHA = document.querySelector("#confirma")
const BTN_PRIMARY = document.querySelector(".btn-primary")
const MESSAGE = document.querySelector("#msg-error")

const validarSenhas = (senha,confSenha) => {

    if(senha.length < 8){
        MESSAGE.style.color = "#e8351e";
        MESSAGE.innerHTML = " Senha deve ter no minimo 8 caracteres"
        return false
    }

    if (senha !== confSenha){
        MESSAGE.style.color = "#e8351e";
        MESSAGE.innerHTML = " Dados inválidos. As senhas precisam ser iguais"
        return false
    }

        MESSAGE.style.color = "#5be81e";
        MESSAGE.innerHTML = " Tudo certo!"
        return true
    
}

CONF_SENHA.addEventListener("input", () => {
     validarSenhas(SENHA.value,CONF_SENHA.value)

})

FORM.addEventListener("submit",(e) =>{

    if(validarSenhas(SENHA.value,CONF_SENHA.value) == false){
        e.preventDefault()
        alert("nao enviado")
    }

})
