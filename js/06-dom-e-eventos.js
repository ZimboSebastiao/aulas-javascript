//  Manipulação do Dom (Sem Eventos)

/* Exemplo 0 
querySelector é uma função para selecionar um documento no DOM (pagina/documeto).


querySelectorAll é uma função para selecionar vários elementos no DOM.
*/

//  Selecionando a partir da tag h1
const titulo = document.querySelector("h1");

//  Selecionando todos h2
const elementos = document.querySelectorAll("h2");

console.log(titulo);
console.log(elementos);

// Modificando o DOM
titulo.textContent = "Opa!";

// elementos[0].textContent = "Teste";

// Alterando varios elementos de h2 por um loop
for (let elemento of elementos){
    elemento.textContent = "Teste!";

    // Aplicando css via JS
    elemento.style.color = "red";
}


// Exemplo 2: MODO NOTURNO

const pagina = document.querySelector("body");
const botaoNoturno = document.querySelector("#noturno");

// Monitor de Eventos
botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("noturno");

    /* logica para mudar o texto do botão 
    Se a pagina estiver com a classe noturno, mostramos o botão com o texto "desativar".
    Senão, mostramos o botão com o texto "ativar" 1278
    */

    if (pagina.classList.contains("noturno")){
        botaoNoturno.textContent = "Desativar";

    } else {
        botaoNoturno.textContent = "Ativar";
    }
});



/* Exemplo 3 */

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

formulario.addEventListener("submit", function(event){
    // Anulando o comportamento padrão (redireccionamento do navegador)
    event.preventDefault();

    // Obtendo os valores digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    /* Funções de conversão
    parseFloat() -> Garante que os valores sejam tratados como números podendo ter casas decimais.
    
    parseInt() -> Garante que o valor seja tratado como número inteiro (não permite casas decimais).
    */

    let media = (nota1 + nota2) / 2;

    // Verificação da situação do aluno baseando na média

    let situacao;

    if (media >= 7) {
        situacao = "aprovado"
    } else {
        situacao = "reprovado"
    }


    /* Etapa 1: Criar um novo elemento/tag para receber os dados */
    let paragrafo = document.createElement("p");

    
    /*Etapa 2: Montar e estilizar o conteúdo deste novo elemento/tag  */
    paragrafo.classList.add(situacao);
    paragrafo.innerHTML = `${nome} | ${media} | ${situacao}`;

        
    /*Etapa 3: Adicionar o novo elemento ao DOM */
    divResultados.appendChild(paragrafo);
   

    // Reset no formulário (limpar os campos)
    formulario.reset();

    // Devolver o cursor para o campo nome
    campoNome.focus();



    // Teste
    console.log(nome, nota1, nota2, media, situacao);
});
