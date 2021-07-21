import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento)=>{
    console.log(evento.target)
    evento.preventDefault()
    //Recebe os dados do formulario e executa a função que adiciona um cliente
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    //tenta executar o codigo, se der algum erro ele redireciona para a pagina de erro
    try{
        await clienteService.criaCliente(nome,email)
        // redireciona para uma nova página
        window.location.href= '../telas/cadastro_concluido.html'
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
})