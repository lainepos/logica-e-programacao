function somarDoisNumeros (valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}    

function calcularMediaDeDoisNumeros (valor1, valor2){
  
    //soma todos os valores
    const resultadodaSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

    // divide pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadodaSomaDeDoisValores /2;

    //Retornar o resultado

    return resultadoDaMediaDeDoisValores;
}

function subtrairDoisNumeros (valor1, valor2){
    const  resultadoDaSubtracaoDeDoisValores = valor1 - valor2;
    return resultadoDaSubtracaoDeDoisValores; 
  

}

function somaEntreQuatroValores (valor1, valor2, valor3, valor4){
    const resultadoEntreQuatroValores = valor1 + valor2 + valor3 + valor4;
    return resultadoEntreQuatroValores;

}

module.exports = {
    somarDoisNumeros
}