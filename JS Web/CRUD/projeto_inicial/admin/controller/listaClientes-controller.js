import { clienteService } from "../service/cliente-service.js"

const tabela = document.querySelector('[data-tabela]')

//Cria uma linha adicionando o nome do cliente, email, id e as funcionalidades(botao de editar e deletar)
function criaNovaLinha(nome,email, id){
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    linhaNovoCliente.dataset.id = id
    return linhaNovoCliente
}
// Exclui o cliente ao clicar no botão deletar de acordo com seu ID
tabela.addEventListener('click', (evento)=>{  
    let botaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir'
    if(botaoDeletar){
        const linhaCliente = evento.target.closest('[data-id]')
        let id = linhaCliente.dataset.id
        clienteService.removeCliente(id)
        .then(()=>{
            linhaCliente.remove()
        })
    }

})

//Chamando a função que comunica com o servidor e executando uma função a partir dados recebidos
clienteService.listaClientes()
.then(data => { //referencia a listaClientes()
    data.forEach(cliente=>{
        tabela.appendChild(criaNovaLinha(cliente.nome,cliente.email, cliente.id))
    })
})
