import ProdutosPage from '../pages/ProdutosPage'

Given(/^que acesso a página de Produtos$/, () => {
  ProdutosPage.acessarPaginaDeProdutos()
})

And(/^adiciono ao carrinho os produtos que desejo comprar$/, () => {
  ProdutosPage.adicionarProdutosDesejadosAoCarrinho()
})