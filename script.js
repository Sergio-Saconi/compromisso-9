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


const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        // Verifica se o painel clicado JÁ tem a classe 'active'
        if (panel.classList.contains('active')) {
            // Se já estiver aberto, pegamos o link que está no "data-link" ou no href interno
            const link = panel.getAttribute('data-url');
            if (link) {
                window.location.href = link;
            }
        } else {
            // Se não estiver aberto, primeiro removemos o active dos outros
            removeActiveClasses();
            // E adicionamos no que foi clicado
            panel.classList.add('active');
        }
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}