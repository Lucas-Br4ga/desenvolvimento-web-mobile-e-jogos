# 📚 Projeto Perfil do Aluno

Bem-vindo ao **Projeto Perfil do Aluno**,um projeto acadêmico desenvolvido em três fases, cada uma em uma branch separada (Fase-01, Fase-02, Fase-03). Este projeto tem como objetivo criar e aprimorar uma página web que exibe
o perfil de um aluno, utilizando HTML, CSS e JavaScript de forma progressiva.

## 🌟 Estrutura do Projeto

### 📋 Branches do Projeto

**⚠️ IMPORTANTE: Cada fase está em uma branch separada!**

| Branch    | Descrição                           | Tecnologias                      |
|-----------|-------------------------------------|----------------------------------|
| `Fase-01` | Estrutura básica em HTML            | HTML                             |
| `Fase-02` | Estilização + Interatividade básica | HTML + CSS + JavaScript          |
| `Fase-03` | Interatividade avançada             | HTML + CSS + JavaScript avançado |

### 📁 Estrutura de Pastas (Todas as Fases)

```
projeto-perfil-aluno/
├── imagens/
│   ├── Rimuro-01.webp
│   ├── Rimuro-02.webp
│   └── ... (outras fotos)
└── src/
    ├── perfil_do_aluno.html
    ├── style.css (a partir da Fase-02)
    └── script.js (a partir da Fase-02)
```

---

## 🎯 Fase-01 (Branch: `Fase-01`)

### 📝 Descrição

A **Fase-01** é a base do projeto, onde criamos uma página de perfil utilizando **apenas HTML**. Esta fase foca na
estrutura semântica e na apresentação das informações de forma organizada, sem qualquer estilização visual.

### ✅ Requisitos Atendidos

- ✅ **Nome Completo** - Exibido como título principal
- ✅ **RA (Registro Acadêmico)** - Número de identificação do aluno
- ✅ **Curso e Período Atual** - Informações acadêmicas atuais
- ✅ **Endereço Completo** - Localização residencial
- ✅ **E-mail** - Contato eletrônico
- ✅ **Foto de Perfil** - Imagem representativa do aluno
- ✅ **UCs já cursadas** - Lista de Unidades Curriculares concluídas
- ✅ **Perfil Pessoal** - Hobbies, família, esportes, interesses
- ✅ **Perfil Profissional/Acadêmico** - Experiências e objetivos
- ✅ **Links para Redes Sociais** - LinkedIn, GitHub, etc.

### 🔧 Tecnologias Utilizadas

- **HTML5** - Estruturação semântica da página

### 💻 Estrutura HTML

```html
<h1>Dados Pessoais</h1>
<p><strong>Nome:</strong> Rimuru Tempest</p>
<p><strong>RA:</strong> 135792468</p>
<p><strong>Endereço:</strong> Capital de Tempest, Grande Floresta de Jura</p>
<img src="../imagens/Rimuro-01.webp" alt="Foto de Rimuru Tempest">
```

### 🚀 Como Acessar a Fase-01

```bash
# Clone o repositório
git clone <URL_DO_REPOSITÓRIO>

# Mude para a branch Fase-01
git checkout Fase-01

# Abra o arquivo HTML no navegador
open src/perfil_do_aluno.html
```

---

## 🎨 Fase-02 (Branch: `Fase-02`)

### 📝 Descrição

A **Fase-02** eleva o projeto adicionando **CSS para estilização visual** e **JavaScript para interatividade básica**. A
página ganha uma identidade visual moderna e uma galeria de fotos interativa, semelhante aos portais de e-commerce.

### ✅ Requisitos Atendidos

