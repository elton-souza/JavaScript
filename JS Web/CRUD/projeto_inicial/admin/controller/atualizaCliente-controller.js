import { clienteService } from "../service/cliente-service.js"
(async ()=>{
    const getUrl = new URL(window.location) //captura a URL que está sendo acessada no momento e salva na variavel
    const id = getUrl.searchParams.get('id') //acessa a URL e captura o paramento chamado id e salva o seu valor
    
    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')
    try{
        //para e aguarda o retorno da promise e depois executa os proximos codigos
        const dados = await clienteService.detalhaCliente(id)
        console.log(dados)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
    //função que edita os dados do cliente
    const formulario = document.querySelector('[data-form]')
    formulario.addEventListener('submit', async(evento)=>{
        evento.preventDefault()
        
        await clienteService.atualizaCliente(id,inputNome.value,inputEmail.value)
        window.location.href = '../telas/edicao_concluida.html'
    })
})()