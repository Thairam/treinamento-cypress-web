import ProdutosElements from "./Elements/ProdutosElements"

export default new class ProdutosPage {
  acessarPaginaDeProdutos() {
    cy.login()
  }

  adicionarProdutosDesejadosAoCarrinho() {
    cy.fixture("itens-compra").then(itens => {
      itens.produtos.forEach(produto => {
        cy.get(ProdutosElements.btnAdicionarProdutoAoCarrinho(produto.nome))
          .click()
      })
    })
  }
}