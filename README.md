# DNC Games E-Commerce

Este repositório consiste do desenvolvimento de uma aplicação do tipo e-commerce com foco no mercado de jogos eletrônicos, feito basicamente em React JS. Abaixo iremos descrever em formas de tópicos o que foi realizado no desenvolvimento.

## Autores

- Abner Colman ([@abnercoolman](https://www.github.com/abnercoolman));
- Alan Felipe ([@AlanFelpVaz](https://github.com/AlanFelpVaz));
- Bruno Henrique ([@BrunoHenrique80](https://github.com/BrunoHenrique80));
- Iago Cleber ([@gomescosta](https://github.com/gomescosta));
- Juliano dos Santos ([@Julianods11](https://github.com/Julianods11));
- Renato Silva ([@rcsilva96](https://github.com/rcsilva96)).

## 1. Objetivo

Desenvolver uma plataforma online, com foco em interação, para compra de jogos e vídeo games.

## 2. Estruturação do Desenvolvimento da Plataforma

### 2.1. Divisão do projeto

Divisão do projeto realizado por meio das seguintes páginas (*“views”*) e seus respectivos elementos componentizados (*“components”*):

- **Login:**
  - Header;
  - Login.
- **Home:**
  - HeaderMenu;
  - Banner;
  - ProductsCard;
  - Footer.
- **Products:**
  - HeaderMenu;
  - ProductsDetail;
  - Footer;
  - ModalMyCart;
  - ModalCheckout.

### 2.2. Prazos

Prazo proposto para desenvolvimento completo do projeto: 8 semanas (2 meses):
- **Início:** 27/02/2023.
- **Final:** 25/04/2023.

## 3. Funcionalidades

- Validação de informações de acesso.
- Catálogo de produtos com banner estático.
- Informações detalhadas sobre cada produto.
- Interface para finalização de compras com preenchimento de dados pessoais.

## 4. Tecnologias Utilizadas
- [ReactJS](https://react.dev/);
- [React Router](https://reactrouter.com/en/main);
- [Sass](https://sass-lang.com/);
- *[“Mock”](https://www.geeksforgeeks.org/software-engineering-mock-introduction/)* para simulação de chamadas de APIs.

## 5. Instruções de Instalação e Execução

Antes de tudo! É necessário que você tenha o [Node.js](https://nodejs.org/en) instalado em sua máquina, pois utilizaremos o **```npm```**, ou Node Package Manager (Gerenciador de Pacotes do Node). Agora, siga os seguintes passos para ver a plataforma em funcionamento:

1.	Clone este repositório para o seu computador.
2.	Navegue até a pasta do projeto (Ex.: **```cd C:\Projeto-E-Commerce-T1G05-main```**);
3.	Utilize o comando: **```npm install```**, para instalar o gerenciador da nossa aplicação;
4.	Agora use o comando **```npm run dev```**, para poder habilitar a aplicação para ser vista rodando no navegador.
5.	Se você estiver no terminal do [VSCode](https://code.visualstudio.com/) a URL para acesso será mostrada com a seguinte forma: ```http://localhost:3000```, basta somente clicar. O número 3000 é a porta TCP padrão de acesso ao servidor local, mas pode aparecer outro número para você. Não se preocupe funcionará da mesma forma!