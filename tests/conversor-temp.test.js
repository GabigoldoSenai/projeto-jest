const conversorDeTemperatura = require('../js/conversor-temp.js');

test('Verifica se temperatura sai correta', () => {
  const tempEmCelsius = 30;
  const tempEmFarenheit = conversorDeTemperatura(tempEmCelsius);
  expect(tempEmFarenheit).toBe(86);
});
