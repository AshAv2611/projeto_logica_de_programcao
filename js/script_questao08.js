//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    
    let acesso = (form_num.get('acesso'))
    let senha = (form_num.get('senha'))
    const acessoCorreto = 'ABCD1234';
    const senhaCorreta = '1234';


if (acesso === acessoCorreto || senha === senhaCorreta ) {
    divResultado.innerHTML = (`ACESSO PERMITIDO`)
}else{
    divResultado.innerHTML = (`ACESSO NEGADO`)
}
})
