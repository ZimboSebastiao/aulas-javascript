//  Criando um array (vetor)

let alunos = ["Melissa", "Diana", "Leandro", "Eliel", "Patrícia"];

// Exibindo a estrutura de dados do array
console.log(alunos);

// A melhor aluna da sala é a Melissa
console.log(`A melhor aluna da sala é a  ${alunos[0]}`);
// E o pior é o Eliel

console.log(`E o pior é o ${alunos[3]}`);


let tecnologia = ["Python", "CSS", "JavaScript", "PHP"]

console.log(`Gostaria de aprofundar os estudos em ${tecnologia[1]} e estou ansiosa para aorender ${tecnologia[3]} e entender o porquê de tanta gente falar  mal dessa linguagem.`);

// Array como matriz de duas dimensões

let linguagens = [ 
    ["HTML", "CSS", "JS"],
    ["JAVA", "C++", "C#"] 
];

console.log(linguagens);
console.log(`${linguagens[0][1]}`);