const BotaoDeleta = (atualiza, id) =>{
    const botaDeleta = document.createElement('button')
    botaDeleta.classList.add('delete-button')
    botaDeleta.innerText = 'deletar'

    botaDeleta.addEventListener('click', ()=>deletarTarefa(atualiza,id))

    return botaDeleta
}

const deletarTarefa = (atualiza, id) =>{
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(index, 1)

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
}
export default BotaoDeleta