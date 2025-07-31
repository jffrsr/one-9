# Desafios da Fase 2: Condicionais e concatenação

Trilha "**Lógica de Programação: Mergulhe em programação com JavaScript**".

## Índice

| Desafio | Título                                | Tecnologias |
| ------- | ------------------------------------- | ----------- |
| 1       | Verificar Dia da Semana               | JavaScript  |
| 2       | Verificar Número Positivo ou Negativo | JavaScript  |
| 3       | Sistema de Pontuação de Jogo          | JavaScript  |
| 4       | Informar Saldo com Template String    | JavaScript  |
| 5       | Boas-Vindas com Nome via Prompt       | JavaScript  |

## Desafio 1: Verificar Dia da Semana

**Enunciado**: Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

**Solução**:

```javascript
let diaDaSemana = prompt("Qual é o dia da semana?");
if (diaDaSemana === "Sábado" || diaDaSemana === "Domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}
```

## Desafio 2: Verificar Número Positivo ou Negativo

**Enunciado**: Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

**Solução**:

```javascript
let numero = parseFloat(prompt("Digite um número:"));
if (numero >= 0) {
  alert("O número é positivo.");
} else {
  alert("O número é negativo.");
}
```

## Desafio 3: Sistema de Pontuação de Jogo

**Enunciado**: Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

**Solução**:

```javascript
let pontuacao = parseInt(prompt("Digite sua pontuação:"));
if (pontuacao >= 100) {
  alert("Parabéns, você venceu!");
} else {
  alert("Tente novamente para ganhar.");
}
```

## Desafio 4: Informar Saldo com Template String

**Enunciado**: Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

**Solução**:

```javascript
let saldo = 150;
alert(`Seu saldo é R$ ${saldo}.`);
```

## Desafio 5: Boas-Vindas com Nome via Prompt

**Enunciado**: Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

**Solução**:

```javascript
let nome = prompt("Qual é o seu nome?");
alert(`Bem-vindo, ${nome}!`);
```
