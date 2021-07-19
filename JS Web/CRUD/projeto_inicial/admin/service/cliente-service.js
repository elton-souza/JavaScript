const tabela = document.querySelector('[data-tabela]')

function criaNovaLinha(nome,email){
    const linhaNovoCliente = document.createElement('tr')
    const conteudo = `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`
    linhaNovoCliente.innerHTML = conteudo
    return linhaNovoCliente
}

const http = new XMLHttpRequest() // Objeto que fornece métodos para a comunicação

http.open('GET','http://localhost:3000/profile') // método que abre a comunicação entre a aplicação e a API -> ('o que pedir para o servidor','endereço')

http.send() // Envia a requisição para o servidor

http.onload = () => { // executa ao recarregar a página
    const data = JSON.parse(http.response) // dados recebidos pelo servidor(resposta em texto)
    data.forEach(cliente=>{
        tabela.appendChild(criaNovaLinha(cliente.nome,cliente.email))
    })
}