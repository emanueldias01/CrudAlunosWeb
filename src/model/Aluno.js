class Aluno{

    static CURSO = {
        si : "Sistemas de Informação",
        cc : "Ciência da Computação",
        ec : "Engenharia de Computação",
        es : "Engenharia de Software",
        rc : "Redes de Computadores",
        dd : "Desing Digital"
    }
    
    constructor(nome, curso, ira){
        this.nome = nome
        this.curso = curso
        this.ira = ira
    }
}

export default Aluno