Cypress.Commands.add('login', (username, password) => {
    // Your login logic using Cypress commands
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#submit-button').click();
});