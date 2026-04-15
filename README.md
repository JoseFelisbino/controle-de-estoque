# 📦 Sistema de Controle de Estoque

Sistema completo de gerenciamento de estoque com autenticação, controle de produtos, categorias e movimentações, desenvolvido com foco em boas práticas de arquitetura e segurança.

---

## 🚀 Funcionalidades

* 🔐 Autenticação com JWT (access + refresh token)
* 👤 Isolamento de dados por usuário
* 📂 CRUD de categorias
* 📦 CRUD de produtos
* 🔄 Movimentações de estoque (entrada/saída)
* 🚫 Validação de estoque (não permite negativo)
* ⚠️ Alerta visual de estoque baixo
* 📊 Dashboard com métricas
* 🪟 Interface com modais (sem reload)

---

## 🧱 Arquitetura

### Backend

* Arquitetura: **MVC moderno**
* Node.js + Express
* Prisma ORM
* PostgreSQL
* Autenticação com JWT + cookies httpOnly

### Frontend

* Arquitetura: **MVA (Model - View - Adapter)**
* HTML, CSS e JavaScript puro
* Interface responsiva
* Comunicação via Fetch API

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* bcrypt (hash de senha)
* JWT (autenticação)
* cookie-parser
* CORS

### Frontend

* HTML5
* CSS3 (modular + variáveis)
* JavaScript (ES Modules)

### DevOps

* Git / GitHub
* Render (backend)
* Vercel (frontend)

---

## 🔐 Segurança

* Senhas criptografadas com bcrypt
* JWT armazenado em cookies httpOnly
* Refresh token para renovação de sessão
* CORS configurado
* Proteção de rotas privadas
* Isolamento de dados por usuário

---

## 📊 Regras de Negócio

* ❌ Não permite saída maior que o estoque disponível
* 🔄 Atualização automática do estoque
* 📉 Alerta para produtos com estoque baixo
* 🔐 Cada usuário acessa apenas seus próprios dados

---

## 📁 Estrutura do Projeto

```
controle-de-estoque/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── config/
│   └── prisma/
│
├── frontend/
│   ├── pages/
│   ├── css/
│   ├── js/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── views/
│   │   └── adapters/
```

---

## ⚙️ Como rodar o projeto

### 🔹 Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

---

### 🔹 Frontend

Abra com Live Server ou navegador:

```bash
frontend/pages/login.html
```

---

## 🌐 Deploy

* Backend: Render
* Banco de dados: PostgreSQL (Neon/Supabase)
* Frontend: Vercel

---

## 📌 Melhorias futuras

* ✏️ Edição de produtos via modal
* 📊 Gráficos no dashboard
* 🔍 Filtros e busca
* 📄 Paginação
* 🎨 UI mais avançada (estilo SaaS)

---

## 👨‍💻 Autor

Desenvolvido por **José Luiz Vitorino Felisbino**

---

## 📄 Licença

Este projeto está sob a licença MIT.
