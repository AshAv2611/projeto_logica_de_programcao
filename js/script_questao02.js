//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let num1 = (form_num.get('num1'))
    let num2 = (form_num.get('num2'))


    let area = (num1 * num2 ) 
    let litros = area / 2

    divResultado.innerHTML = `A área pintada da parede será de ${area} metros e serão necessários ${litros} litros`

})