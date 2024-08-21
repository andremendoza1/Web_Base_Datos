function showInfo(name, info) {
    const modal = document.getElementById('infoModal');
    const modalText = document.getElementById('modalText');
    modalText.innerText = name + ': ' + info;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
