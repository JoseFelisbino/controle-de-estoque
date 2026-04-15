export function showModal(message) {
  const modal = document.createElement("div");

  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <p>${message}</p>
        <button id="closeModal">Fechar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("closeModal").onclick = () => {
    modal.remove();
  };
}