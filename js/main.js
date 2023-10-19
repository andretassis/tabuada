const btn = document.getElementById('btn')

function calcular() {
    const number = document.getElementById('number').value
    const end = document.getElementById('end').value
    const resposta = document.getElementById('resposta')
    let res = ''
    let x = 0

    resposta.innerHTML = `A tabuada de ${number} é:<br>`

    do {
        res = x * number
        resposta.innerHTML += `${number} x ${x} = ${res} <br>`
        x++
    } while (x <= end)
}

btn.addEventListener('click', calcular)