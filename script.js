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


// Inicialização do Swiper para a Galeria
// Inicialização do Swiper para a Galeria
document.addEventListener("DOMContentLoaded", function() {
  new Swiper('.mySwiper', {
      // Habilita a navegação com os botões
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      // Habilita a paginação (os pontinhos)
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      // Loop infinito
      loop: true,
      // Configuração para passar automaticamente
      autoplay: {
        delay: 1200 , // 7000 milissegundos = 7 segundos
        disableOnInteraction: false, // para que a reprodução não pare quando o usuário interagir
      },
      // Opções responsivas
      breakpoints: {
          // para telas menores que 640px
          0: {
              slidesPerView: 1,
              spaceBetween: 10,
          },
          // para telas de 768px ou maiores
          768: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          // para telas de 1024px ou maiores
          1024: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      },
  });
});