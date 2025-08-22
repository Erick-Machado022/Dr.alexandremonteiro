const hamburguer = document.getElementById('hamburguer');
const navList = document.querySelector('.nav-list');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active'); // ativa animação do X
  navList.classList.toggle('active'); // abre/fecha menu
});

/*Rolagem*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/*formulario */

// Função para enviar os dados do formulário para o WhatsApp
function sendToWhatsApp(event) {
    // Impede o envio padrão do formulário, que recarregaria a página
    event.preventDefault();

    // 1. Coleta os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // 2. Formata a mensagem
    const formattedMessage = `
Olá, gostaria de agendar uma consulta.

Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Serviço de Interesse: ${service}

Mensagem:
${message}
`;

    // 3. Codifica a mensagem para a URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    // 4. Cria a URL do WhatsApp com o número e a mensagem
    // Substitua o '5511999999999' pelo número de telefone da clínica, incluindo o código do país e DDD
    const phoneNumber = '5553991470443'; 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // 5. Redireciona o usuário para o WhatsApp
    window.open(whatsappUrl, '_blank');
}
