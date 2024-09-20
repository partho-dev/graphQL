describe('Home Page E2E Test', () => {
    it('Should display Home Page content', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Welcome to Next.js with GraphQL').should('be.visible'); // Change this according to your homepage content
    });
  });
  