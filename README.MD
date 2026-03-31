# 🩺 DermaVita – Landing Page do Dr. Rafael Monteiro Azevedo

![Status](https://img.shields.io/badge/status-concluído-brightgreen) ![Firebase](https://img.shields.io/badge/Firebase-Hosting%20%7C%20Firestore-orange) ![Responsivo](https://img.shields.io/badge/Responsivo-Sim-blue)

Landing page profissional para captação de pacientes, agendamento de consultas e fortalecimento da autoridade do médico dermatologista **Dr. Rafael Monteiro Azevedo**. Desenvolvida como projeto de portfólio e teste admissional.

🔗 **Site em produção:** [https://webmedico-aa23b.web.app/](https://webmedico-aa23b.web.app/)

---

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Ficha do Médico](#ficha-do-médico)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do banco de dados (Firestore)](#estrutura-do-banco-de-dados-firestore)
- [Regras de segurança do Firestore](#regras-de-segurança-do-firestore)
- [Desafios notáveis e soluções](#desafios-notáveis-e-soluções)
- [O que eu faria com mais tempo](#o-que-eu-faria-com-mais-tempo)
- [Como executar localmente](#como-executar-localmente)
- [Deploy e hospedagem](#deploy-e-hospedagem)
- [Links úteis](#links-úteis)
- [Autor](#autor)

---

## Sobre o projeto

O site foi criado para o **Instituto DermaVita** e tem como objetivos:

- Apresentar o Dr. Rafael Monteiro Azevedo com credibilidade (CRM, RQE, SBD).
- Gerar leads qualificados através de formulários com gatilhos de urgência (20% de desconto).
- Exibir prova social: depoimentos, fotos de antes/depois, selos de confiança e integração com Doctoralia.
- Oferecer uma experiência responsiva e otimizada para dispositivos móveis.
- Permitir agendamento direto via WhatsApp ou formulário integrado com **Firebase Firestore**.

---

## Ficha do Médico

# Ficha Profissional – Dr. Rafael Monteiro Azevedo

## Identificação
- **Nome:** Rafael Monteiro Azevedo  
- **Título:** Médico Dermatologista  
- **Especialidade:** Dermatologia Clínica, Cirúrgica e Estética Avançada  
- **CRM-SP:** 000000  
- **RQE:** 11111  

## Formação Acadêmica
- **Graduação em Medicina** – Universidade Estadual de Campinas (UNICAMP)  
- **Residência Médica em Dermatologia** – Santa Casa de Misericórdia de São Paulo  
- **Especialização em Dermatologia Estética Avançada** – Instituição de referência (SBD / cursos de extensão)  

## Associações e Registros
- **Sociedade Brasileira de Dermatologia (SBD)** – Membro Titular  
- **Sociedade Brasileira de Dermatologia – Regional São Paulo (SBD-SP)** – Associado  
- **Registro de Qualificação de Especialista (RQE):** 11111  
- **CRM-SP:** 000000  

## Áreas de Atuação e Procedimentos
### Dermatologia Clínica
- Diagnóstico e tratamento de doenças da pele, cabelos e unhas  
- Dermatologia oncológica: prevenção e tratamento do câncer de pele  

### Dermatologia Estética Avançada
- **Rejuvenescimento facial:** Toxina Botulínica (Botox), Preenchimento com Ácido Hialurônico  
- **Bioestimuladores de colágeno:** Ácido Poli-L-Lático (Sculptra®), Hidroxiapatita de Cálcio (Radiesse®)  
- **Tecnologia a laser:** Manchas, cicatrizes de acne, textura da pele, flacidez e rejuvenescimento  
- **Outros procedimentos:** Microagulhamento, peelings químicos, fios de sustentação  

## Abordagem e Diferenciais
- **Atendimento humanizado:** Escuta ativa, explicação clara e personalização dos tratamentos  
- **Resultados naturais:** Foco em harmonização que respeita a individualidade de cada paciente  
- **Tecnologia de ponta:** Equipamentos modernos e protocolos baseados em evidências científicas  
- **Atualização contínua:** Participação em congressos nacionais e internacionais da área  
- **Segurança:** Procedimentos realizados com alto rigor ético e técnico  

## Local de Atendimento
**Instituto DermaVita**  
Av. Presidente Kennedy, 1500 – Conjunto 51  
Votorantim – SP  

## Contato
- **WhatsApp:** (15) 99999-9999  
- **E-mail:** contato@dermavita.com.br  
- **Horário:** Segunda a sexta, 9h às 19h | Sábado, 9h às 13h  

## Redes Sociais
- **Instagram:** @dermavita  
- **Facebook:** /dermavita  
- **LinkedIn:** /company/dermavita  
- **YouTube:** @dermavita  

## Informações Complementares
- **Idiomas:** Português (nativo), Inglês (fluente para leitura científica)  
- **Publicações:** Artigos em blogs e portais sobre rejuvenescimento, laser e bioestimuladores  
- **Docência:** Palestrante convidado em simpósios regionais da SBD-SP  

---

### Referencias de mercado
    - Site de referência: Dr. Rodrigo Barbosa - https://drrodrigobarbosa.com.br/
    - Lições aplicadas:
    - Estrutura de áreas de atuação e CTAs diretos
    - Prova social com avaliações e contadores
    - Abordagem de autoridade (selos, publicações, docência)
    - Uso de pop‑ups com ofertas limitadas
    - Adaptações: transformação do conceito em uma landing page única, com cores azuladas para transmitir confiança e serenidade, e foco em microinterações que melhoram a experiência do usuário.


## Tecnologias utilizadas

| Tecnologia             | Finalidade                               |
|------------------------|------------------------------------------|
| HTML5, CSS3, JS       | Estrutura, estilização e interatividade  |
| Firebase Firestore    | Banco de dados NoSQL (coleção `agendamentos`) |
| Firebase Hosting      | Hospedagem do site                       |
| Git / GitHub          | Versionamento e repositório remoto       |
| Leonardo.ai           | Geração de imagem realista do médico e logo |
| Gemini / ChatGPT / DeepSeek | Apoio na escrita de código e conteúdo |
| GitHub Copilot        | Correções rápidas de bugs                |

### Porque escolhi cada um
- HTML5, CSS3, JS - é o que eu estava acostumado a usar para criação de sites, e promove muita facilidade
- Firebase Firestore - Em minhas pesquisas descobri que é uma das opções mais simples de aplicar no meu projeto
- Firebase Hosting - é uma boa opção por estar no mesmo lugar que a firestore, implementei os dois juntos, fazendo tudo ficar mais simples
- Git / GitHub - eu já tinha meu GitHub e estou acostumado com o uso de Github.
- Leonardo.ai - pelas minhas pesquisas, a versão gratuita é uma das melhores, com o ônus de ter um limite curto de criação de imagens
- Gemini - Principal IA utilizada na criação do meu site, gostei muito pela velocidade de raciocínio e criação de imagens
- Chat GPT - Utilizei para codar apenas no começo, mas acabei gostando mais de outras IAs, durante o resto do projeto usei mais para criação de imagens e conselhos pontuais
- Deepseek - Utilizei para codar e corrigir Bugs no site em alguns momentos, ele se sobressai por ter um limite muito grande de texto em apenas uma solicitação, o que me ajudou em algumas ocasiões
- GitHub Copilot - Utilizado principalmente para correção de Bugs, se sobressai muito por ter acesso ao html completo
- Claude AI - De longe a melhor IA que utilizei, porem o uso foi muito curto e pontual, porque a versão gratuita aceita poucas solicitações

### Notas:
- HTML: Optei por codar o site inteiro em apenas um arquivo apenas por achar mais facil no começo
---

## Estrutura do banco de dados (Firestore)

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

## Regras de segurança do Firestore

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
## Desafios notáveis e soluções
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

## O que eu faria com mais tempo

- **Área administrativa protegida** – painel com login (Firebase Auth) para o médico visualizar e gerenciar os agendamentos em tempo real.
- **Envio automático de e‑mail** – confirmação de agendamento e lembrete ao paciente (EmailJS ou SendGrid).
- **Validação avançada de formulário** – impedir dados inválidos (telefone curto, e-mail sem "@", data passada) com mensagens amigáveis.
- **Integração com Google Calendar** – paciente escolhe horário real disponível, sincronizado com a agenda do médico.
- **Rastreamento de conversões (GA4)** – entender quais CTAs e páginas geram mais agendamentos.
- **SEO e acessibilidade** – meta tags, schema.org, contraste, navegação por teclado e carrossel de depoimentos totalmente funcional no mobile.

> 💡 *Demais ideias (modo escuro, PWA, chatbot, blog completo) ficariam para versões posteriores.*

## Como executar localmente
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

## Deploy e hospedagem
O site está hospedado no Firebase Hosting e pode ser atualizado com um único comando:

bash
firebase deploy
URL de produção: https://webmedico-aa23b.web.app/

## Links úteis
Repositório no GitHub

Site ao vivo

Firebase Console – projeto webmedico-aa23b

## Autor
Davi Dias Campos

18 anos, estudante de Desenvolvimento de Software Multiplataforma – FATEC Votorantim

GitHub: davicampos-crypto

Data de conclusão deste README: 31/03/2026

📝 Licença
Este projeto é de uso educacional e para fins de portfólio. Todos os direitos sobre os nomes, marcas e imagens são meramente ilustrativos (personagens fictícios).
