/*CARROSSEL*/

const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvançar = document.getElementById("seta-avançar");
let imagemAtual = 0;

setaAvançar.addEventListener("click",function(){
    if (imagemAtual === imagens.length-1) {
        return;
    }
    esconderImagemAberta();
    
    imagemAtual++

    
    imagens[imagemAtual].classList.add("mostrar")
    mostrarOuEsconderSeta()
})

setaVoltar.addEventListener("click",function(){
    if (imagemAtual === 0) {
        return;
    }
    esconderImagemAberta();
    
    imagemAtual--

    imagens[imagemAtual].classList.add("mostrar")
    mostrarOuEsconderSeta()
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSeta(){
    const naoEAPrimeiraImagem = imagemAtual != 0;
    if (naoEAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade")
    } else {
        setaVoltar.classList.add("opacidade")
    }
    const chegouNaUltimaImagem = imagemAtual !=0 && imagemAtual === imagens.length-1;
    if (chegouNaUltimaImagem) {
        setaAvançar.classList.add("opacidade")
    } else {
        setaAvançar.classList.remove("opacidade")
    }
}