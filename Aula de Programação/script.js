document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')


 botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)
   })

   const aumentaFonteBotao = document.getElementById('aumentar-fonte');
   const diminuiFonteBotao = document.getElementById('diminuir-fonte');

   const alternaContraste = document.getElementById('alterna-contraste')

   let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function (){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    diminuiFonteBotao.addEventListener('click', function (){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
    
    alternaContraste.addEventListener('click'), function (){
        document.body.classList.toggle('alto-contraste')
    }

    //Código omitido

    const contadores = document.querySelectorAll(".contador");
    const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
    let tempoAtual = new Date();
    
    contadores[0].textContent = tempoObjetivo1 - tempoAtual;

//Código omitido



})
ScrollReveal().reveal('Logotipo da Basketball Art', { delay: 500 });
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#treinos', { delay: 500 });
ScrollReveal().reveal('Basketball Art', { delay: 500 });
ScrollReveal().reveal('Treino de Arremessos', { delay: 500 });
ScrollReveal().reveal('Treinos de Dribles', { delay: 500 });
ScrollReveal().reveal('Treinos de Enterrada', { delay: 500 });
