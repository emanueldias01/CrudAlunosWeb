import AlunoService from "../service/service.js";

class AlunoController{
    static getAlunos(req, res){
        res.status(200).json(AlunoService.getAlunos())
    }

    static createAluno(req, res){
        try{
            const alunoBody = req.body
            const response = AlunoService.createAluno(alunoBody)
            res.status(201).json(response)
        }catch(erro){
            res.status(400).json({
                mensagem : erro.Error()
            })
        }
    }

    static updateAluno(req, res){
        try{
            const alunoBody = req.body
            const response = AlunoService.updateAluno(alunoBody)
            res.status(200).json(response)
        }catch(erro){
            res.status(400).json({
                mensagem : erro.Error()
            })
        }
    }

    static deleteAluno(req, res){
        try{
            const nomeAluno = req.params.nome
            AlunoService.deleteAluno(nomeAluno)

        }catch(erro){
            res.status(404).json({ 
                mensagem : erro.Error()
            })
        }
    }
}

export default AlunoController