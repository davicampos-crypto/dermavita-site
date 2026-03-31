# 🩺 DermaVita – Landing Page do Dr. Rafael Monteiro Azevedo

![Status](https://img.shields.io/badge/status-concluído-brightgreen) ![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%7C%20Firestore-orange) ![Responsivo](https://img.shields.io/badge/Responsivo-Sim-blue)

Landing page profissional para captação de pacientes, agendamento de consultas e fortalecimento da autoridade do médico dermatologista **Dr. Rafael Monteiro Azevedo**. Desenvolvida como projeto de portfólio e teste admissional.

🔗 **Site em produção:** [https://webmedico-aa23b.web.app/](https://webmedico-aa23b.web.app/)

---

## 📌 Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do banco de dados (Firestore)](#estrutura-do-banco-de-dados-firestore)
- [Regras de segurança do Firestore](#regras-de-segurança-do-firestore)
- [Desafios notáveis e soluções](#desafios-notáveis-e-soluções)
- [Como executar localmente](#como-executar-localmente)
- [Deploy e hospedagem](#deploy-e-hospedagem)
- [Links úteis](#links-úteis)
- [Autor](#autor)

---

## 📖 Sobre o projeto

O site foi criado para o **Instituto DermaVita** e tem como objetivos:

- Apresentar o Dr. Rafael Monteiro Azevedo com credibilidade (CRM, RQE, SBD).
- Gerar leads qualificados através de formulários com gatilhos de urgência (20% de desconto).
- Exibir prova social: depoimentos, fotos de antes/depois, selos de confiança e integração com Doctoralia.
- Oferecer uma experiência responsiva e otimizada para dispositivos móveis.
- Permitir agendamento direto via WhatsApp ou formulário integrado com **Firebase Firestore**.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia             | Finalidade                               |
|------------------------|------------------------------------------|
| HTML5, CSS3, JS       | Estrutura, estilização e interatividade  |
| Firebase Firestore    | Banco de dados NoSQL (coleção `agendamentos`) |
| Firebase Hosting      | Hospedagem do site                       |
| Git / GitHub          | Versionamento e repositório remoto       |
| Leonardo.ai           | Geração de imagem realista do médico e logo |
| Gemini / ChatGPT / DeepSeek | Apoio na escrita de código e conteúdo |
| GitHub Copilot        | Correções rápidas de bugs                |

---

## 🗄️ Estrutura do banco de dados (Firestore)

**Coleção:** `agendamentos`

Cada documento contém os seguintes campos:

| Campo       | Tipo     | Descrição                          |
|-------------|----------|------------------------------------|
| `data`      | string   | Data do agendamento (DD/MM/AAAA)   |
| `email`     | string   | E-mail do paciente                 |
| `nome`      | string   | Nome completo                      |
| `telefone`  | string   | Telefone com DDD                   |
| `tratamento`| string   | Procedimento desejado              |

> ⚠️ Os dados são inseridos diretamente pelo formulário da landing page. Nenhuma autenticação é exigida para escrita (regras simplificadas para demonstração).

---

## 🔒 Regras de segurança do Firestore

Arquivo `firestore.rules` utilizado no projeto:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /agendamentos/{document} {
      allow read, write: if true;
    }
  }
}
```
## 🧠 Desafios notáveis e soluções
Desafio	Solução adotada

Desafio: Criação de imagens realistas do médico e da clínica
Solução: Uso do Leonardo.ai com prompts detalhados e ajustes manuais.
Desafio: Integração do Firebase Firestore com JavaScript puro	
Solução: Configuração do SDK Firebase, escrita dos dados via addDoc() e tratamento de erros com try/catch.

Desafio: Pop‑up com atraso de 12 segundos e exibição única por sessão
Solução: setTimeout combinado com sessionStorage para não repetir ao recarregar a página.

Desafio: Responsividade em dispositivos móveis – ajustes de layout e toque
Solução: Media queries, uso de unidades relativas (rem, vw) e botões com tamanho mínimo de 44px.

Desafio: Carrossel de depoimentos quebrado no celular – só apareciam 3 de 6 e não rolava
Solução: Substituição do CSS customizado por um carrossel baseado em overflow-x: auto com scroll-snap-type, garantindo rolagem horizontal nativa.

Desafio: Mudança de rumo no meio do projeto – comecei como site comum, depois virei landing page
Solução: Perdi apenas alguns minutos de retrabalho porque a estrutura HTML/CSS já estava modularizada. Basta reorganizar seções e adicionar os gatilhos de conversão.

## 🚀 O que eu faria com mais tempo (prioridades)

- **Área administrativa protegida** – painel com login (Firebase Auth) para o médico visualizar e gerenciar os agendamentos em tempo real.
- **Envio automático de e‑mail** – confirmação de agendamento e lembrete ao paciente (EmailJS ou SendGrid).
- **Validação avançada de formulário** – impedir dados inválidos (telefone curto, e-mail sem "@", data passada) com mensagens amigáveis.
- **Integração com Google Calendar** – paciente escolhe horário real disponível, sincronizado com a agenda do médico.
- **Rastreamento de conversões (GA4)** – entender quais CTAs e páginas geram mais agendamentos.
- **SEO e acessibilidade** – meta tags, schema.org, contraste, navegação por teclado e carrossel de depoimentos totalmente funcional no mobile.

> 💡 *Demais ideias (modo escuro, PWA, chatbot, blog completo) ficariam para versões posteriores.*

## 🚀 Como executar localmente
Clone o repositório

bash
git clone https://github.com/davicampos-crypto/dermavita-site.git
cd dermavita-site
Configure o Firebase

Crie um projeto no Firebase Console (ID do projeto: webmedico-aa23b)

Registre um aplicativo web e copie as credenciais (apiKey, authDomain, projectId, etc.)

Cole essas credenciais no arquivo js/firebase-config.js (substitua os placeholders)

Abra o projeto

Use o Live Server do VS Code ou qualquer servidor HTTP simples

Exemplo com Python: python -m http.server 8000

Teste o formulário de agendamento – os dados serão salvos no Firestore.

## 🌐 Deploy e hospedagem
O site está hospedado no Firebase Hosting e pode ser atualizado com um único comando:

bash
firebase deploy
URL de produção: https://webmedico-aa23b.web.app/

## 🔗 Links úteis
Repositório no GitHub

Site ao vivo

Firebase Console – projeto webmedico-aa23b

## 👨‍💻 Autor
Davi Dias Campos

18 anos, estudante de Desenvolvimento de Software Multiplataforma – FATEC Votorantim

GitHub: davicampos-crypto

Data de conclusão deste README: 31/03/2026

📝 Licença
Este projeto é de uso educacional e para fins de portfólio. Todos os direitos sobre os nomes, marcas e imagens são meramente ilustrativos (personagens fictícios).