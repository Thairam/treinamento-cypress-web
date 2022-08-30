import { join } from 'path'

describe('Upload e Download de arquivos', () => {
  it('Upload de arquivo', () => {
    //https://www.npmjs.com/package/cypress-file-upload
    cy.visit('/upload-download')

    cy.get('#uploadFile')
      .attachFile('arquivo.txt')
  })

  it('Download de arquivo', () => {
    cy.visit('/upload-download')

    const dirPastaDownloads = Cypress.config('downloadsFolder')
    const dirArquivoBaixado = join(dirPastaDownloads, 'sampleFile.jpeg')

    cy.get('#downloadButton')
      .click()

    cy.readFile(dirArquivoBaixado)
      .should('exist')
  })
})