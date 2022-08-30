describe('Funcionalidades muito úteis', () => {
  it('Fixture', () => {
    cy.visit('books')

    cy.fixture("books").then(books => {
      cy.get('#searchBox')
        .type(books.books[0].title)

      cy.get('.ReactTable .rt-tbody .rt-tr:eq(0) .rt-td:eq(1) a')
        .should('have.text', books.books[0].title)

      cy.get('.ReactTable .rt-tbody .rt-tr:eq(0) .rt-td:eq(2)')
        .should('have.text', books.books[0].author)

      cy.get('.ReactTable .rt-tbody .rt-tr:eq(0) .rt-td:eq(3)')
        .should('have.text', books.books[0].publisher)
    })
  })

  it('Comandos personalizados', () => {
    cy.visit('books')

    cy.fixture("books").then(books => {
      const titulo = books.books[0].title
      const autor = books.books[0].author
      const editora = books.books[0].publisher

      cy.validarPesquisaDeLivro(titulo, autor, editora)
    })
  })

  context('Teste dinâmico', () => {
    new Array(
      { title: 'Git Pocket Guide', author: 'Richard E. Silverman', publisher: "O'Reilly Media" },
      { title: 'Learning JavaScript Design Patterns', author: 'Addy Osmani', publisher: "O'Reilly Media" }
    ).forEach(book => {
      it(`Validar pesquisa do livro: ${book.title}`, () => {
        const titulo = book.title
        const autor = book.author
        const editora = book.publisher

        cy.visit('books')
        cy.validarPesquisaDeLivro(titulo, autor, editora)
      })
    })
  })
})