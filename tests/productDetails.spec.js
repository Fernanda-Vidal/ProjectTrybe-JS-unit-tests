const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([{name: 'Alcool gel', details: {productId: 'Alcool gel123'}}, {name: 'Máscara', details: {productId: 'Máscara123'}}]);
  });
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Verifica se o retorno de `productDetails` é um array', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toEqual(true);
  });
  it('Verifica se o array retornado por `productDetails` contém dois itens dentro', () => {
    expect(productDetails().length).toBe(2);
  });
  it('Verifica se os dois itens dentro do array retornado por `productDetails` são objetos', () => {
    expect(typeof productDetails()[0]).toBe('object');
    expect(typeof productDetails()[1]).toBe('object');
  });
  it('Verifica se os dois objetos retornados, quando passados parâmetros diferentes, são diferentes entre si', () => {
    expect(Object.values(productDetails('Alcool gel', 'Máscara')[0] !== Object.values(productDetails('Alcool gel', 'Máscara')[1])))
    expect(Object.values(productDetails('Máscara', 'Máscara')[0] === Object.values(productDetails('Máscara', 'Máscara')[1])))
  });
  // it('Verifica se os dois productsId terminam com 123', () => {
  //   expect(Object.entries(productDetails()).[0][1][0]).toEqual()
  // })
  // Teste se os dois productIds terminam com 123.
});
