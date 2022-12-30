describe('lab test', () => {
  it('visits google', () => {
    cy.visit('https://www.google.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.gLFyf').clear('k');
    cy.get('.gLFyf').type('kittens{enter}');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.MUFPAc > :nth-child(2) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})