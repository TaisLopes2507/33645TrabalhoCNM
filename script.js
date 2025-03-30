function mostrarDetalhes(produto) {
    // Exibe os detalhes do produto na página
    const detalheDiv = document.getElementById('detalhes-produto');
    detalheDiv.textContent = "Você selecionou: " + produto;
    detalheDiv.style.display = "block"; // Torna a div visível
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const mensagemSucesso = document.createElement('div');
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    mensagemSucesso.style.color = "green";
    document.body.appendChild(mensagemSucesso);
    
    document.querySelector("form").reset();
});

document.getElementById("mostrar-produtos").addEventListener("click", function() {
    document.getElementById("produtos").style.display = "block";
});
