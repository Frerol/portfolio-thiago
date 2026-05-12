document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Menu Responsivo (Mobile) ---
    // Esta seção lida com a exibição do menu de navegação em telas menores (hambúrguer)
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');

    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            // Alterna a classe 'show' que controla a visibilidade no CSS
            navMenu.classList.toggle('show');
        });
    }

    // --- 2. Alternador de Tema (Dark Mode) ---
    // Implementa a troca de cores do site e persiste a escolha no navegador do usuário
    const themeToggle = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Aplica o tema salvo anteriormente, se houver
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.textContent = 'Modo Claro';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Alterna a classe dark-mode no body, que altera as variáveis CSS
            document.body.classList.toggle('dark-mode');
            
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
                themeToggle.textContent = 'Modo Claro';
            } else {
                themeToggle.textContent = 'Modo Escuro';
            }
            
            // Salva a preferência para visitas futuras
            localStorage.setItem('theme', theme);
        });
    }

    // --- 3. Validação do Formulário de Contato ---
    // Garante que os dados inseridos pelo usuário são válidos antes de "enviar"
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o recarregamento da página
            
            let isValid = true;
            
            // Captura os elementos do formulário
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            // Expressão Regular para validação de formato de e-mail
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            // Validação do campo Nome: verifica se não está vazio
            if (name.value.trim() === '') {
                showError('name-error', 'Por favor, preencha seu nome.');
                isValid = false;
            } else {
                hideError('name-error');
            }
            
            // Validação do campo E-mail: verifica formato via Regex
            if (!emailRegex.test(email.value.trim())) {
                showError('email-error', 'Por favor, insira um e-mail válido.');
                isValid = false;
            } else {
                hideError('email-error');
            }
            
            // Validação do campo Mensagem: verifica se não está vazio
            if (message.value.trim() === '') {
                showError('message-error', 'Por favor, escreva uma mensagem.');
                isValid = false;
            } else {
                hideError('message-error');
            }
            
            // Se todas as validações passarem
            if (isValid) {
                // Simulação de envio com feedback visual ao usuário
                alert('Mensagem enviada com sucesso! (Simulação)');
                
                // Limpa os campos do formulário após o sucesso
                contactForm.reset();
                
                // Oculta eventuais mensagens de erro remanescentes
                hideError('name-error');
                hideError('email-error');
                hideError('message-error');
            }
        });
    }

    // Funções auxiliares para manipulação de mensagens de erro na tela
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    }

    function hideError(id) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }
});
