// A função que recebe uma string e um número.
// Ela retorna os primeiros caracteres da string, com a quantidade definida pelo número informado.
// Utilizando um método de string para extrair a parte inicial da string.

function obterPrimeirosCaracteres(str, numCaracteres){
    return str.slice(0, numCaracteres);
};
const str = 'AtividadeJs';
const numCaracteres = 9;
console.log(obterPrimeirosCaracteres(str,numCaracteres));