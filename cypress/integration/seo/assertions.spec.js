describe('SEO - Home', function() {
    it('Visit Home Page', function() {
        cy.visit('http://localhost:8080');
    });
    it('Heading 1', function() {
      cy.get('h1').should('have.length', 1)
    });

    describe('Check Links', () => {
        it('GitHub', () => {
            cy.get('a').should('have.attr', 'href', 'https://github.com/vicainelli/')
        } )
    })

  });
  
  
  