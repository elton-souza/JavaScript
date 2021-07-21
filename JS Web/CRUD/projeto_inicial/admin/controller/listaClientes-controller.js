import { clienteService } from "../service/cliente-service.js"

const tabela = document.querySelector('[data-tabela]')

//Cria uma linha adicionando o nome do cliente, email, id e as funcionalidades(botao de editar e deletar)
//query string
function criaNovaLinha(nome,email, id){
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id //adiciona um data attributes
    return linhaNovoCliente
}
// Exclui o cliente ao clicar no botão deletar de acordo com seu ID
tabela.addEventListener('click', async (evento)=>{  
    let botaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(botaoDeletar){
        //tenta executar o codigo, se der algum erro ele redireciona para a pagina de erro
        try{
            const linhaCliente = evento.target.closest('[data-id]')
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
        }
        catch(erro){
            console.log(erro)
            window.location.href = '../telas/erro.html'
        }
    }
})

//Chamando a função que comunica com o servidor e executando uma função a partir dados recebidos
const render = async() =>{
    //tenta executar o codigo, se der algum erro ele redireciona para a pagina de erro
    try{
        const listaClientes = await clienteService.listaClientes()
        console.log(listaClientes)
        listaClientes.forEach(cliente=>{
            tabela.appendChild(criaNovaLinha(cliente.nome,cliente.email, cliente.id))
        })
    }
    catch(erro){
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
}
render()