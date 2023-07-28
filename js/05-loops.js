console.log("Loops!");

/* Principais comandos de repetição

Uso geral:
while   -> ENQUANTO
for     -> PARA


ATENÇÃO: os loops de uso geral PRECISAM  de uma variável de controle de repetição.

Usados em Objetos e Arrays
for/in -> PARA/EM (arrays)
for/of -> PARA/DE (Objetos)
*/

// Exemplo 1: Loop while (Enquanto)
// Variável de controle

/* let contador = 1;
while(contador <= 5){
    alert(`Posso fazer uma perguta? (Salvador, Pedro)`);

    // INCREMENTO
    contador ++;
} */


// EXemplo 2: Loop for (Para)
/* for (let i = 1; i <= 50; i++){
    console.log(`Valor de i é: ${i}`);
} */

/* Nomeclatura para variáveis de controle: 
i, j ou k */




// Exemplo 3: loop com Array

// Com o for/of
 let bandas = ["Pink Floyd", "Rush", "Fally Ipupa", "Tayc", "Ya Levis"];
/*
for (let banda of bandas){
    console.log(`Banda: ${banda}`);

} */

// Sem o for/of
for(let i = 0; i < bandas.length; i++){
    console.log(`Banda: ${bandas[i]}`);

}



// Exemplo 4: loop for/in com objeto

let pessoa = {
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo"
};


for(let dados in pessoa){
    // Mostra apenas o nome de cada propriedade
    console.log(dados);
    
    // Mostra valores de cada propriedade
    console.log(pessoa[dados]);
}