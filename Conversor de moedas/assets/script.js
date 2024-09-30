/* Fundamentos Javascript

// Variaveis
let idade = 27
let anoAtual = 2024

console.log (idade - anoAtual)


//Array 
let ingredientes = ["farinha", "ovos", "leite", "mantega", "chocolate"]

console.log(ingredientes [2])


//Objeto
let personagem = {
    nome: "orion",
    idade: 27,
    forca:350
}

console.log(personagem.forca)


// Funções
let notas = somar(15, 5)

    function somar(nota1, nota2) {
    let resultado = nota1 + nota2
    return resultado
}
console.log(notas)


let nota = soma(15, 25)

function soma(numero1, numeto2){
let total = numero1 + numeto2
return total
}

console.log(nota)


let somar2 = (a, b) => {
    let resultado = a + b
    return resultado
}
let x = somar2(47, 38)
console.log(x)


function maiorDeIdade(idade){
    if(idade >= 18) {
    console.log("E maior de idade!")
    } else {
        console.log("E menor de idade!")
    }




//Condicionais
let username = "usuario123";
let password ="12345";

if (username == "usuario123" && password == "123456") {
    console.log("Usuario Autenticado!")
} else {
    console.log("Login ou senha incorreto!")
}


let idade = 28

if (idade == 27) {
    console.log("você nasceu em 1997")
} else if (idade > 27) {
    console.log("Você nasceu depois de 1997")
} else {
    console.log("Você nasceu antes de 1997")
}



//Loops
let lista = ["Arroz", "Feijao", "sal", "Oleo"]

for (let item of lista) {
    console.log(item)
}

let interator = 0;

for(interator; interator <4 ; interator ++){
    console.log(interator);
}
*/

// Botão Alert:
let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    avisar()
})

function avisar() {
    alert("E meu amigo, mesmo com muitos reais, você continua pobre de Dolares kkkkkkk")
}


// Funcionalidade do conversor:

// Variaveis
let dolar = 5.45

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

// Eventos:
usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1250,00"
convert("usd-to-brl")


// Funções:
function formatCurrency(value) {
    let fixedValue = fixValue(value)
    let options = {
        useGrouping: false,
        minimunFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR".options)
    return formatter.format(fixedValue)
}

function fixValue(value) {
    let fixedValue = value.replace(",", ".")
    let floatValue = parseFloat(fixedValue)
    if (floatValue == NaN) {
        floatValue = 0
    }
    return floatValue
}



function convert(type) {
    if (type == "usd-to-brl") {
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
    }

    if (type == "brl-to-usd") {
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }

}