describe('Test Main Page', () =>{
    beforeEach(() => {
        cy.visit('http://localhost:8080');
    })
    it('check links', () => {
        cy.get('[data-cy=cli]').children().should('have.length', 2);
        cy.get('[data-cy=links]').children().should('have.length', 5);
        cy.get('[data-cy=eco]').children().should('have.length', 5);
    });

    it('check tag', () => {
        cy.get('[data-cy=ecoheader]').contains('Ecosystem')
    });
});

