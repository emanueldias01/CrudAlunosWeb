import AlunoRepository from "../repository/repository.js";

class AlunoService{
    static getAlunos(){
        return AlunoRepository.getAlunos()
    }
}

export default AlunoService