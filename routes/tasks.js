const express = require('express')
const router = express.Router()
let tasks = []
router.get("/",(req,res)=>{
    res.send(
        `  <h1>Lista de Tarefas</h1> 
<ul> ${tasks.map((task,index) => `<li>${task} <a href="/${index}/delete">[Excluir]</a></li>`).join('')} </ul> 
<a href="/add">Adicionar nova tarefa</a>`
    )
})
router.get('/add', (req,res)=>{
    res.send(
        `<h1>Adicionar Tarefa</h1>
         <form action="/add" method="POST">
            <input type="text" name="task" placeholder="Nova tarefa" required>
            <button type="submit">Adicionar</button>
         </form>
         <a href="/">Voltar para a lista</a>
    `
        )
})
router.post('/add',(req,res)=>{
    let tarefa = req.body.task
    tasks.push(tarefa)
    res.redirect('/')


})
router.get('/:id/delet', (req,res)=>{
    let idTarefa = req.params.id
    tasks.splice(idTarefa,1)
    res.redirect('/')
})

module.exports = router