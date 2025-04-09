document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn");
    const produtosContainer = document.createElement("div");
  
    produtosContainer.id = "produtos";
    produtosContainer.style.display = "none";
    produtosContainer.innerHTML = `
      <h3 style="text-align: center;">Produtos em Destaque</h3>
      <div class="produtos-grid">
        <div class="produto">
          <img src="img/batom.jpg" alt="Batom Glam Matte">
          <h4>Batom Glam Matte</h4>
          <p>Acabamento aveludado e cores intensas.</p>
        </div>
        <div class="produto">
          <img src="img/sombra.jpg" alt="Paleta de Sombras Glow">
          <h4>Paleta de Sombras Glow</h4>
          <p>12 tons vibrantes e altamente pigmentados.</p>
        </div>
        <div class="produto">
          <img src="img/iluminador.jpg" alt="Iluminador Rose Gold">
          <h4>Iluminador Rose Gold</h4>
          <p>Brilho natural para todos os tons de pele.</p>
        </div>
        <div class="produto">
          <img src="img/base.jpg" alt="Base Líquida Perfect Skin">
          <h4>Base Perfect Skin</h4>
          <p>Cobertura média, efeito natural e longa duração.</p>
        </div>
      </div>
    `;
  
    const sobre = document.getElementById("sobre");
    sobre.appendChild(produtosContainer);
  
    let visivel = false;
  
    btn.addEventListener("click", () => {
      visivel = !visivel;
      produtosContainer.style.display = visivel ? "block" : "none";
      btn.textContent = visivel ? "Esconder Produtos" : "Mostrar Produtos";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form"); // Garante que pegamos o formulário
    const mensagem = document.getElementById("mensagem-sucesso");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Aqui você pode adicionar validações se quiser

        mensagem.style.display = "block"; // Mostra a mensagem
        mensagem.textContent = "Mensagem enviada com sucesso!";

        // Esconde a mensagem após 4 segundos
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 4000);

        form.reset(); // Limpa os campos do formulário
    });
});