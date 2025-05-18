// A função recebe uma string e a divide em partes usando os espaços como separador.
// O método utilizado transforma a string em um array, onde cada palavra ocupa uma posição do array.

function stringParaArray(str){
    return str.split(' ');
}

const str = 'Amo Javascript';
console.log(stringParaArray(str));

