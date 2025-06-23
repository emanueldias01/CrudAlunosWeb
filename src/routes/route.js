import AlunoController from "../controller/controller.js";
import express from 'express'

const alunosRoutes = express.Router()

alunosRoutes.get('/alunos', AlunoController.getAlunos)

export default alunosRoutes