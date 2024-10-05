# Sorteio de Números em JavaScript

## Descrição

Este código em **JavaScript** realiza o sorteio de uma quantidade de números dentro de um intervalo definido pelo usuário. Ele garante que os números sorteados não se repitam e valida se a quantidade de números solicitados não excede o intervalo disponível.

## Funcionalidades

- Recebe a quantidade de números a serem sorteados.
- Define um intervalo de números para o sorteio.
- Valida os valores do intervalo.
- Evita a repetição de números sorteados.
- Exibe o resultado no HTML.
- Habilita/desabilita botões para controle do sorteio.
- Possui uma função de reinicialização que limpa os campos e o resultado.

### Código em JavaScript

```javascript
function sortear() {              
    let quantidade = parseInt(document.getElementById("quantidade").value); 
    let de = parseInt(document.getElementById("de").value);  
    let ate = parseInt(document.getElementById("ate").value); 

    if (de >= ate) {   
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {  
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {  
            numero = obterNumeroAleatorio(de, ate);

            if(quantidade > numero) { 
                alert(`A quantidade de números desejados para o sorteio não pode ser superior à quantidade de números no intervalo ${de} até ${ate} `);
                return;
            }
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;  
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {    
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {  
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {  
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
