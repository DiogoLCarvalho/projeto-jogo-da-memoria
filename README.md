# Jogo da Memória (Memory Game) :brain:

![Captura de tela 2021-12-11 123121](https://user-images.githubusercontent.com/84794798/145682169-03e0ec88-b5a5-461b-94d3-bb94267d09f3.png)

## Teste por este link: :exclamation: :exclamation:
https://diogolcarvalho.github.io/projeto-jogo-da-memoria/

## Explicação JS :keyboard:

<p align="justify">
 
Há aqui um array que contém <b>objetos</b>. Esses objetos estão com os nomes e com o caminho que estão as imagens dentro dos arquivos do projeto. Todos estão duplicados, devido ao funcionamento do jogo. 
 
</p>

![Captura de tela 2021-12-11 123607](https://user-images.githubusercontent.com/84794798/145682320-f2afeefd-2fd1-444a-a089-7a36db1cc5d4.png)

<p align="justify">
 
Temos um <b>for</b> que é executado de acordo com o tamanho do array <i>cardArray</i>. A cada vez que o loop é executado, é criada uma tag imagem, que vai ter como atributo uma imagem padrão - que possui um fundo rosa -  e também um <i>id</i> específico. Ao final todas essas imagens criadas serão colocadas dentro da div com id cards, que é a própria variável <i>divCards</i>. E quando o usuário clicar em uma das imagens é executada a função <b><i> virarCard</i></b>. 
 
</p>

![Captura de tela 2021-12-11 124714](https://user-images.githubusercontent.com/84794798/145682688-879cc8c7-7d27-45b9-b957-8de6828af4d2.png)

<p align="justify">
 
A variável <i>cardId</i> contém o valor do id do card que o usuário digitou. Essa variável serve de parâmetro para o <i>cardArray</i> - que contém todos os cards disponíveis - que é colocada em um outro array com a <b>função push</b>, só que neste array é colocado apenas o nome. O array <i>cardEscolhidoId</i>, como o próprio nome diz tem apenas o id do card. O elemento selecionado terá a url mudada de acordo com o caminho que está no <i>cardArray</i>. 
 
</p>

<p align="justify">
 
Quando o usuário clicar na imagem, é adicionada uma animação ao abrir e ele não pode clicar no mesmo card novamente. 
 
</p>


<p align="justify">
 
A função <i>virarCard</i> só pode ser executada duas vezes seguidas. Porque depois disso é executada a função <b><i>verificarCard</i></b>, que verifica os dois cards escolhidos, para ver se eles combinam ou não. 
 
</p>


![Captura de tela 2021-12-11 130132](https://user-images.githubusercontent.com/84794798/145683209-81a2fff3-ec2d-41bf-8e3a-adb3cf633010.png)

