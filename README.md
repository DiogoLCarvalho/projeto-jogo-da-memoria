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

<p align="justify">
 
A variável cards possui todas as tags de imagens. As variáveis <i>opçãoUm</i> e <i> OpçãoDois</i> tem os valores dos id 's dos cards selecionados. Com isso um <b>if</b> é executado, se os dois cards selecionados pelo usuário forem iguais, aplique uma class que possui uma animação e coloque o cardEscolhido em cardsCombinados, que vai ser útil no final do jogo.  
 
</p>


<p align="justify">
 
Caso contrário, é claro, o usuário errou <img src="https://i.pinimg.com/originals/4c/6c/69/4c6c693465e89a914c40ba485cc721b4.gif" width="30px"  align="center"> . Então como no acerto é aplicado um class com uma animação, só que desta vez uma animação de erro. Dois setTimeout são executados, com um tempo de 500 milésimos, removendo a class que foi acabada de ser colocada e restaurando a tag imagem com a url da imagem inicial.  
 
</p>

![Captura de tela 2021-12-11 133141](https://user-images.githubusercontent.com/84794798/145684216-e20902b9-cf38-46c7-a727-ab08839bf1f6.png)

<p align="justify">
 
Para acabar <img src="https://i.imgur.com/axn0PaC.gif" width="50px"  align="center"> vários valores, arrays, estilos são resetados ou removidos. Há um <b>if</b> ao final, para quando o usuário acertar todos os cards. O parâmetro de parada do <b>if</b> é pela igualdade do tamanho do array cardCombinados e o array cardArray dividido por 2, pois, como mencionado anteriormente, este array tem elementos duplicados. 

</p>

![Captura de tela 2021-12-11 135210](https://user-images.githubusercontent.com/84794798/145684864-7c236f57-b89f-4ade-91a2-24e667bf82c1.png)

<p align="justify">
 
Se o <b>if</b> for executado, esta tela aparece: 

</p>

![Captura de tela 2021-12-11 135901](https://user-images.githubusercontent.com/84794798/145685110-f95e913d-0a51-451a-ad8c-fda6bad0738c.png)

<p align="justify">
 
E se o usuário apertar no botão, a página reinicia e o jogo recomeça. 

</p>

### Detalhes a mencionar :exclamation:


<p align="justify">

Como os cards estão organizados está diretamente ligado ao tamanho da imagem. A div container tem o width e o height exatamente calculado de acordo com o tamanho das imagens e o padding da div. Se eu eventualmente quiser colocar mais cards, terei que mudar o width e o height da div container. 
 
</p>

## Obrigado pela atenção :exclamation:
* Criado por <a href="https://github.com/DiogoLCarvalho"  target="_blanked">Diogo Lima Carvalho</a>. 


<img src="https://i.pinimg.com/originals/2a/82/1e/2a821ee45ca3cbc384c0b70f730248ae.gif" width="30%"  align="center">

