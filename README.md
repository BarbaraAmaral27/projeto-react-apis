# **Projeto React e API's**
O Projeto React e APIs é um site de pokémons que possui três páginas: Home, Pokedex e Detalhes. O projeto está subdivido em temas de acordo com os conteúdos que estudado durante o Módulo 2 - Frontend.

Este projeto terá como fonte de dados para a sua criação a [Poke Api](https://pokeapi.co/ "Poke Api"), uma Api pública, muito usada para aplicações focadas em aprendizado de programação e também usada em cases de processos seletivos.

Os conteúdos principais  a serem estudados são:

- Integração de APIs
- React Router
- Design Systems
- Estado Global

## **Enunciado**
É objetivo deste projeto criar um site com três páginas usando a Poke Api com as seguintes ferramentas:

- React
- React Router
- Styled-components
- React Context
- Axios

### **Requisitos**
- **Gerais:**
	- [ ] O site deve ter 3 páginas: Home, Pokedex e Detalhes;
	- [ ] Projeto deve seguir o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- [ ] O fluxo de trocas de páginas devem ser semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");
- **Página Home:**
	- [ ]  Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;
	- [ ] Cada Pokemon será representado por um Card;
	- [ ] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;
	- [ ] Header dessa página terá um botão para acessar a página da Pokedex
- **Página Pokédex**
	- [ ] Renderizar a lista de pokémons adicionados na pokedex;
	- [ ] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.
	- [ ] Header deve ter um botão para voltar para a Home
	- [ ] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex
- **Página de Detalhes**
	- [ ] Mostrar os detalhes do Pokemon selecionado, com informações descritas
	- [ ] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.
- [ ] [Criar um readme](https://www.youtube.com/watch?v=1QKwP0SJK-c "Crie um readme") para o projeto;


### Instruções de entrega

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-intro-web`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Evite fazer as alterações direto na branch ```main```
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adiciomos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assincrono da Aula de <a href="https://estudante.labenu.com.br/conteudos/tecnico/mod1/Git%20e%20Github">Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Faça o deploy do projeto. Pode ser ultilizado o surge, Github pages ou outra ferramenta que faça a disponibilização do seu site para acesso público;
				
	dica para usar o surge:
	* Instalar surge (só 1a vez): `npm install -g surge`
	* Buildar app React: `npm run build`
	* Corrigir a nomeação do arquivo (por causa do router)
		 `cp ./build/index.html ./build/200.html`
	* Deployar com surge: `surge ./build`
- Adicionar o link do deploy no readme do seu projeto/repositório:


- Entregue o projeto no [Formulário de entrega](https://docs.google.com/forms/d/e/1FAIpQLSfGGRaglpzWpdREBBfq3eUCMXkRXuiS61Zfyy0L_Ce0uNIXTA/viewform).



# Página Front-End de um E-Commerce de Brinquedos Espaciais

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

Este projeto foi desenvolvido utilizando a estrutura de React.JS e suas funcionalidades com o objetivo de ser o Front-End de um E-Commerce para a venda de brinquedos espaciais. 

1-	Página Home 
    - Na Página todos os produtos são listados, o usuário conseguirá clicar em comprar e assim consequentemente os itens serão adicionados ao carrinho. Além disso, é possível fazer a buscar por produtos específicos através do nome digitado no campo buscar e também é possível filtrar os produtos em ordem crescente e decrescente de valor e adicionando valor mínimo e máximo. 
    Obs: Os filtros de pesquisa funcionam simultaneamente.


2-	Página Carrinho 
    - No carrinho aparecerá todos os produtos adicionados a ele. Nesta página o usuário poderá aumentar a quantidade de itens que já existem no carrinho, verificar o subtotal dos itens adicionados, fazer a exclusão dos itens do carrinho e visualizar o valor total do dos produtos.

# Índice

* [Tecnologias usadas](#tecnologias-usadas)
* [Deploy](#deploy)
* [Rodando o Projeto](#rodando-o-projeto)
* [Contato](#contato)


## Tecnologias usadas:

- ``React.js``
- ``Vite.js``
- ``Styled Components``
- ``React Hooks``

## Deploy:

- ``Vercel`` | Link: <https://projeto-frontendreact-puce.vercel.app/>


## Rodando o projeto:
- Rode o console na pasta em que você baixou os arquivos;

- Insira o comando ``npm install``;

- Depois, o comando ``npm run dev`` para rodar no navegador.

## Contato

- barbaramamaral@gmail.com
- https://www.linkedin.com/in/barbaramamaral/  

