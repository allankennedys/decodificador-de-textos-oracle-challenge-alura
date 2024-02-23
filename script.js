
let textoDecodificado = '';

function copy() {
    let textoCopiado = document.querySelector('#paragrafoDisplay').textContent;
    navigator.clipboard.writeText(textoCopiado);
    const modal = document.querySelector('dialog');
    
    // Exibir o modal
    modal.showModal();
    
    // Esconder o modal após 1,5 segundos (1500 milissegundos)
    setTimeout(function() {
        modal.close();
    }, 500);
}


function alterarP(textoDisplay) {
    let campo = document.querySelector('#paragrafoDisplay');
    campo.innerHTML = textoDisplay;
        
    }

function eraseImage() {
    let ocultarImagem = document.getElementsByClassName("erase_image")[0];
    ocultarImagem.style.display = 'none';
    let ocultarh2 = document.getElementsByClassName("erase_h2")[0];
    ocultarh2.style.display = 'none';
    

}

function getText(){
    let textInput = document.querySelector('textarea').value;
    return textInput;}

function criptografarTexto(){
    textoDecodificado = '';
    const dicionarioCriptografia = {
        'a':'asp','e':'ede','i':'imf','o':'ogh','u':'ukk'
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


