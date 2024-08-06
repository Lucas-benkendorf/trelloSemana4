function soma() {
    // Captura os valores dos campos de entrada
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    
    // Converte os valores para números
    var valor1 = parseFloat(numero1);
    var valor2 = parseFloat(numero2);
    
    // Calcula a soma
    var resultado = valor1 + valor2;
    
    // Exibe o resultado em um alerta
    alert("A soma dos valores é: " + resultado);
}
