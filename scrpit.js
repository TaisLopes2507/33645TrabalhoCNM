function mostrarDetalhes(produto) {
    alert("Você selecionou: " + produto);
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    document.querySelector("form").reset();
});
