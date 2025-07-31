// Aprendemos sobre o alert para mostrar mensagens
alert("Boas vindas ao jogo do número secreto");
// Aprendemos sobre o let para declarar variáveis
let numeroMaximo = 100;
// Aprendemos sobre o Math.random para gerar números aleatórios
// Aprendemos sobre o parseInt para converter strings em números inteiros
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Aprendemos sobre o console.log para imprimir mensagens no console
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Aprendemos sobre o while para repetir ações enquanto uma condição for verdadeira
while (chute != numeroSecreto) {
  // Aprendemos sobre o prompt para receber entradas do usuário
  // Aprendemos sobre o template string para formatar strings com variáveis
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  // Aprendemos sobre o if para tomar decisões baseadas em condições
  if (chute == numeroSecreto) {
    // Aprendemos sobre o break para sair de loops caso a condição seja atendida
    break;
    // Aprendemos sobre o else para tratar o caso em que a condição não é atendida
  } else {
    // Aprendemos que podemos tratar novas condições if else quando temos mais a serem tratadas
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    // Aprendemos que o tentativas++ subistitui o tentativas = tentativas + 1;
    tentativas++;
  }
}

// Aprendemos sobre operador ternário para simplificar condições
let numeroTentativas = tentativas > 1 ? "tentativas" : "tentativa"; // Pluralização da palavra tentativas
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${numeroTentativas}`
);
// Fim do jogo!
