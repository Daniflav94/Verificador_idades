function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let anoInserido = document.querySelector('#ano')
    let resultado = document.querySelector('.res')

    if (anoInserido.value.length == 0 || anoInserido.value > ano){
        window.alert('[ERRO] Verifique o ano inserido e tente novamente!')
    }else{
        let sex = document.getElementsByName('sex')
        let idade = ano - Number(anoInserido.value)       
        let genero  = ""
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        

        if (sex[0].checked) {
            genero = "um homem"
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', './imagens/bebe.jpg');
                img.style.width = '170px';
                img.style.borderRadius = '100%'
               
            }else if (idade < 11) {
                //criança
                img.setAttribute('src', './imagens/menino.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else if (idade < 18) {
                //jovem
                img.setAttribute('src', './imagens/moco.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/homem.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else {
                //idoso
                img.setAttribute('src', './imagens/idoso.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'
            }
        } else if (sex[1].checked) {
            genero = "uma mulher"
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', './imagens/bebe.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else if (idade < 11) {
                //criança
                img.setAttribute('src', './imagens/menina.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else if (idade < 18) {
                //jovem
                img.setAttribute('src', './imagens/moca.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagens/mulher.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'

            }else {
                //idoso
                img.setAttribute('src', './imagens/idosa.jpg')
                img.style.width = '170px';
                img.style.borderRadius = '100%'
            }
        }

        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)

    }
}