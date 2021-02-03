Cypress.Commands.add("validarTextoTitulo", () => {
  cy.get("#content > .example > h3").should(
    "have.text",
    "Dynamically Loaded Page Elements"
  );
});

Cypress.Commands.add("clicarBotaoStart", () => {
  cy.get("#start").click("left");
});

Cypress.Commands.add("aguardeLogin", () => {
  cy.get("#loading").click();
  cy.wait(5000);
});

Cypress.Commands.add("validarTextoConteudo", () => {
  cy.get(".example > #finish > h4").should("have.text", "Hello World!");
});
