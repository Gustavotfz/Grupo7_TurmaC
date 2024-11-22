window.onload = function () {
    setTimeout(() => {
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.padding = '2rem';
        popup.style.backgroundColor = '#fff';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        popup.style.borderRadius = '8px';
        popup.style.textAlign = 'center';
        popup.style.zIndex = '1000';

        popup.innerHTML = `
            <h2>Aviso!</h2>
            <p>A umidade da plantação passou dos 15%!</p>
            <button id="closePopup" style="padding: 0.5rem 1rem; background-color: #4CAF50; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Fechar
            </button>
        `;

        document.body.appendChild(popup);

        document.getElementById('closePopup').onclick = function () {
            popup.remove();
        };
    }, 5000);
};