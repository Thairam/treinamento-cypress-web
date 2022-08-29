import { obterTextoFormatadoParaDataTest } from "../../support/utils/formatacao"

export default new class ProdutosElements {
  btnAdicionarProdutoAoCarrinho = (produto) => `[data-test='add-to-cart-${obterTextoFormatadoParaDataTest(produto)}']`
}