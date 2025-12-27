document.addEventListener("DOMContentLoaded", function () {
    const btnProxima = document.getElementById("btnProxima");
    const btnAnterior = document.getElementById("btnAnterior");

    if (btnProxima) {
        btnProxima.addEventListener("click", function () {
            window.location.href = "proxima.html";
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
document.getElementById("proximaPagina").addEventListener("click", function(){
    window.Location.href="file:///C:/Users/pinduka2/Desktop/sit%20pinduka/poxima.html;"
});
let indice= 0;
function mudarImagem(n){
    const imagens = document.querySelectorAll('.imagens img');
    indice += n;
    if(indice >= imagens.length){
        indice= 0;
    } else if(indice < 0){
        indice = imagens.length -1;
    }
    const deslocamento = -indice * 100; // Muda a imagem
    document.querySelector('.imagens').style.transform = `translateX(${deslocamento}%)`;
}
