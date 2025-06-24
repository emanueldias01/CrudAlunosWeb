import Aluno from "../model/Aluno.js";

class AlunoRepository{

    

    static alunosList = [
            new Aluno('Emanuel', Aluno.CURSO.si, 9),
            new Aluno('Maria', Aluno.CURSO.cc, 8),
            new Aluno('João', Aluno.CURSO.ec, 7)
        ]

    static getAlunos(){
        return AlunoRepository.alunosList
    }

    static createAluno(aluno){
        if(!aluno.nome || aluno.ira === undefined || !aluno.curso) throw new Error('Campos inválidos')
        if(this.alunosList.findIndex(a => a.nome === aluno.nome) !== -1) throw new Error('Já existe um aluno com esse nome')

        const curso = Aluno.CURSO[aluno.curso.toLowerCase()]
        if(curso === undefined) throw new Error('Curso inválido')

        const alunoCreate = new Aluno(aluno.nome, curso, aluno.ira)
        this.alunosList.push(alunoCreate)
    }

    static editar(aluno){
        const alunoFind = this.alunosList.find(a => a.nome === aluno.nome)
        if(!alunoFind) throw new Error('Aluno não encontrado')
        if(aluno.curso && aluno.curso !== "") {
            const curso = Aluno.CURSO[aluno.curso.toLowerCase()]
            if(curso === undefined) throw new Error('Curso inválido')
            alunoFind.curso = curso
        }
        if(aluno.ira !== undefined && aluno.ira !== null) alunoFind.ira = aluno.ira
    }

    static apagar(nome){
        const index = this.alunosList.findIndex(a => a.nome === nome)
        if(index === -1) throw new Error('Aluno não encontrado')
        this.alunosList.splice(index, 1)
    }

}

export default AlunoRepository