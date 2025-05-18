/* 
A arrow function foi criada para verificar se uma string está vazia ou contém apenas espaços em branco.
O operador lógico OU (||) é usado para retornar true se uma das duas condições for verdadeira:
1) A expressão !str verifica se a variável 'str' é um valor "falsy" em JavaScript (como null, undefined ou string vazia).
2) Caso str não seja falsy, utilizo o método .trim() para remover espaços em branco do início e fim da string.
Se, após isso, a string continuar vazia (str.trim() === ''), a função também retorna true.
*/

const estaVazia = str => !str || str.trim() === '';

console.log(estaVazia(''));
console.log(estaVazia(' '));
console.log(estaVazia('lucas'));

