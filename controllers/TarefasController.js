const jwt = require('jsonwebtoken');

const TarefasController = {
    index: (req,res) => {
        res.send(req.headers)

        //Verificar se existe um campo Authorization nos headers

        //capturar o token

        //Levantar qual o usuário é o dono do token
        
        //Levantar as tarefas desse usuário

        //Mandar as tarefas com req.status(200).json(tarefas)
    }}

    module.exports = TarefasController