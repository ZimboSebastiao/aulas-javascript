// Exemplo 1: Objeto com dados de uma pessoa

//  () PARENTÊSES -> Indica lidar com funções
//  [] COLCHETES -> Indica lidar com array
//  {} CHAVES -> Indica lidar com objetos
// OBS: chaves também pode ser usadas em outros rescursos

let pessoa = {
    nome: "Jon Oliva",
    idade: 66,
    cidade: "São Paulo",
    estado: "SP"
};

console.log(pessoa);

// Jon oliva está na cidade de São Paulo
console.log(`${pessoa.nome} está na cidade de ${pessoa.cidade}`);

// Exemplo 2: Objeto com array

let livro = {
    titulo: "Senhor dos anéis",
    autor: "J>R>R Tolkien",
    volumes: ["A Sociedade do Anel", "As Duas Torres", "Retorno do Rei"]
}

console.log(livro);
console.log(livro.titulo);
console.log(livro.volumes[0]);


// Exemplo 3: array com objetos

let livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K Rowling"
    },

    {
        titulo: "Instrumentos Mortais",
        autor: "Cassandra Clare"
    },

    {
        titulo: "O Iluminado",
        autor: "Stephen King"
    }
]

console.log(livros);
console.log(livros[2].autor);

let aluno = {
    nome_completo: "Aicha Mubobo",
    data_nascimento: "15/05/2000",
    lista_de_telefone: [" (11) 2178-0300 "," (12) 93456-3789"],
    endereco: {
        bairro: "Sé",
        rua: "Praça Ministro Costa Manso",
        numero: "12"
    }

}

console.log(aluno);
console.log(`Nome: ${aluno.nome_completo} | Celular:${aluno.lista_de_telefone[0]} | Bairro: ${aluno.endereco.bairro}`);