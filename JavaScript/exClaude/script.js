// 1.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };

console.log("O produto " + produto.nome + " custa R$" + produto.preco);

// 2. 
let numeroVerificado = -1;

switch(true){
    case numeroVerificado > 0:
        console.log("Este numero é Positivo!!")
        break;
    case numeroVerificado < 0:
        console.log("Este numero é Negativo!!")
        break;
    default:
        console.log("Este numero é Zero!!")
        break;
}

// 3.
let soma = 0;
let i = 1;

while(i <= 50){
    if(i % 2 === 0){
        soma += i;
    }
    i++;
}

console.log(soma);

// 4.
function mediaTurma(notas){
    let total = 0;

    for(let i = 0; i < notas.length; i++){
        total += notas[i];
    }

    return total / notas.length;
}

console.log(mediaTurma([7, 8, 9, 6]));

// 5.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };

console.log(`O produto ${produto.nome} custa R$${produto.preco}.`);

// 6.
let mediaTurma = (notas) => {
    let total = 0;

    for(let i = 0; i < notas.length; i++){
        total += notas[i];
    }

    return total / notas.length;
};

console.log(mediaTurma([7, 8, 9, 6]));

// 7.
let produto = { nome: "Maçã", preco: 27, estoque: 5 };
const{nome, preco} = produto;
console.log(nome);
console.log(preco);

let nomes = ["Maria", "João", "Vitória"];
let [primeiroNome, ,terceiroNome] = nomes;
console.log(primeiroNome);
console.log(terceiroNome);

// 8.
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 5, 10, 15];

console.log(maisNumeros);

let produto = {
    nome: "Maça",
    preco: 5
}

let maisInformações ={
    ...produto,
    preco: 7,
    estoque: 10
}

console.log(maisInformações);

// 9.
function somarTodos(...numeros){
    let total = 0;

    for(let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }

    return total;
}

console.log(somarTodos(1, 2, 4, 5, 7, 8, 10));

// 10.
let email = ["smariapaula0625@gmail.com", "fortissanguine@gmail.com"];
function emailValido(email){
    let temArroba = email.includes("@");
    let comecaComNumero = "0123456789".includes(email[0]);

    return temArroba && !comecaComNumero;
}

console.log(emailValido("smariapaula0625@gmail.com"));