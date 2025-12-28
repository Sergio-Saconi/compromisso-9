console.log("script.js carregado");

document.addEventListener("DOMContentLoaded", function () {

    /* ===== BOTÕES DE NAVEGAÇÃO ===== */
    const btnProxima = document.getElementById("btnProxima");
    const btnAnterior = document.getElementById("btnAnterior");
    const proximaPagina = document.getElementById("proximaPagina");

    if (btnProxima) {
        btnProxima.addEventListener("click", () => {
            window.location.href = "proxima.html";
        });
    }

    if (btnAnterior) {
        btnAnterior.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (proximaPagina) {
        proximaPagina.addEventListener("click", () => {
            window.location.href = "proxima.html";
        });
    }

    /* ===== CALENDÁRIO NO RODAPÉ ===== */
    const spanData = document.getElementById("data-completa");

    if (spanData) {
        const agora = new Date();
        const opcoes = {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        };
        spanData.textContent = agora.toLocaleDateString('pt-BR', opcoes);
    }

});
