console.log('------REGEX------')

const alvo = '11a22b33c'
const exp1 = new RegExp('(\\d\\d)(\\w)','g') //Expressão regular que retorna um item com dois digitos e um caractere
var result = null
var matchs = []
while(result = exp1.exec(alvo)){
    matchs.push(result[0]) //Retorna todos os matchs de acordo com a expressão regular
}
console.log(alvo)
console.log(matchs)

console.log('----------------------------')

var anoMesDia = '2002-04-21'
var exp2 = /-/g // se não tiver a expressão global, ele irá trocar apenas a primeira que for encontrado
console.log(anoMesDia)
anoMesDia = anoMesDia.replace(exp2, '/') //Trocar (-) para (/) 
console.log(anoMesDia)

console.log('----------------------------')

var arquivo = '100-200-150-200;20'
var exp3 = /[,;-]/ //se tiver (,| ; | -) será separado;
console.log(arquivo)
console.log(arquivo.split(exp3)) //Extrai um array com cada item separado por virgula de acordo com a expressão regular

console.log('----------------------------')

var codigos = 'A121B12112C12212F12G01'
var exp4 = /[A-Za-z]\d+/g //Uma expressão regular que cada item tenha uma letra seguido de um ou mais numeros
console.log(codigos)
console.log(codigos.match(exp4)) //Extrai um array com cada match de acordo com a expressão regular

console.log('----------------------------')