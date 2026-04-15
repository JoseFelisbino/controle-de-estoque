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

  setTimeout(() => {
    modal.remove();
  }, 2000);
}

export function showProdutoModal(onSubmit) {
  const modal = document.createElement("div");

  modal.innerHTML = `
    <div class="modal-overlay">
      <div class="modal">
        <h2>Novo Produto</h2>

        <input id="nome" placeholder="Nome" />
        <input id="preco" placeholder="Preço" />
        <input id="estoque" placeholder="Estoque" />
        <input id="categoriaId" placeholder="Categoria ID" />

        <button id="salvar">Salvar</button>
        <button id="fechar">Cancelar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  document.getElementById("salvar").onclick = () => {
    const data = {
      nome: document.getElementById("nome").value,
      preco: Number(document.getElementById("preco").value),
      quantidade_estoque: Number(document.getElementById("estoque").value),
      categoriaId: Number(document.getElementById("categoriaId").value)
    };

    onSubmit(data);
    modal.remove();
  };

  document.getElementById("fechar").onclick = () => modal.remove();
}