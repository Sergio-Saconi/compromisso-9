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

    /* ===== EXPANDING CARDS (PAINÉIS) ===== */
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Se já estiver aberto, navega para o link
            if (panel.classList.contains('active')) {
                const link = panel.getAttribute('data-url');
                if (link) {
                    window.location.href = link;
                }
            } else {
                // Se estiver fechado, abre o painel
                removeActiveClasses(panels);
                panel.classList.add('active');
            }
        });
    });

    function removeActiveClasses(allPanels) {
        allPanels.forEach(p => {
            p.classList.remove('active');
        });
    }

});