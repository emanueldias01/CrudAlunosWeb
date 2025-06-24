import AlunoRepository from "../repository/repository.js";

class AlunoService{
    static getAlunos(){
        return AlunoRepository.getAlunos()
    }

    static createAluno(aluno){
        try{
            AlunoRepository.createAluno(aluno)
            return aluno
        }catch(erro){
            throw new Error(erro.Error())
        }
    }

    static updateAluno(aluno){
        try{
            AlunoRepository.editar(aluno)
            return aluno
        }catch(erro){
            throw new Error(erro.Error())
        }
    }

    static deleteAluno(alunoNome){
        try{
            AlunoRepository.apagar(alunoNome)
        }catch(erro){
            throw new Error(erro.Error())
        }
    }
}

export default AlunoService