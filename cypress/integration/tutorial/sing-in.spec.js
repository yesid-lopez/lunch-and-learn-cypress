describe('Cuando inicio sesión como Alejandro Perdomo', () => {
    before(() => {
        cy.visit('http://automationpractice.com/');
        cy.get('.login').click();
        cy.get('#email').type('aperdomobo@gmail.com');
        cy.get('#passwd').type('WorkshopProtractor');
        cy.get('#SubmitLogin > span').click();
    });
    it('debe aparecer el nombre de alejandro registrado', () => {
        cy.get('.account span').should('have.text', 'Alejandro Perdomo');
    });


    describe('Cuando doy click en mujer  e intento comprar una camisa', () => {
        before(() => {
            cy.get('.logo').click();
            cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
            cy.get('.button-medium > span').click();
        });
        it('should behave...', () => {

        });
    });

});