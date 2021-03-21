//Função que captura o valor
function c_fatorial(alpha){ 
    alpha = Number(window.prompt("Digite o número Alpha: ")); //Digitar o valor a ser fatorado
    return alpha
}
//Função que realiza o calculo do fatorial
function b_fatorial(){ 
    var a = Number(c_fatorial()); //Chamando a função que captura o valor de alpha
    var resultado = a
    console.log(a);
    console.log(resultado);
    for(var i = 1; i < a; i++){ //Realizando o calculo do fatorial
        resultado *= i; 
    }
    window.alert(`O fatorial de alpha é: ${resultado}`);
}