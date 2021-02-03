Cypress.Commands.add("validacaoTextoLogin", () => {
  cy.get("#content > .example > h2").should("have.text", "Login Page");
});

Cypress.Commands.add("usuarioSucesso", () => {
  cy.get("#login").find("#username");
  cy.get("#username").type("tomsmith");
});

Cypress.Commands.add("senhaSucesso", () => {
  cy.get("#login").find("#password");
  cy.get("#password").type("SuperSecretPassword!");
});

Cypress.Commands.add("btnLogin", () => {
  cy.get(".radius").click();
});

Cypress.Commands.add("validacaoTextoSucesso", () => {
  cy.get(".subheader").should(
    "have.text",
    "Welcome to the Secure Area. When you are done click logout below."
  );
});

Cypress.Commands.add("usuarioError", () => {
  cy.get("#login").find("#username");
  cy.get("#username").type("tomsmith12");
});

Cypress.Commands.add("senhaError", () => {
  cy.get("#login").find("#password");
  cy.get("#password").type("SuperSecretPassword!12");
});

Cypress.Commands.add("validacaoMessageError", () => {
  cy.get("#flash-messages > #flash").should("be.visible");
});
