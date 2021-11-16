// Entendendo um pouco sobre destructuring 

// Para começar vamos declarar duas variáveis 
const numerosPares = [2, 4, 6];
const numeroImpares = [1, 3, 5];

// Ao inserir os ... antes de variável é possível descontruir ela e unir com todos os atributos
const numeros = [...numerosPares, ...numeroImpares];

// Funciona com números 
const [num1, num2, ...outrosValores] = [1, 2, 3, 4, 5];

// Caso não ouver atributos para incluir, será setado o valor padrão 
//const [ nome = "Gus" ]  = [1];

// Podemos utilizar o destructuring para junção de instancias 
const pessoa = {
    nome: "Gusta",
    idade: 23
}

const pessoaComTelefone = {
    ...pessoa, 
    telefone: 11223344556
}

// { nome: 'Gusta', idade: 23 } { nome: 'Gusta', idade: 23, telefone: 11223344556 }

// É possível colher valores de objetos e atribuir a uma variável de mesmo nome 
const { nome } = pessoa; //Gusta

// Podemos utilizar em uma function 
function imprimeDados ({nome, idade}) {
    console.log(nome, idade);
}

imprimeDados(pessoa); // Gusta 23