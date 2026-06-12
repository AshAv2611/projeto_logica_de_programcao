//PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario')
const divResultado = document.querySelector('#Resultado')

//CAPTURANDO O EVENTO DE SUBMIT
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const form_num = new FormData(formDados)

    let nomeAluno  = (form_num.get('nome'))
    let nota1 = parseFloat(form_num.get('nota1'))
    let nota2 = parseFloat(form_num.get('nota2'))
    let nota3 = parseFloat(form_num.get('nota3'))

    let media = (nota1 + nota2 + nota3 ) / parseFloat(3)

    if(media >= 6){
        divResultado.innerHTML = (`O aluno(a) ${nomeAluno}, está com média ${media.toFixed(2).replace(".",",")} e se encontra aaprovado(a)`)
     }else{
        divResultado.innerHTML = (`O aluno(a) ${nomeAluno}, está com média ${media.toFixed(2).replace(".",",")} e se encontra aaprovado(a)`)
     }
})