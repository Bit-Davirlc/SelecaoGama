    //Calculo fatoração
    
    //Função que captura o valor para fatorial
    function c_fatorial(alpha) 
    {
        alpha = document.querySelector(".alpha").value; //Digitar o valor a ser fatorado
        return alpha
    }
    //Função que realiza o calculo do fatorial
    function fatoracao()
    {
        var a = Number(c_fatorial()); //Chamando a função que captura o valor de alpha
        var fat = parseInt(a) 
        for(var i = 1; i < a; i++){ //Realizando o calculo do fatorial
            fat *= i; 
        }
        return fat
    }
    //Calculo fibonacci 
    function c_fibonacci(Quat) //Função que captura o valor para fibonacci
    {
        Quat = document.querySelector(".Quat").value; //Digitar a quantidade de elementos que deseja receber
        return Quat
    }
    //Função que realiza o calculo de fibonacci
    function fibonacci(F3) 
    {
        const qtd = Number(c_fibonacci()) //Chamando a função que captura o valor para a quantidade
        let F2 = 0 //1º valor da sequência
        let F1 = 1 //2º valor da sequência
        if(qtd == 0){ //Caso a quantidade seja 0 a função retornara 0, assim, evitando erros
            return 0
        }
        else
        for(var i = 0; i < qtd; i++){ //Realizando o calculo fibonacci de acordo com a quantidade de vezes a que foi posta 0, 1, 1, 2, 3, 5...
            F3 = F1 + F2 // 1 + 0 = 1 -- 1 + 1 = 2 -- 1 + 2 = 3 -- 2 + 3 = 5 ...
            F1 = F2 //0 -- 1 -- 2 -- 3 ...
            F2 = F3 //1 -- 2 -- 3 -- 5 ...
        }
        return F3
    }
    //Somar o fatoração e fibonacci
    function soma(sum)
    { 
        var fib = fibonacci();
        var fat = fatoracao();
        sum = fib + fat; //Realizando a soma do Fibonacci e Fatoração
        console.log(sum)
        return sum;
    }
    // Função de decriptografar
    function decrip()
    {
        const sum = (soma()); //Chama a função soma junto do seu resultado
        let codigo = (sum).toString();
        //Alfabeto
        const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
        //Endereço - servira para guardar os digitos em pares
        let endereco = [];
        //Decrip - servira para enfim unir o alfabeto com o endereco para resultar no código
        let decrip = '';
        //Separa digitos
        if(codigo.length%2 != 0) 
            codigo = '0' + codigo;
        for(var i = 0; i < codigo.length; i+=2){
            endereco.push(codigo.substring(i, i+2));
        }
        //Decripta o código
        for(var a = 0; a < endereco.length; a++){
            if(Number(endereco[a]) <= 25){
                decrip += alfabeto[Number(endereco[a])];
            }
            else{
                decrip += endereco[a].toString();
            }
        }
            document.querySelector(".res").innerHTML = sum;
            document.querySelector(".cod").innerHTML = endereco;
            document.querySelector(".dec").innerHTML = decrip;
    }
