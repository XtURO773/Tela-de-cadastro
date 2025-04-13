function validarEmail(email) {
    return email.includes('@') && email.includes('.');
}
function validarSenha(senha) {
    return senha.length >= 6;
}
