describe('Dado una página de automation practice', () => {
    before(()=>{
        cy.visit('http://automationpractice.com');
    });
    describe('cuando iniciamos sesión', () => {
        before(()=>{
            cy.get('.login').click();
            cy.get('#email').type('aperdomobo@gmail.com');
            cy.get('#passwd').type('WorkshopProtractor');
            cy.get('#SubmitLogin > span').click();
        });
        it('should behave...', () => {
            cy.get('.account > span').should('have.text', 'Alejandro Perdomo');
        });
    });
});