console.log("Condicionais!");

let nome = "klaibert";
let idade = 9;

/*  Verificar a idade para saber se esta pessoa é maior ou menor de idade. */


/* OPERADORES RELACIONAIS
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
> MAIOR
< MENOR
== IGUALDADE (VERIFICAR SE VALORES SÃO IGUAIS)
!= DIFERENÇA (VERIFICAR SE VALORES SÃO DIFERENTES) */


/* O if/else usará esta variável para guardar o resultado da condicional. Por isso, a inicializamos sem valor (indifinida)  */
let mensagem; // Inicializada sem valor/indefinida 
if(idade >= 18){
    mensagem = "maior"
} else {
    mensagem = "menor"
}
 
// Apresentando os resultados da condicional
console.log(`${nome}, é ${mensagem} de idade!`);


/* Exercicio
1) Crie duas variáveis conforme a seguir:
Nota 1 (contendo um valor de 0 a 10) 
Nota 2 (contendo um valor de 0 a 10) 

2) Crie uma variável chamada "Média" que receberá o valor Calculado da média matemática das duas notas informadas
*/

let nota1 = 8;
let nota2 = 6;
let media = (nota1 + nota2) / 2;
let resultado;

if(media >=7){
    resultado  = "Aprovado"
} else {
    resultado = "Reprovado"
}

console.log(`Média: ${media}`);
console.log(` Você foi ${resultado}`);