- ✅ **Estilização com CSS Externo**
    - Paleta de cores: tons de azul (#F2F9FB, #E6F6FB, #A4D9F6, #1A3B5D)
    - Fontes modernas (Segoe UI)
    - Bordas arredondadas e sombras sutis
    - Layout responsivo

- ✅ **Reestruturação com Tabelas**
    - Organização em `<table>` para melhor clareza
    - Seções bem definidas e organizadas

- ✅ **Galeria de Fotos Interativa**
    - Múltiplas fotos de perfil
    - Sistema de navegação por miniaturas
    - Transições suaves com JavaScript

### 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura reorganizada com tabelas
- **CSS3** - Estilização visual completa
- **JavaScript** - Interatividade da galeria

### 💻 Exemplo de Código

**HTML (Galeria):**

```html

<div class="bloco-slime-e-bolinhas">
    <img class="slime" src="../imagens/Rimuro-01.webp" alt="Foto de perfil">
    <div class="grupo-bolinhas">
        <img class="bolinha" src="../imagens/Rimuro-01.webp" onclick="mudaImagens(1)">
        <img class="bolinha" src="../imagens/Rimuro-02.webp" onclick="mudaImagens(2)">
    </div>
</div>
```

**JavaScript:**

```javascript
function mudaImagens(id) {
    const slime = document.querySelector('.slime');
    slime.src = `../imagens/Rimuro-0${id}.webp`;
}
```

### 🚀 Como Acessar a Fase-02

```bash
# Mude para a branch Fase-02
git checkout Fase-02

# Abra o arquivo HTML no navegador
open src/perfil_do_aluno.html
```

---

## ⚡ Fase-03 (Branch: `Fase-03`)

### 📝 Descrição

A **Fase-03** representa o ápice do projeto, incorporando **interatividade avançada com JavaScript**. Esta fase adiciona
funcionalidades complexas como validações de formulário, manipulação dinâmica do DOM e recursos de edição em tempo real.

### ✅ Requisitos Atendidos

- ✅ **Inserção Dinâmica de UCs**
    - Botão para adicionar novas Unidades Curriculares
    - Entrada via `prompt()` do usuário
    - Atualização automática da lista

- ✅ **Ordenação Manual das UCs**
    - Botões de setas (↑/↓) para cada UC
    - Reordenação em tempo real
    - Manipulação direta do DOM

- ✅ **Validação de CPF**
    - Máscara automática: `ddd.ddd.ddd-dd`
    - Validação em tempo real
    - Formatação automática durante digitação

- ✅ **Validação de E-mail**
    - Verificação de formato válido
    - Feedback imediato ao usuário
    - Regex para validação robusta

- ✅ **Edição de Perfis**
    - Edição direta no HTML
    - Detecção de mudanças
    - Atualização dinâmica do conteúdo

### 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura com campos interativos
- **CSS3** - Estilização dos novos elementos
- **JavaScript ES6+** - Interatividade avançada e manipulação do DOM

### 💻 Exemplos de Código Avançado

**HTML (Lista de UCs):**

```html

<ul id="lista-UC">
    <li>
        <p>Negociação e Diplomacia Interespécies</p>
        <button class="seta-cima">↑</button>
        <button class="seta-baixo">↓</button>
    </li>
</ul>
<button id="add-UC">Adicionar Nova UC</button>
```

**JavaScript (Validação de CPF):**

```javascript
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    e.target.value = value;
});
```

**JavaScript (Adição de UC):**

```javascript
function adicionarUC() {
    const nomeUC = prompt("Digite o nome da nova Unidade Curricular (UC):");
    if (nomeUC) {
        const listaUC = document.getElementById('lista-UC');
        const novoLi = document.createElement('li');
        novoLi.innerHTML = `
            <p>${nomeUC}</p>
            <button class="seta-cima">↑</button>
            <button class="seta-baixo">↓</button>
        `;
        listaUC.appendChild(novoLi);
    }
}
```

### 🚀 Como Acessar a Fase-03

```bash
# Mude para a branch Fase-03
git checkout Fase-03

# Abra o arquivo HTML no navegador
open src/perfil_do_aluno.html
```

---

## 🔄 Como Navegar Entre as Fases

### Comandos Git Essenciais

```bash
# Ver todas as branches disponíveis
git branch -a

# Mudar para Fase-01
git checkout Fase-01

# Mudar para Fase-02
git checkout Fase-02

# Mudar para Fase-03
git checkout Fase-03

# Ver status atual
git status
```

### ⚠️ Importante ao Trocar de Branch

Cada branch contém uma versão diferente do projeto:

- **Fase-01**: Apenas arquivo HTML
- **Fase-02**: HTML + CSS + JavaScript básico
- **Fase-03**: HTML + CSS + JavaScript avançado

**Certifique-se de estar na branch correta antes de fazer alterações!**

---

## 🏆 Conclusão

O **Projeto Perfil do Aluno** demonstra uma progressão natural no aprendizado de desenvolvimento web:

1. **Fase-01** estabelece a base sólida com HTML semântico
2. **Fase-02** adiciona identidade visual e interatividade básica
3. **Fase-03** implementa funcionalidades avançadas e experiência do usuário rica

Cada fase está **isolada em sua própria branch**, permitindo comparação clara da evolução do projeto e facilitando a
avaliação individual de cada etapa do desenvolvimento.

**🎯 Lembre-se: Cada fase = Uma branch diferente!**