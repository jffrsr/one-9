# Desafios da Fase 1: Iniciando com JavaScript

Trilha "**Lógica de Programação: Mergulhe em programação com JavaScript**" (Parte 1).

## Índice

| Desafio | Título                             | Tecnologias |
| ------- | ---------------------------------- | ----------- |
| 1       | Exibir Alerta de Boas-Vindas       | JavaScript  |
| 2       | Declarar Variável Nome             | JavaScript  |
| 3       | Declarar Variável Idade            | JavaScript  |
| 4       | Declarar Variável Número de Vendas | JavaScript  |
| 5       | Declarar Variável Saldo Disponível | JavaScript  |
| 6       | Exibir Alerta de Erro              | JavaScript  |
| 7       | Declarar e Exibir Mensagem de Erro | JavaScript  |
| 8       | Capturar Nome via Prompt           | JavaScript  |
| 9       | Capturar Idade via Prompt          | JavaScript  |
| 10      | Validar Idade para Habilitação     | JavaScript  |

## Desafio 1: Exibir Alerta de Boas-Vindas

**Enunciado**: Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

**Solução**:

```javascript
alert("Boas vindas ao nosso site!");
```

## Desafio 2: Declarar Variável Nome

**Enunciado**: Declare uma variável chamada nome e atribua a ela o valor "Lua".

**Solução**:

```javascript
let nome = "Lua";
```

## Desafio 3: Declarar Variável Idade

**Enunciado**: Crie uma variável chamada idade e atribua a ela o valor 25.

**Solução**:

```javascript
let idade = 25;
```

## Desafio 4: Declarar Variável Número de Vendas

**Enunciado**: Defina uma variável numeroDeVendas e atribua a ela o valor 50.

**Solução**:

```javascript
let numeroDeVendas = 50;
```

## Desafio 5: Declarar Variável Saldo Disponível

**Enunciado**: Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

**Solução**:

```javascript
let saldoDisponivel = 1000;
```

## Desafio 6: Exibir Alerta de Erro

**Enunciado**: Exiba um alerta com o texto "Erro! Preencha todos os campos"

**Solução**:

```javascript
alert("Erro! Preencha todos os campos");
```

## Desafio 7: Declarar e Exibir Mensagem de Erro

**Enunciado**: Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.

**Solução**:

```javascript
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
```

## Desafio 8: Capturar Nome via Prompt

**Enunciado**: Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .

**Solução**:

```javascript
let nome = prompt("Qual é o seu nome?");
```

## Desafio 9: Capturar Idade via Prompt

**Enunciado**: Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

**Solução**:

```javascript
let idade = prompt("Qual é a sua idade?");
```

## Desafio 10: Validar Idade para Habilitação

**Enunciado**: Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

**Solução**:

```javascript
let idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
  alert("Pode tirar a habilitação!");
}
```
