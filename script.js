function soma() {
    var resultado = 5 + 8;
    alert(resultado);
}

function capturarValores() {
  
    var inputNumero1 = document.getElementById('numero1');
    var inputNumero2 = document.getElementById('numero2');

    var valorNumero1 = inputNumero1.value;
    var valorNumero2 = inputNumero2.value;

    console.log('Valor do Número 1:', valorNumero1);
    console.log('Valor do Número 2:', valorNumero2);}

    function capturarValores() {
        var inputNumero1 = document.getElementById('numero1');
        var inputNumero2 = document.getElementById('numero2');
    
        var valorNumero1 = parseFloat(inputNumero1.value);
        var valorNumero2 = parseFloat(inputNumero2.value);
    
        var soma = valorNumero1 + valorNumero2;
    
        console.log('Valor do Número 1:', valorNumero1);
        console.log('Valor do Número 2:', valorNumero2);
        alert('Resultado da soma:', soma);
    }