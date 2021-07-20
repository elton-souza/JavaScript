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

const listaClientes = () =>{
    return fetch('http://localhost:3000/profile') // faz um get e devolve uma promise
    .then(answer =>{ // trabalhando com a resposta
        const resposta = answer.json() // transforma a resposta de texto em um objeto javascript válido
        console.log(resposta)
        return resposta 
    })

    // const promise = new Promise((resolve,reject)=>{
    //     const http = new XMLHttpRequest() // Objeto que fornece métodos para a comunicação

    //     http.open('GET','http://localhost:3000/profile') // método que abre a comunicação entre a aplicação e a API -> ('o que pedir para o servidor','endereço')

    //     http.onload = () => { // executa ao recarregar a página
    //         if(http.dtatus >= 400){ // verifica se está tudo ok com a chamada, se estiver algum erro cliente/servidor (ex:400) ele rejeita a resposta
    //             reject(JSON.parse(http.response))
    //         }else{ // se nao ele aceita
    //             resolve(JSON.parse(http.response))
    //         }
    //     }

    //     http.send() // Envia a requisição para o servidor
    // })
    // return promise 
}

listaClientes()
.then(data => { //referencia a listaClientes()
    data.forEach(cliente=>{
        tabela.appendChild(criaNovaLinha(cliente.nome,cliente.email))
    })
})