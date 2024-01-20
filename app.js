alert("Boas vindas ao jogo do número secreto!")
var dificuldade = parseInt(prompt(`Escolha a dificuldade do jogo\n1: 1-10\n2: 1-100\n3: 1000`))
var limiteDeTentativas
switch(dificuldade){
    case 1:
        dificuldade = 10
        limiteDeTentativas = 3
        break;
    case 2:
        dificuldade = 100
        limiteDeTentativas = 5
        break;
    case 3: 
        dificuldade = 1000
        limiteDeTentativas = 10
        break;
}
var numeroSecreto = parseInt(Math.random() * (0, dificuldade) + 1)
var tentativa = 0

console.log(numeroSecreto)
while (tentativa < limiteDeTentativas) {

    var chute = parseInt(prompt(`Informe um número de  1 até ${dificuldade}`))
    
    if (chute == numeroSecreto) {
        alert("Você acertou")
        tentativa++
        break;
    } else {
        if (chute > numeroSecreto) {
            alert("O número secreto é menor que " + chute)
        } else {
            alert("O número secreto é maior que " + chute)
        }
    }
    tentativa++
}
var mensagemTentativa = tentativa > 1 ? "tentativas":"tentativa"

alert(`O número secreto era: ${numeroSecreto} \nVocê acertou com ${tentativa} ${mensagemTentativa} `  )