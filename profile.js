// Verificar se o usuário está logado
if (!localStorage.getItem('isLoggedIn')) {
    // Se não estiver logado, redirecionar para a página de login
    window.location.href = 'index.html';
} else {
    // Exibir o nome do usuário
    const username = localStorage.getItem('username');
    document.getElementById('usernameDisplay').textContent = username;
}

// Função de logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});