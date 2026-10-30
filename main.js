// Destaca no menu o link da seção que está visível na tela.

const links = document.querySelectorAll('.menu a[href^="#"]');
const secoes = document.querySelectorAll("main section[id]");

const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;

            links.forEach((link) => {
                const ativo = link.getAttribute("href") === `#${entrada.target.id}`;
                if (ativo) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        });
    },
    // considera "visível" a seção que cruza a faixa do meio da tela
    { rootMargin: "-40% 0px -55% 0px" }
);

secoes.forEach((secao) => observador.observe(secao));