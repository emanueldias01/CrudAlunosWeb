import AlunoService from "../service/service.js";

class AlunoController{
    static getAlunos(req, res){
        res.status(200).json(AlunoService.getAlunos())
    }
}

export default AlunoController