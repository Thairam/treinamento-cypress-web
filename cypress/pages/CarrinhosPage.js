import CarrinhosElements from "./Elements/CarrinhosElements"
import HeaderElements from "./Elements/HeaderElements"

export default new class CarrinhosPage {
  confirmarProdutosNoCarrinho() {
    cy.fixture("itens-compra").then(itens => {
      const QTD_ITENS_CARRINHO = itens.produtos.length

      cy.get(HeaderElements.lnkCarrinho())
        .click()

      cy.get(CarrinhosElements.itensDoCarrinho())
        .should('have.length', QTD_ITENS_CARRINHO)

      cy.get(CarrinhosElements.btnCheckout())
        .click()
    })
  }
}