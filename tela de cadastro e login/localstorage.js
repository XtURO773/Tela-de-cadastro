// Verifica se o e-mail tem "@" e "."
function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Verifica se a senha tem pelo menos 6 caracteres
function validarSenha(senha) {
    return senha.length >= 6;
}

// Cadastra novo usuário no localStorage
function cadastrarUsuario(nome, email, senha) {
    if (!validarEmail(email)) {
        alert("E-mail inválido!");
        return;
    }

    if (!validarSenha(senha)) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.push({ nome, email, senha });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("usuarioLogado", JSON.stringify({ nome }));

    alert("Usuário cadastrado com sucesso!");
    mostrarUsuarioLogado();

    window.location.href = "login.html";

}

// Mostra a lista de usuários cadastrados
function listarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    if (!lista) return;

    lista.innerHTML = "";

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.forEach((usuario, index) => {
        const item = document.createElement("div");
        item.innerHTML = `
            ${usuario.nome} (${usuario.email})
            <button onclick="removerUsuario(${index})">Remover</button>
        `;
        lista.appendChild(item);
    });
}

// Remove usuário pelo índice
function removerUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    listarUsuarios();
}

// Mostra mensagem de boas-vindas ao usuário logado
function mostrarUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const div = document.getElementById("usuarioLogado");
}

// Faz logout e limpa a área do usuário
function logout() {
    localStorage.removeItem("usuarioLogado");

    const div = document.getElementById("usuarioLogado");
    if (div) div.innerHTML = "";
}

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede que o formulário recarregue a página

    const nome = document.getElementById("nome").value;  
    const email = document.getElementById("email").value; 
    const senha = document.getElementById("senha").value; 

    cadastrarUsuario(nome, email, senha); // Chama a função para salvar o novo usuário
    listarUsuarios(); // Atualiza a lista de usuários na tela (opcional, depende da função)
});

