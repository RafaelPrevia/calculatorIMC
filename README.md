# Calculadora de IMC

## Uma calculadora de IMC, usando conceitos de Modal do front-end para entregar uma experiência melhor e mais limpa ao usuário, feita com HTML, CSS e Javascript.

<div>
<div style="display: inline_block"><br>
<img align="center" alt="-Js" height="320" width="340" src="https://media.discordapp.net/attachments/1010233095414349846/1012543072875315270/Screenshot_874.png">
<img align="center" alt="-HTML" height="280" width="280" src="https://media.discordapp.net/attachments/1010233095414349846/1012543073194090516/Screenshot_875.png">
</div>


### Como rodar o programa? 💻

É necessário o download de um editor de código, como o [Visual Studio Code](https://code.visualstudio.com/download), para 
testar o programa por completo.

Após agrupar os conteúdos em uma pasta de sua escolha, use a função RUN no index.html
  
É útil também instalar a extensão "Live Server" no VS code, e utilizar o RUN pelo live server, apertando F1 em index.html e escolhendo o live server(caso não funcione o método mais simples anterior.)

### Como foi feito o programa? 👨‍💻

1. Começando com HTML e CSS
 - Foi colocado o fundo, depois a caixa principal, a escrutura em CSS do modal junto ao alerta de erro.
 - Foram criados os inputs e botões(<button>) do programa.
 - Finalização de "telas" com conceitos de wrapper. 

2. Manipulação da DOM, usando JS
 - Capturar o número que o usuário do programa inserir, ao clicar no botão.
 - Criar a lógica do programa de calculo de IMC, como se fosse um exercicio a parte, depois inserir-lo no programa como um todo.
 - Aplicar eventos, callbacks.
  
3. Utilizar JS pra dar funcionalidade ao Modal + Caixa de Erro
 - A caixa de erro funciona da seguinte forma, se o usuário digitar algo que não for um número ou nada, em qualquer uma das caixas, o programa retorna um erro dizendo "Digite somente números"
