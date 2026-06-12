//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    
    let produto = (form_num.get('produto'))
    let valor = parseFloat(form_num.get('valor'))
    

    let imc = peso / parseFloat(altura*altura)



if (imc<20) {
    divResultado.innerHTML = (`${nome} está com imc de: ${imc.toFixed(2).replace(".",",")} e encontra-se abaixo do peso`)
}else if(imc>=20 && imc < 25) {
    divResultado.innerHTML = (`${nome} está com imc de: ${imc.toFixed(2).replace(".",",")} e seu peso é normal`)
}else if(imc>=20 && imc < 30) {
    divResultado.innerHTML = (`${nome} está com imc de: ${imc.toFixed(2).replace(".",",")} e está com excesso de peso`)
}else if(imc>=30 && imc < 35) {
    divResultado.innerHTML = (`${nome} está com imc de: ${imc.toFixed(2).replace(".",",")} e encontra-se com obesidade`)
}else{
    divResultado.innerHTML = (`${nome} está com imc de: ${imc.toFixed(2).replace(".",",")} e encontra-se obesidade mórbida`)
}
})
