function sortear() {               //sorteio de uma quantidade de numeros dentre um intervalo
    let quantidade = parseInt(document.getElementById("quantidade").value); // Quantidade de números
    let de = parseInt(document.getElementById("de").value);  // Inicia em
    let ate = parseInt(document.getElementById("ate").value); // Vai até


    if (de >= ate) {   //proteção para que não haja quantidade de numeros superiores ao intervalo escolhido
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;

    }


    let sorteados = [];
    let numero;


    for (let i = 0; i < quantidade; i++) {  // Evitar números repetidos
        numero = obterNumeroAleatorio(de, ate);


        while (sorteados.includes(numero)) {  
            numero = obterNumeroAleatorio(de, ate);

            if(quantidade > numero) { //verificar se a quantidade de números escolhidos no campo “Quantidade de números” é igual ou inferior ao intervalo de números entre os campos “Do número” e “Até o número”
                alert(`A quantidade de números desejados para o sorteio não pode ser superior à quantidade de números no intervalo ${de} até ${ate} `);
                return;
            }
        }
         
        

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;  // Formatando como os números sorteados serão apresentados
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {  // Função para gerar número
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {    // Habilitar e desabilitar botões iniciar e reiniciar
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {  // Inverte
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {  // Limpar todos os campos, deixar a página limpa/vazia para reiniciar
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}
