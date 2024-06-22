document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const whatsappNumber = '5584996938872';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Nome: ' + nome + '\nEmail: ' + email + '\nMensagem: ' + mensagem)}`;

    window.open(whatsappURL, '_blank'); // Abre o WhatsApp em uma nova aba
});
