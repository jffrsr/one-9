# Desafios da Fase 4: Boas práticas de programação

Trilha "**Lógica de Programação: Mergulhe em programação com JavaScript**".

## Índice

| Desafio | Título                                           | Tecnologias |
| ------- | ------------------------------------------------ | ----------- |
| 1       | Exibir Mensagem de Boas-Vindas no Console        | JavaScript  |
| 2       | Exibir Nome com Console                          | JavaScript  |
| 3       | Exibir Nome com Alert                            | JavaScript  |
| 4       | Capturar Linguagem Favorita via Prompt           | JavaScript  |
| 5       | Somar Valores e Exibir no Console                | JavaScript  |
| 6       | Subtrair Valores e Exibir no Console             | JavaScript  |
| 7       | Verificar Maior ou Menor de Idade com Prompt     | JavaScript  |
| 8       | Verificar Número Positivo, Negativo ou Zero      | JavaScript  |
| 9       | Imprimir Números de 1 a 10 com Loop While        | JavaScript  |
| 10      | Verificar Aprovação com Base em Nota             | JavaScript  |
| 11      | Gerar Número Aleatório com Math.random           | JavaScript  |
| 12      | Gerar Número Inteiro de 1 a 10 com Math.random   | JavaScript  |
| 13      | Gerar Número Inteiro de 1 a 1000 com Math.random | JavaScript  |

## Desafio 1: Exibir Mensagem de Boas-Vindas no Console

**Enunciado**: Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

**Solução**:

```javascript
console.log("Olá, boas-vindas!");
```

## Desafio 2: Exibir Nome com Console

**Enunciado**: Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

**Solução**:

```javascript
let nome = "Jefferson";
console.log(`Olá, ${nome}!`);
```

## Desafio 3: Exibir Nome com Alert

**Enunciado**: Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

**Solução**:

```javascript
let nome = "Jefferson";
alert(`Olá, ${nome}!`);
```

## Desafio 4: Capturar Linguagem Favorita via Prompt

**Enunciado**: Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

**Solução**:

```javascript
let linguagemDeProgramacao = prompt(
  "Qual a linguagem de programação que você mais gosta?"
);
console.log(
  `A linguagem de programação preferida é: ${linguagemDeProgramacao}`
);
```

## Desafio 5: Somar Valores e Exibir no Console

**Enunciado**: Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

**Solução**:

```javascript
let valor1 = 20;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
```

## Desafio 6: Subtrair Valores e Exibir no Console

**Enunciado**: Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

**Solução**:

```javascript
let valor1 = 20;
let valor2 = 10;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
```

## Desafio 7: Verificar Maior ou Menor de Idade com Prompt

**Enunciado**: Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

**Solução**:

```javascript
let idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

## Desafio 8: Verificar Número Positivo, Negativo ou Zero

**Enunciado**: Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

**Solução**:

```javascript
let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}
```

## Desafio 9: Imprimir Números de 1 a 10 com Loop While

**Enunciado**: Use um loop while para imprimir os números de 1 a 10 no console.

**Solução**:

```javascript
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
```

## Desafio 10: Verificar Aprovação com Base em Nota

**Enunciado**: Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

**Solução**:

```javascript
let nota = 10;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

## Desafio 11: Gerar Número Aleatório com Math.random

**Enunciado**: Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

**Solução**:

```javascript
let numeroQualquer = Math.random();
console.log(`O número qualquer aleatório gerado é ${numeroQualquer}.`);
```

## Desafio 12: Gerar Número Inteiro de 1 a 10 com Math.random

**Enunciado**: Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

**Solução**:

```javascript
let numeroInteiro1a10 = parseInt(Math.random() * 10 + 1);
console.log(`O número inteiro entre 1 e 10 gerado é ${numeroInteiro1a10}.`);
```

## Desafio 13: Gerar Número Inteiro de 1 a 1000 com Math.random

**Enunciado**: Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

**Solução**:

```javascript
let numeroInteiro1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(`O número inteiro entre 1 e 1000 gerado é ${numeroInteiro1a1000}.`);
```
