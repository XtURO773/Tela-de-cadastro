// Exibe a mensagem de boas-vindas com o nome do usuário
function mostrarUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const mensagem = document.getElementById("mensagemBoasVindas");

    if (usuario) {
        mensagem.textContent = `Bem-vindo, ${usuario.nome}!`;// Se estiver logado, mostra o nome
    } else {
        window.location.href = "login.html"; // Se não estiver logado, vai pra tela de login
    }
}

// Remove o usuário logado e redireciona para a tela inicial
function logout() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "tela-inicial.html";
}
