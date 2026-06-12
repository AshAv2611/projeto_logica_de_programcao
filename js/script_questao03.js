//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let distanciaKm = (form_num.get('distanciaKm'))
    let consumoMedio = (form_num.get('consumoMedio'))
    let precoLitro = (form_num.get('precoLitro'))


    let QtdComb = (distanciaKm  / consumoMedio ) 
    let valor = QtdComb * precoLitro

    divResultado.innerHTML = `A quantidade de combustível necessário para percorrer trajeto: ${QtdComb} 
                            O valor total a pagar de combustível: ${valor.toFixed(2).replace(".",",")}`

})