function calcular() {
    let duracao = (document.getElementById("duracao")).value
    let adultos = (document.getElementById("adultos")).value
    let crianca = (document.getElementById("criancas")).value
    let resultado = document.getElementById("resultado")

    let carneTOTAL = (adultos * carne(duracao)) + (crianca * carne(duracao))/2
    let cervejaTOTAL = adultos * cerveja(duracao)
    let refrigeranteTOTAL = (adultos * refrigerante(duracao)) + (crianca * refrigerante(duracao))/2
        
    resultado.innerHTML = `<p>${carneTOTAL}g de carne</p>`
    resultado.innerHTML += `<p>${cervejaTOTAL}ml de cerveja</p>`
    resultado.innerHTML += `<p>${refrigeranteTOTAL} ml de refrigerante</p>`
}     

function carne(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cerveja(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refrigerante(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}


