const comparaSenhas = require('../js/compara-senhas.js')

test('Verifica se a comparação está correta', () => {
    const senha1 = 'abc'
    const senha2 = 'abc'
    let comparacaoSenhas = comparaSenhas(senha1, senha2)
    expect(comparacaoSenhas).toBe('As senhas são iguais')
});
