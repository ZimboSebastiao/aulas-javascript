/* Atalho shift alt A - comentário de várias linhas */


// Comando de saída para ver o resultado (console.log)
console.log("Començando a programar com JS");

// Outros comandos de saída (mais antigos)
/* document.write("Saída direto na página")
alert("Janela de diálogo para saída") */


/* Vamos criar espaço de armazenamento temporário de dados na Memória Ram
 
Variáveis e Constantes

Variáveis: declaradas com a palavra let ou var
Constantes: Declarados com a palavra const */

const nome = "Chapolin Colorado";
let ano = 2023;

// Declarando variáveis (sem atribuição)
// (Elas são iniciadas como indefinidas/undefined9)
let curso, escola, uc;  // Várias separadas por ,
let cidade; // uma única

console.log(nome);
console.log(ano);
console.log(curso);

// Apenas declaração
// const teste; (NÃO FUNCIONA)


// Atribuindo valores ás váriáveis declaradas
curso = "Técnico para Internet";
escola = "Senac";
uc = 3;
cidade = "São Paulo";

let preco = 1456.68;

/* Qaundo o dado se trata de texto (incluindo símbolos e outros caracteres), ele deve ser colocado entre aspas (simples ou duplas). Quando se trata de valor numérico (inteiro ou decimal). NÃO USE aspas. */

console.log(curso, escola, uc, cidade);

/* Saída de dados combinando dados dinâmicos (variáveis e constantes) Com dados estáticos textos/frases mais elaboradas */

/* Frase de exemplo para a saída
Olá, me chamo Chapolin Colorado e estou fazendo o Téc. Informatica para internet no senac (2023). */

// Forma 1: 
console.log("Olá, me chamo", nome, "e estou fazendo o ", curso, "no", escola, "(", ano, ")");

console.log("Olá, me chamo " + nome + " e estou fazendo o " + curso + "no" + escola + "(" + ano + ")");

// Forma 2: Template Literal/String (moderna)

console.log(`Olá, me chamo ${nome} e estou fazendo o ${curso} no ${escola} (${ano})`);