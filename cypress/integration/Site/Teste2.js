context("Action", () => {
  before(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  describe("VALIDAÇÃO LOGIN SUCESSO", () => {
    it("DADO que estou no site FrontEnd", () => {
      cy.validacaoTextoLogin();
    });
    it("E insero o usuário", () => {
      cy.usuarioSucesso();
    });
    it("E insero a senha", () => {
      cy.senhaSucesso();
    });
    it("QUANDO clico no botão login", () => {
      cy.btnLogin();
    });
    it("ENTÃO o login é realizado com sucesso", () => {
      cy.validacaoTextoSucesso();
    });
  });
});

context("Action", () => {
  before(() => {
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  describe("VALIDAÇÃO LOGIN ERRO", () => {
    it("DADO que estou no site FrontEnd", () => {
      cy.validacaoTextoLogin();
    });
    it("E insero um usuário não cadastrado", () => {
      cy.usuarioError();
    });
    it("E insero uma senha não cadastrado", () => {
      cy.senhaError();
    });
    it("QUANDO clico no botão login", () => {
      cy.btnLogin();
    });
    it("ENTÃO o login não realizado", () => {
      cy.validacaoMessageError();
    });
  });
});
