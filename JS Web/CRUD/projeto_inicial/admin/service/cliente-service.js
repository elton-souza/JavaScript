// realiza a comunicação com o servidor e retorna a lista de cliente cadastrados
const listaClientes = () =>{
    return fetch('http://localhost:3000/profile') // faz um get(padrao) e devolve uma promise
    .then(resposta =>{ // trabalhando com a resposta
        if(resposta.ok){
            return resposta.json() // transforma a resposta de texto em um objeto javascript válido
        }
        throw new Error('Não foi possível listar os clientes')
    }) 
}
// realiza a comunicação com o servidor e adiciona um novo cliente através do verbo HTTP 'POST'
const criaCliente = (cliente, cliente_email) =>{
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: cliente,
            email: cliente_email
        })
    
    })
    .then(resposta=>{
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um novo cliente')
    })
}
// Realiza a comunicação com o servidor e logo em seguida deletea o cliente pelo ID atraves do verbo HTTP 'DELETE'
const removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta =>{
        if(!resposta.ok){ // Se a requisição não der certo, ele não remove o cliente..
            throw new Error('Não foi possível deletar o cliente')
        }
    })
}
//Realiza a comunicação com o servidor e retorna os dados do cliente de acordo com o ID 
const detalhaCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json() 
        }
        throw new Error('Não foi possível detalhar o cliente')
    }) 
}
//Realiza a comunicação com o servidor e retorna os dados do cliente de acordo com o ID e possibilita a edição dos dados do cliente através do verbo HTTP 'PUT'
const atualizaCliente = (id,nome,email) =>{
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            nome:nome,
            email:email
        })
    })
    .then(respota =>{
        if(respota.ok){
            return respota.json()
        }
        throw new Error('Não foi possível editar os dados do cliente')
    })
}
// objeto que contem todos os serviços
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}

//================================================
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