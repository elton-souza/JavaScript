import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento)=>{
    console.log(evento.target)
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value

    //Recebe os dados do formulario e executa a função que adiciona um cliente
    clienteService.criaCliente(nome,email)
    .then(()=>{
        // redireciona para uma nova página
        window.location.href= '../telas/cadastro_concluido.html'
    })
})