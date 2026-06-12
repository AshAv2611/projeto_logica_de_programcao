//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    
    let nome = (form_num.get('nome'))
    let altura = (form_num.get('altura'))
    let peso = (form_num.get('peso'))



if (vert1 === vert2 && vert2 === vert3) {
    divResultado.innerHTML = (`Triângulo Equilátero`)
}else if(vert1 === vert2 || vert1 === vert3 || vert2 === vert3) {
    divResultado.innerHTML = (`Triângulo Isósceles`)
}else{
    divResultado.innerHTML = (`Triângulo Escaleno`)
}
})
