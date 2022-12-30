describe('empty spec', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('cordova_login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://cordova.dccllc.net');
    cy.get('#__BVID__26 > :nth-child(1) > .input-group > .form-control').type('dcc_admin');
    cy.get('#__BVID__29 > :nth-child(1) > .input-group > .form-control').type('tempPass0!');
    cy.get('form > .text-center > .btn').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.ml-auto > .nav-item > .nav-link').click();
    cy.get(':nth-child(5) > .dropdown-item').click();
    /* ==== End Cypress Studio ==== */
    cy.url().should('include', '/login')
  });
})