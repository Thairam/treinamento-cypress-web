import CheckoutPage from '../pages/CheckoutPage'

And(/^informo os dados para entrega do pedido$/, () => {
  CheckoutPage.informarDadosDeEntrega()
})

When(/^finalizo a compra$/, () => {
  CheckoutPage.finalizarCompra()
})

Then(/^devo visualizar mensagem indicando que a compra foi efetivada$/, () => {
  CheckoutPage.validarEfetivacaoDaCompra()
})