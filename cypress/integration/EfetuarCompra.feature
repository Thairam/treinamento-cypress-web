#language: pt

@EfetuarCompra
Funcionalidade: Efetuar Compra
  Como um usuário
  Eu quero visualizar os produtos disponíveis no site
  Para que eu possa efetuar a compra de produtos desejados

Cenario: Efetuar compra com sucesso

  O usuário deve conseguir adicionar produtos ao carrinho
  e finalizar a compra assim que desejar

  Dado que acesso a página de Produtos
  E adiciono ao carrinho os produtos que desejo comprar
  E confirmo os produtos no carrinho
  E informo os dados para entrega do pedido
  Quando finalizo a compra
  Entao devo visualizar mensagem indicando que a compra foi efetivada