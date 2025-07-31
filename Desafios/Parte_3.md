# Desafios da Fase 3: Loops e tentativas

Trilha "**Lógica de Programação: Mergulhe em programação com JavaScript**".

## Índice

| Desafio | Título                              | Tecnologias |
| ------- | ----------------------------------- | ----------- |
| 1       | Contador de 1 a 10 com Loop While   | JavaScript  |
| 2       | Contador de 10 a 0 com Loop While   | JavaScript  |
| 3       | Contagem Regressiva com Loop While  | JavaScript  |
| 4       | Contagem Progressiva com Loop While | JavaScript  |

## Desafio 1: Contador de 1 a 10 com Loop While

**Enunciado**: Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

**Solução**:

```javascript
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}
```

## Desafio 2: Contador de 10 a 0 com Loop While

**Enunciado**: Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

**Solução**:

```javascript
let contador = 10;
while (contador >= 0) {
  console.log(contador);
  contador--;
}
```

## Desafio 3: Contagem Regressiva com Loop While

**Enunciado**: Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

**Solução**:

```javascript
let numero = parseInt(prompt("Digite um número para contagem regressiva:"));
while (numero >= 0) {
  console.log(numero);
  numero--;
}
```

## Desafio 4: Contagem Progressiva com Loop While

**Enunciado**: Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

**Solução**:

```javascript
let numero = parseInt(prompt("Digite um número para contagem progressiva:"));
let contador = 0;
while (contador <= numero) {
  console.log(contador);
  contador++;
}
```
