const conteudo = document.querySelector(".conteudo");

conteudo.addEventListener("click", function () {
  conteudo.style.backgroundColor = "blue";

  conteudo.style.color = "white";

  conteudo.style.borderColor = "orange";

  let larguraAtual = parseInt(window.getComputedStyle(conteudo).width);
  let alturaAtual = parseInt(window.getComputedStyle(conteudo).height);

  conteudo.style.width = larguraAtual + 2 + "px";
  conteudo.style.height = alturaAtual + 2 + "px";
});
