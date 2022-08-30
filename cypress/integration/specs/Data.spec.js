describe('Interagindo com capos de data', () => {
  it('Date picker - Campo de data', () => {
    cy.visit('/date-picker')

    cy.get('#datePickerMonthYearInput')
      .clear()
      .type('10/25/1994{enter}')
  })

  it('Date picker - Campo de data e hora', () => {
    cy.visit('/date-picker')

    cy.get('#dateAndTimePickerInput')
      .clear()
      .type('October 25, 1994 3:15 PM{enter}')
  })
})