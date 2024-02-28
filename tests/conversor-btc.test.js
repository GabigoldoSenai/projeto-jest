const conversorDeBitcoin = require('../js/conversor-btc.js')

test('Verifica se a conversão está correta', () => {
    const valorEmBitcoin = 1;
    const valorEmReal = conversorDeBitcoin(valorEmBitcoin)
    expect(valorEmReal).toBe(298959.31)
});