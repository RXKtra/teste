document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Usuários de exemplo (em uma aplicação real, você usaria um backend)
    const users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' }
    ];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = 'manutencao.html'; // Redirecionar para o dashboard ou página protegida
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
