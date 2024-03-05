
let textoDecodificado = ''; // declaração da variavel onde ficará armazenado o texto que o usuário criptografar.

//função abaixo permite que o botão "copiar" copie o texto no <p> de id #paragrafoDisplay
function copy() {
    let textoCopiado = document.querySelector('#paragrafoDisplay').textContent;//armazena o texto do paragrafo dentro da variavel textoCopiado.
    navigator.clipboard.writeText(textoCopiado); // copia o texto armazenado na variavel p/ a área de transferência do usuário.
    const modal = document.querySelector('dialog');// cria um modal utilizando a tag 'dialog' do html, para informar o usuário de que o texto foi copiado.
    
    modal.showModal(); //exibe o modal
    
    // esconde o modal após 1,5 segundos (1500 milissegundos)
    setTimeout(function() {
        modal.close();
    }, 500);
}

//a função abaixo altera o <p>> da tela inicial para exibir o texto criptografado pelo usuário.
//o parâmetro textoDisplay será informado posteriormente de acordo com a solicitação do user.
function alterarP(textoDisplay) {
    let campo = document.querySelector('#paragrafoDisplay');
    campo.innerHTML = textoDisplay;
        
    }

//a função abaixo faz com que a imagem da aba display deixe de ser exibida.
//essa função será chamada sempre que o programa precisar exibir uma mensagem criptografada
//ou descriptografada no display.
function eraseImage() {
    let ocultarImagem = document.getElementsByClassName("erase_image")[0];//como estamos chamando o elemento pela classe, inserimos [0] para informar que se trata do primeiro elemente da classe.
    ocultarImagem.style.display = 'none';
    let ocultarh2 = document.getElementsByClassName("erase_h2")[0];// além da imagem, ocultamos também um título do display inicial, para que tenhamos apenas <p> visível nessa aba.
    ocultarh2.style.display = 'none';

}

//a função abaixo armazena o texto digitado pelo user no input dentro da variável textInput.
function getText(){
    let textInput = document.querySelector('textarea').value;
    return textInput;}

//a função abaixo decodifica o texto substituin as vogais do texto inserido no input 
//por sílabas pré-definidas.
function criptografarTexto(){
    textoDecodificado = ''; //inserimos a variavel vazia no inicio da função para que ela sempre esteja atualizada com o último texto inserido no input pelo user.
    const dicionarioCriptografia = {
        'a':'asp','e':'ede','i':'imf','o':'ogh','u':'ukk' //aqui definimos as substituições que devem ocorrer nas vogais.
    };
    let texto = getText();
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        // Se for uma vogal, substitui pela sílaba correspondente do dicionário
        if (char in dicionarioCriptografia) {
            textoDecodificado += dicionarioCriptografia[char];
        } else {
            // Se não for uma vogal, mantém o caractere original
            textoDecodificado += char;
        }
    }
    eraseImage();
    alterarP(textoDecodificado)
    return textoDecodificado;
    
    
    
}

//a função abaixo inverte o processo da função anterior.
function descriptografarTexto() {
    textoDecifrado = '';
    const dicionarioDescriptografia = {
        'asp': 'a',
        'ede': 'e',
        'imf': 'i',
        'ogh': 'o',
        'ukk': 'u'
    };

    let textoCriptografado = getText();
    

    // Loop para percorrer o texto criptografado
    for (let i = 0; i < textoCriptografado.length; i++) {
        let encontrouSilaba = false; // Variável para indicar se uma sílaba foi encontrada

        // Verifica se a próxima sílaba no texto criptografado está no dicionário de descriptografia
        for (let j = 4; j > 0; j--) {
            let currentSyllable = textoCriptografado.substring(i, i + j);
            if (currentSyllable in dicionarioDescriptografia) {
                // Se encontrou uma sílaba no dicionário, substitui pela vogal correspondente
                textoDecifrado += dicionarioDescriptografia[currentSyllable];
                i += j - 1; // Avança para a próxima sílaba no texto criptografado
                encontrouSilaba = true;
                break;
            }
        }
        // Se não encontrou uma sílaba no dicionário, mantém o caractere original
        if (!encontrouSilaba) {
            textoDecifrado += textoCriptografado[i];
        }
    }
    eraseImage()
    alterarP(textoDecifrado)

    return textoDecifrado;
}


