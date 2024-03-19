class livro{
    constructor(pNome){
        this.Nome = pNome;
    }
    get Nome(){return this.Nome;}
    set Nome(pNome){this.nome = pNome}
}


var obj_livro1 = new livro("use a cabeça java");
console.log("Nome do livro: " + obj_livro1.nome);