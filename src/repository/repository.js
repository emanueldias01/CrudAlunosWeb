import Aluno from "../model/Aluno.js";

class AlunoRepository{

    static alunosList = [
            new Aluno('Emanuel','Sistemas de Informação', 9),
            new Aluno('Maria', 'Ciência da Computação', 8),
            new Aluno('João', 'Engenharia de Computação', 7)
        ]

    static getAlunos(){
        return AlunoRepository.alunosList
    }

}

export default AlunoRepository