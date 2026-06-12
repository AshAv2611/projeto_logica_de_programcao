//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)


    let produto = (form_num.get('produto'))
    let valor = (form_num.get('valor'))


    if (valor < 10) {
        novoValor = valor * 1.7;
        
    } else if (valor >= 10 && valor < 30) {
        novoValor = valor * 1.5;
        
    } else if (valor >= 30 && valor < 50) {
        novoValor = valor * 1.4;
        
    } else {
        novoValor = valor * 1.3;
    }
    
    divResultado.innerHTML = (`O ${produto} terá o valor de venda de R$ ${novoValor.toFixed(2).replace(".", ",")}`)
})

