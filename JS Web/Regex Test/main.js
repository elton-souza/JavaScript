function getData(evento){
    evento.preventDefault()
    const text = document.querySelector('[data-text]').value
    const rgx = document.querySelector('[data-rgx]').value
    regex(text,rgx)
}

function regex(txt,rgx){
    var match = null
    const exp = new RegExp(rgx,'g')
    const alvo = txt
    const conjunto = []
    while(match = exp.exec(alvo)){
        conjunto.push(match[0])
    }
    console.log(`${txt} || ${conjunto}`)
}
