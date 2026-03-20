document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Credenciais simples para demonstração (em um sistema real, use autenticação segura)
    const validUsername = 'admin';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        message.style.color = 'green';
        message.textContent = 'Login bem-sucedido!';
        // Armazenar estado de login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        // Redirecionar para a página de perfil
        window.location.href = 'profile.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuário ou senha incorretos.';
    }
});