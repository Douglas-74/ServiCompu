document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    const number = '593959686257';
    const message = encodeURIComponent("Hola! Necesito información sobre este producto...");
    const whatsappLink = document.getElementById('whatsapp-link');

    whatsappLink.href = `https://wa.me/${number}?text=${message}`;
})