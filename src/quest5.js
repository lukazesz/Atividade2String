// Esta função recebe um nome completo formado por duas palavras.
// Primeiro, ela divide a string original em um array de palavras usando o espaço como separador.
// Em seguida, extrai o primeiro nome completo e a inicial do segundo nome.
// Por fim, retorna uma nova string com o formato abreviado: "Nome S."


function abreviarNome(nomeCompleto) {
    const partes = nomeCompleto.split(' ');

    const primeiroNome = partes[0];
    const inicialSegundoNome = partes[1][0];

    return `${primeiroNome} ${inicialSegundoNome}.`;
}

const nomeCompleto = 'Linguagem Script';
console.log(abreviarNome(nomeCompleto));
