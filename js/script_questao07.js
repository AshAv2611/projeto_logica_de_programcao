//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    
    let num1 = (form_num.get('num1'))


if (num1 % 3 === 0 && num1 % 7 === 0 ) {
    divResultado.innerHTML = (`O número ${num1} é divísvel por 3 e por 7`)
}else{
    divResultado.innerHTML = (`O número ${num1} não é divísvel por 3 e nem por 7`)
}
})
