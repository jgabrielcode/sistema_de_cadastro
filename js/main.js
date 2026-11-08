const FORM = document.querySelector(".formulario")
const NOME = document.querySelector("#nome");
const SOBRENOME = document.querySelector("#sobrenome");
const EMAIL = document.querySelector("#email");
const CELULAR = document.querySelector("#celular");
const SENHA = document.querySelector("#senha");
const CONF_SENHA = document.querySelector("#confirma")
const BTN_PRIMARY = document.querySelector(".btn-primary")
const MESSAGE = document.querySelector("#msg-error")
const list = document.querySelectorAll(".bars span")

const validarSenhas = (senha,confSenha) => {

        list.forEach((barra) => {
            barra.classList.remove("on");
            barra.classList.add("off");
        });

        let points = 0
        let temNumero = false;
        let temSym = false;
        let temUpper = false;
        let temLower = false;

        const numeros = "1234567890";
        const sym = "[!@#$%&*?]"
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lower = "abcdefghijklmnopqrstuvwxyz"
        // 123@f

        for(caracteres of senha){
        if(numeros.includes(caracteres)){temNumero = true}
        if(sym.includes(caracteres)){temSym = true}
        if(upper.includes(caracteres)){temUpper = true}
        if(lower.includes(caracteres)){temLower = true}

        }

        if(temNumero){points++}
        if(temSym){points++}
        if(temUpper){points++}
        if(temLower){points++}

        //fazer um loop para diminuir a qauntidade de linhaas do list 
    for(let i = 0; i < points; i++){
        
        list[i].classList.add("on")
        list[i].classList.remove("off")
    }

       

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

const validarTelefone = (numero) => {

    const regexTelefone = /^[1-9]{2}9?[0-9]{4}[0-9]{4}$/; 

    const apenasNumeros = numero.replace(/\D/g, "");

    if(!regexTelefone.test(apenasNumeros)){
        MESSAGE.style.color = "#e8351e";
        MESSAGE.innerHTML = " Telefone inválido. Digite DDD + número";
        return false;
    }

    MESSAGE.style.color = "#5be81e";
    MESSAGE.innerHTML = " Tudo certo!"
    return true;
}


CONF_SENHA.addEventListener("input", () => {
     validarSenhas(SENHA.value,CONF_SENHA.value)

})

CELULAR.addEventListener("input", ()=>{
    validarTelefone(CELULAR.value)
})

FORM.addEventListener("submit",(e) =>{

    if(validarSenhas(SENHA.value,CONF_SENHA.value) == false){
        e.preventDefault()
        alert("nao enviado")
    }

    if(validarTelefone(CELULAR.VALUE) == false){
        e.preventDefault()
        alert("nao enviado")
    }

})
