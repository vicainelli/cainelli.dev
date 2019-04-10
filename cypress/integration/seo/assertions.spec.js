describe('SEO - Home', function() {
  it('Visit Home Page', function() {
    cy.visit('http://localhost:8080');
  });
  describe('Headings', () => {
    it('Heading 1', () => {
      cy.get('h1').should('have.length', 1);
    });
  });

  describe('Check Social Links', () => {
    it('LinkedIn', () => {
      cy.get('a').contains('Linkedin').should('have.attr', 'href', 'https://linkedin.com/in/vicainelli');
    });
    it('Behance', () => {
      cy.get('a').contains('Behance').should('have.attr', 'href', 'https://www.behance.net/viniciuscainelli');
    });
    it('GitHub', () => {
      cy.get('a').contains('GitHub').should('have.attr', 'href', 'https://github.com/vicainelli/');
    });
    it('Dribbble', () => {
      cy.get('a').contains('Dribbble').should('have.attr', 'href', 'https://dribbble.com/vicainelli');
    });
    it('CodePen', () => {
      cy.get('a').contains('CodePen').should('have.attr', 'href', 'https://codepen.io/vicainelli/');
    });
    it('Resume', () => {
      cy.get('a').contains('Resume').should('have.attr', 'href', '/vinicius-cainelli-resume-2019-q1.pdf');
    });
  });
});
