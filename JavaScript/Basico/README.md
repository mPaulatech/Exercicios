# Exercícios de JavaScript

Baseado no que você já estudou (variáveis, funções, arrays/loops, objetos, template strings, temporizadores, DOM). Cada pasta é um exercício independente.

## Estrutura

Cada pasta tem:
- `exercicio.md` — enunciado
- `index.html` — já ligado ao script.js, só abrir no navegador
- `script.js` — onde você escreve o código (tem TODOs)

## Como usar no VSCode

1. Abra a pasta `javascript-exercicios` no VSCode
2. Extensão "Live Server" ajuda a ver o `index.html` rodando
3. Edite o `script.js` de cada exercício, teste, e vá pro próximo

## Como subir pro GitHub

```bash
cd javascript-exercicios
git init
git add .
git commit -m "início dos exercícios de JS"
git branch -M main
git remote add origin https://github.com/mPaulatech/SEU-REPO.git
git push -u origin main
```

Depois, a cada exercício resolvido:
```bash
git add .
git commit -m "resolve exercício X"
git push
```

## Ordem sugerida

1. Variáveis
2. Funções
3. Arrays e Loops
4. Objetos
5. Template Strings
6. Temporizadores
7. ES6+
8. Projeto: Calculadora
