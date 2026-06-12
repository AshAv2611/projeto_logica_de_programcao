//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    
    let vert1 = parseFloat(form_num.get('vert1'))
    let vert2 = parseFloat(form_num.get('vert2'))
    let vert3 = parseFloat(form_num.get('vert3'))



if (vert1 === vert2 && vert2 === vert3) {
    divResultado.innerHTML = `Triângulo Equilátero`;

} else if (vert1 === vert2 || vert1 === vert3 || vert2 === vert3) {
    divResultado.innerHTML = `Triângulo Isósceles`;
    
} else {
    divResultado.innerHTML = `Triângulo Escaleno`;
}