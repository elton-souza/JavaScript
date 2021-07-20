// realiza a comunicação com o servidor e retorna a lista de cliente cadastrados
const listaClientes = () =>{
    return fetch('http://localhost:3000/profile') // faz um get e devolve uma promise
    .then(resposta =>{ // trabalhando com a resposta
        return resposta.json() // transforma a resposta de texto em um objeto javascript válido
        
    }) 
}
// realiza a comunicação com o servidor e adiciona um novo cliente
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
        return resposta.body
    })
}
// Realiza a comunicação com o servidor e logo em seguida delete o cliente pelo ID
const removeCliente = (id) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

// objeto que contem todos os serviços
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
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