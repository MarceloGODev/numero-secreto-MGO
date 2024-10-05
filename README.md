# Sorteio de Números em JavaScript

## Descrição
Este código em **JavaScript** realiza o sorteio de uma quantidade de números dentro de um intervalo definido pelo usuário. Ele garante que os números sorteados não se repitam e valida se a quantidade de números solicitados não excede o intervalo disponível.

## Como instalar e rodar o projeto
Para executar este projeto, você pode simplesmente copiar o código JavaScript para um arquivo chamado `app.js` e abrir o arquivo HTML que o contém em um navegador da web. Não há dependências externas.

## Tecnologias utilizadas
- JavaScript

## Funcionalidades
- Recebe a quantidade de números a serem sorteados.
- Define um intervalo de números para o sorteio.
- Valida os valores do intervalo.
- Evita a repetição de números sorteados.
- Exibe o resultado no HTML.
- Habilita/desabilita botões para controle do sorteio.
- Possui uma função de reinicialização que limpa os campos e o resultado.

## Exemplos de uso
1. Insira a quantidade de números que deseja sortear.
2. Defina o intervalo de números (valor mínimo e máximo).
3. Clique no botão para sortear os números.
4. Os números sorteados aparecerão na tela.

## Informações sobre como contribuir
Este projeto aceita qualquer contribuição útil que ajude a manter o código atualizado e a melhorar sua funcionalidade. Isso pode incluir correções de bugs, melhorias na documentação, novas funcionalidades ou otimizações de desempenho. Sinta-se à vontade para abrir um pull request com suas sugestões ou relatar problemas que você encontrar.

## Links para documentação
Para aprender mais sobre JavaScript e suas funcionalidades, consulte a [documentação oficial do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Este recurso abrangente oferece guias, tutoriais e referências detalhadas sobre a linguagem, permitindo que desenvolvedores de todos os níveis aprimorem suas habilidades e conhecimentos.


```javascript
function sortear() {              
    // Obtém a quantidade de números a serem sorteados a partir da entrada do usuário
    let quantidade = parseInt(document.getElementById("quantidade").value); 
    // Obtém o valor mínimo do intervalo a partir da entrada do usuário
    let de = parseInt(document.getElementById("de").value);  
    // Obtém o valor máximo do intervalo a partir da entrada do usuário
    let ate = parseInt(document.getElementById("ate").value); 

    // Valida se o limite inferior do intervalo é menor que o superior
    if (de >= ate) {   
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return; // Sai da função se a validação falhar
    }

    let sorteados = []; // Array para armazenar os números sorteados
    let numero; // Variável para armazenar o número sorteado

    // Loop para sortear a quantidade de números especificada
    for (let i = 0; i < quantidade; i++) {  
        numero = obterNumeroAleatorio(de, ate); // Obtém um número aleatório no intervalo

        // Verifica se o número já foi sorteado
        while (sorteados.includes(numero)) {  
            numero = obterNumeroAleatorio(de, ate); // Sorteia novamente se o número já foi sorteado

            // Valida se a quantidade de números desejados não excede o intervalo disponível
            if (quantidade > numero) { 
                alert(`A quantidade de números desejados para o sorteio não pode ser superior à quantidade de números no intervalo ${de} até ${ate} `);
                return; // Sai da função se a validação falhar
            }
        }

        sorteados.push(numero); // Adiciona o número sorteado à lista
    }

    // Exibe os números sorteados no HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;  
    alterarStatusBotao(); // Atualiza o status do botão
}

// Função para gerar um número aleatório entre min e max
function obterNumeroAleatorio(min, max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min; // Retorna um número inteiro aleatór

      
