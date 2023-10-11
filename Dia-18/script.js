//CRIANDO CLASSE LIVRO
class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, AnoDePublicacao) {
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.AnoDePublicacao = AnoDePublicacao
    }
}

//CRIANDO OBJETOS DA CLASSE LIVRO
let livros = []
livros.push(new Livro("Livro1", "Marcos", "Editora A", 2001))
livros.push(new Livro("Livro2", "Marcos", "Editora F", 1997))
livros.push(new Livro("Livro3", "Carlos", "Editora F", 2010))
livros.push(new Livro("Livro4", "João", "Editora A", 2005))
livros.push(new Livro("Livro5", "Fábio", "Editora C", 2020))

//CRIANDO CLASSE BIBLIOTECA 
class bibilioteca {
    Nome
    Endereco
    Telefone
    AcervoLivros = []
    constructor(nome, telefone, endereco, acervo) {
        this.Nomeome = this.nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo) {
        this.AcervoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.AcervoLivros.forEach(livro => {
            if (livro.titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else false
    }

    DevolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro Devolvido")
            }
        })
    }


}

let bibilioteca = new bibilioteca("Biblioteca Dodev", "123456", "Rua2")

bibilioteca.BuscarLivroPeloTitulo("Livro2")
bibilioteca.EmprestarLivro("Livro1")
bibilioteca.DevolverLivro("Livro1")
