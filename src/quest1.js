// A arrow function combinada com o operador typeof foi criada para verificar se o valor recebido é do tipo string.
// Se for uma string, a função retorna true; caso contrário, retorna false.
const eString = valorQualquer =>{
    if (typeof valorQualquer === 'string'){
        return true
    }else{
        return false
    };
};
console.log(eString('Olá, Mundo.'));
