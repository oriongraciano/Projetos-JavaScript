
const names = document.querySelector('#nome');
const position = document.querySelector('#cargo');
const wage = document.querySelector('#salario');
const btnUpdate = document.querySelector('#updateBtn');

btnUpdate.addEventListener('click', pegarOValorDoInput);

function pegarOValorDoInput() {
    const nomes = names.value;
    const cargo = position.value;
    const salario = Number(wage.value);  // Criou-se uma variavel para armazenar o valor de salario inserido no Input
    resultado.innerHTML = `Via aqui ${nomes} que seu cargo e de ${cargo} e seu salario e R$ ${salario}`;

    // Chama as funções ganhaBem e aumentoSalario dentro do evento
    ganhaBem(salario);
    aumentoSalario(salario);
}

function ganhaBem(salario) {
    if (salario >= 3500) {
        frase.innerHTML = "Parabéns, você ganha bem!";
    } else if (salario <= 2500 ) {
        frase.innerHTML = "Continue se esforçando!";
    }
}

function aumentoSalario(salario) {
    if (salario < 2500) {
        frase.innerHTML = "Que até o fim do ano irá receber um aumento de 20%"
    } else {
        frase.innerHTML = "Você já ganha bem, e por isso não terá aumento!"
    }
};