// Faz login do usuário verificando e-mail e senha
function logarUsuario(email, senha) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");  // Busca lista de usuários no localStorage

    const usuario = usuarios.find(u => u.email === email && u.senha === senha);  // Procura um usuário com os dados informados

    if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));// Salva o usuário logado e redireciona para a home
        window.location.href = "home.html";
    } else {
        alert("E-mail ou senha inválidos!");// Se não encontrar exibe e-mail invalido 
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário (não recarrega a página)

    const email = document.getElementById("email").value; // Pega o valor do campo de e-mail
    const senha = document.getElementById("senha").value; // Pega o valor do campo de senha

    logarUsuario(email, senha); // Chama a função que verifica se o usuário existe
});
