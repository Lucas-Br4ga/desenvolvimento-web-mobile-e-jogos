function mudaImagens(id) {
    const slime = document.querySelector('.slime');
    if (slime) {
        slime.src = `../Imagens/Rimuro-0${id}.webp`;
    } else {
        console.error("Erro: Elemento '.slime' não encontrado para mudar a imagem.");
    }
}

function configurarCPF() {
    const cpf = document.getElementById('cpf');
    if (cpf) {
        cpf.addEventListener('input', () => {
            let valor = cpf.value.replace(/\D/g, '');
            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            cpf.value = valor;
        });
        cpf.addEventListener('blur', () => {
            const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            if (!regexCpf.test(cpf.value) && cpf.value.trim() !== '') {
                alert("CPF inválido. Por favor, insira um CPF no formato 000.000.000-00.");
            }
        });
    } else {
        console.error("Erro: Elemento 'cpf' não encontrado para configurar CPF.");
    }
}

function validarEmail() {
    const email = document.getElementById('email');
    if (email) {
        email.addEventListener('blur', () => {
            const valorEmail = email.value.trim();
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regexEmail.test(valorEmail) && valorEmail !== '') {
                alert('E-mail inválido! Por favor, insira um e-mail no formato correto (ex: seuemail@dominio.com).');
            }
        });
    } else {
        console.error("Erro: Elemento 'email' não encontrado para validar e-mail.");
    }
}

function adicionarUC() {
    const nomeUC = prompt("Digite o nome da nova Unidade Curricular (UC):");
    if (nomeUC) {
        const listaUC = document.getElementById('lista-UC');
        if (listaUC) {
            const novoLi = document.createElement('li');
            novoLi.innerHTML = `<p>${nomeUC}</p><button class="seta-cima">↑</button><button class="seta-baixo">↓</button>`;
            listaUC.appendChild(novoLi);
            console.log(`Nova UC adicionada: "${nomeUC}"`);
        } else {
            console.error("Erro: Elemento 'lista-UC' não encontrado no DOM para adicionar UC.");
        }
    }
}

function configurarOrdenacaoUC() {
    const listaUC = document.getElementById('lista-UC');
    if (listaUC) {
        listaUC.addEventListener('click', (event) => {
            const botaoClicado = event.target;
            const itemLista = botaoClicado.closest('li');
            if (!itemLista) return;
            if (botaoClicado.classList.contains('seta-cima')) {
                const itemAnterior = itemLista.previousElementSibling;
                if (itemAnterior) {
                    listaUC.insertBefore(itemLista, itemAnterior);
                    console.log("UC movida para cima.");
                }
            } else if (botaoClicado.classList.contains('seta-baixo')) {
                const proximoItem = itemLista.nextElementSibling;
                if (proximoItem) {
                    listaUC.insertBefore(proximoItem, itemLista);
                    console.log("UC movida para baixo.");
                }
            }
        });
    } else {
        console.error("Erro: Elemento 'lista-UC' não encontrado para configurar ordenação de UCs.");
    }
}

function configurarEdicaoPerfis() {
    const perfilPessoal = document.getElementById('perfil-pessoal');
    const perfilProfissional = document.getElementById('perfil-profissional');
    if (perfilPessoal) {
        perfilPessoal.addEventListener('blur', () => {
            console.log('Perfil Pessoal atualizado:', perfilPessoal.textContent.trim());
        });
    } else {
        console.error("Erro: Elemento 'perfil-pessoal' não encontrado para configurar edição.");
    }
    if (perfilProfissional) {
        perfilProfissional.addEventListener('blur', () => {
            console.log('Perfil Profissional/Acadêmico atualizado:', perfilProfissional.textContent.trim());
        });
    } else {
        console.error("Erro: Elemento 'perfil-profissional' não encontrado para configurar edição.");
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado. Inicializando funcionalidades...");
    configurarCPF();
    validarEmail();
    const botaoAddUC = document.getElementById('add-UC');
    if (botaoAddUC) {
        botaoAddUC.addEventListener('click', adicionarUC);
    } else {
        console.error("Erro: Botão 'add-UC' não encontrado para configurar o evento de clique.");
    }
    configurarOrdenacaoUC();
    configurarEdicaoPerfis();
});