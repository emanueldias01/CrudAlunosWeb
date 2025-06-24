import AlunoController from "../controller/controller.js";
import express from 'express'

const alunosRoutes = express.Router()

alunosRoutes.get('/alunos', AlunoController.getAlunos)
alunosRoutes.post('/alunos', AlunoController.createAluno)
alunosRoutes.put('/alunos', AlunoController.updateAluno)
alunosRoutes.delete('/alunos/:nome', AlunoController.deleteAluno)

export default alunosRoutes