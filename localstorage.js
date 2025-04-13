function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

function validarSenha(senha) {
    return senha.length >= 6;
}

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
}

function listarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    usuarios.forEach((usuario, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
            ${usuario.nome} (${usuario.email})
            <button onclick="removerUsuario(${index})">Remover</button>
            <button onclick="editarUsuario(${index})">Editar</button>
        `;
        lista.appendChild(div);
    });
}

function removerUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.splice(index, 1);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    listarUsuarios();
}

function editarUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios[index];
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    removerUsuario(index);
}

function mostrarUsuarioLogado() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const div = document.getElementById("usuarioLogado");

    if (usuario) {
        div.innerHTML = `
            <h2>Bem-vindo, ${usuario.nome}!</h2>
            <button onclick="logout()">Sair</button>
        `;
    }
}

function logout() {
    localStorage.removeItem("usuarioLogado");
    document.getElementById("usuarioLogado").innerHTML = "";
}
