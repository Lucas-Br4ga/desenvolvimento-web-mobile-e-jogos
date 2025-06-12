function mudaImagens(id){
    const slime =document.querySelector('.slime');
    slime.src = `../Imagens/Rimuro-0${id}.webp`
}

function FormatarCPF(){
    const cpf = document.getElementById('cpf');
    
    cpf.addEventListener('input', () => {
      let value = cpf.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);

      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      cpf.value = value;
    });

    cpf.addEventListener('blur', () => {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!cpfRegex.test(cpf.value)) {
          alert("CPF inválido")
      }
    });
}

function FormatarGmail() {
  const email = document.getElementById('email');

  email.addEventListener('blur', () => {
    const emailValor = email.value.trim();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!gmailRegex.test(emailValor)) {
      alert('E-mail inválido!');
    }
  });
}



// O restante do seu código JavaScript (mudaImagens, configurarCPF, validarEmail) permanece o mesmo acima.

// --- Novas Funções para UCs ---

/**
 * Adiciona uma nova UC à lista usando um prompt.
 */
function adicionarUC() {
    const nomeUC = prompt("Digite o nome da nova Unidade Curricular (UC):");

    if (nomeUC) { // Garante que o usuário digitou algo
        const listaUcs = document.getElementById('lista-ucs');
        if (listaUcs) {
            const novoLi = document.createElement('li');
            // Você pode adicionar um ID ou data-uc-id para a nova UC se quiser controlá-la depois
            // Exemplo: novoLi.setAttribute('data-uc-id', listaUcs.children.length + 1);

            novoLi.innerHTML = `<p>${nomeUC}</p><button class="move-up">↑</button><button class="move-down">↓</button>`;
            listaUcs.appendChild(novoLi);
            console.log(`Nova UC adicionada: "${nomeUC}"`); // Para debug no console
        } else {
            console.error("Elemento 'lista-ucs' não encontrado no DOM.");
        }
    }
}

/**
 * Configura os listeners para os botões de mover UC para cima/baixo.
 */
function configurarOrdenacaoUCs() {
    const listaUcs = document.getElementById('lista-ucs');

    if (listaUcs) {
        listaUcs.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const listItem = clickedButton.closest('li'); // Encontra o <li> mais próximo

            if (!listItem) return; // Se não clicou em um <li> ou em um botão dentro dele, sai

            if (clickedButton.classList.contains('move-up')) {
                // Mover para cima
                const previousListItem = listItem.previousElementSibling;
                if (previousListItem) { // Se existe um item anterior
                    listaUcs.insertBefore(listItem, previousListItem);
                    console.log("UC movida para cima.");
                }
            } else if (clickedButton.classList.contains('move-down')) {
                // Mover para baixo
                const nextListItem = listItem.nextElementSibling;
                if (nextListItem) { // Se existe um item posterior
                    listaUcs.insertBefore(nextListItem, listItem);
                    console.log("UC movida para baixo.");
                }
            }
        });
    } else {
        console.error("Elemento 'lista-ucs' não encontrado no DOM.");
    }
}

// Chamar as novas funções quando a página carregar
window.addEventListener('load', () => {
    // Suas funções existentes
    configurarCPF();
    validarEmail();

    // Novas funções
    const addButton = document.getElementById('add-uc-btn');
    if (addButton) {
        addButton.addEventListener('click', adicionarUC);
    } else {
        console.error("Botão 'add-uc-btn' não encontrado no DOM.");
    }

    configurarOrdenacaoUCs();
});






window.addEventListener('load', FormatarCPF);
window.addEventListener('load', FormatarGmail);
