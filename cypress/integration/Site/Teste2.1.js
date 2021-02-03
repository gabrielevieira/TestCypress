context("Action", () => {
  before(() => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1");
  });

  describe("VALIDAÇÃO: Site FrontEnd1 validar texto", () => {
    it("DADO que estou no site FrontEnd", () => {
      cy.validarTextoTitulo();
    });
    it("E clico no botão Start", () => {
      cy.clicarBotaoStart();
      cy.aguardeLogin();
    });
    it("ENTÃO apresenta o texto Hello Word", () => {
      cy.validarTextoConteudo();
    });
  });
});
