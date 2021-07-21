import { clienteService } from "../service/cliente-service.js"

const getUrl = new URL(window.location) //captura a URL que está sendo acessada no momento e salva na variavel
const id = getUrl.searchParams.get('id') //acessa a URL e captura o paramento chamado id e salva o seu valor

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

//função que exibe os dados do cliente no formulário para a edição
clienteService.detalhaCliente(id)
.then(dados =>{
    console.log(dados)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})
//função que edita os dados do cliente
const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    clienteService.atualizaCliente(id,inputNome.value,inputEmail.value)
    .then(()=>{
        window.location.href = '../telas/edicao_concluida.html'
    })
})