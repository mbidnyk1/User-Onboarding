describe('Testing new user sign up form', function(){
    beforeEach(function(){
        cy.visit('http://localhost:3001/');
    });
    it('Add test to inputs and submit form', function(){
        cy.get('[data-cy=name]')
            .type('Homer Simpson')
            .should('have.value','Homer Simpson');
        cy.get('[data-cy=email]')
            .type('duff@aol.com')
            .should('have.value','duff@aol.com');
        cy.get('[data-cy=password]')
            .type('doh!')
            .should('have.value','doh!');
        cy.get('[data-cy=checkbox]').check()
            .should('be.checked');
        cy.get('[data-cy=button]').click()
    });
   it('Check validation on message invalid input', () => {
       cy.get('[data-cy=name]')
        .type('1').clear()
       cy.get('[data-cy=errorName]').should('be.visible').and('contain', 'Name is a required field')
       cy.get('[data-cy=email]')
        .type('1').clear()
       cy.get('[data-cy=errorEmail]').should('be.visible').and('contain', 'Must include an email')
       
       cy.get('[data-cy=email]')
        .type('1234').should('be.visible')
       cy.get('[data-cy=errorEmail]').should('be.visible').and('contain', 'this must be a valid email')
       
       cy.get('[data-cy=password')
        .type('1').clear()
       cy.get('[data-cy=errorPassword]').should('be.visible').and('contain', 'Must include a password')

   }) 
});    
