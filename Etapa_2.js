//Função que captura o valor
function c_fibonacci(Quat){
    Quat = Number(window.prompt("Digite a quantidade de sequencias: ")) //Digitar a quantidade de elementos que deseja receber
    return Quat
}

//Função que realiza o calculo de fibonacci
function b_fibonacci(){ 
    const qtd = c_fibonacci() //Chamando a função que captura o valor para a quantidade
    let F2 = 0 //1º valor da sequência
    let F1 = 1 //2º valor da sequência
    if(qtd == 0){ //Caso a quantidade seja 0 a função retornara 0, assim, evitando erros
        F3 = 0 
        window.alert(`Fibonacci de: ${F3} = ${F3}`) //Apresenta o resultado de F3 quando a quantidade é 0
        return 0
    }
    else
    for(var i = 0; i < qtd; i++){ //Realizando o calculo fibonacci de acordo com a quantidade de vezes a que foi posta 0, 1, 1, 2, 3, 5...
        var F3 = F1 + F2 // 1 + 0 = 1 -- 1 + 1 = 2 -- 1 + 2 = 3 -- 2 + 3 = 5 ...
        F1 = F2 //0 -- 1 -- 2 -- 3 ...
        F2 = F3 //1 -- 2 -- 3 -- 5 ...
    }
    window.alert(`Fibonacci = ${F3}`) //Apresenta o resultado das somas sequênciais
}