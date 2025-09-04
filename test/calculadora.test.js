const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require ('chai');


describe ('Testes da Função de Soma', function () {
    it ('A função deve ser capaz de somar dois números positivos', function () {
        // coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (5, 3);
        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });


    it ('A função deve ser capaz de somar um número positivo e um número negativo', function () {
        const resultadoDaSoma = somarDoisNumeros (50, -15);
        // compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);

    });
       
    // Teste Somar dois números zerados, ou seja, 0 + 0 igual a 0

    it ('A função deve ser responsavel por somar dois numeros zerados', function () {
        const resultadoDaSoma = somarDoisNumeros (0, 0);
        expect(resultadoDaSoma).to.equal(0);

    });

    // Somar dois números negativos, por exemplo, -15 e -20 que deve ser -35

    it ('A função deve ser responsavel por somar dois numeros negativos', function () {
    const resultadoDaSoma = somarDoisNumeros (-15, -20);
    expect(resultadoDaSoma).to.equal(-35);

    });


});