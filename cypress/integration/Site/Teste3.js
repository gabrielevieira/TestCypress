describe("API-Testing", () => {
  Cypress.config("baseUrl", "http://jsonplaceholder.typicode.com");
  it("Get - read", () => {
    cy.request("GET", "/comments?postId=1").then((response) => {
      expect(response).to.have.property("status", 200);
      expect(response.body).to.not.be.null;
    });
  });

  it("Post - create", () => {
    const item = { id: 101, title: "ABCD", body: "Girassol texto", userId: 10 };
    cy.request("POST", "/posts", item)
      .its("body")
      .should("include", { title: "ABCD" });
  });

  it("PUT - update", () => {
    const item = { title: "ABCD+EFG+UPDATE" };
    cy.request({ method: "PUT", url: "/posts/1", item })
      .its("status")
      .should("eq", 200);
  });

  it("DEL - delete", () => {
    const item = { title: "ABCD+EFG+UPDATE" };
    cy.request({ method: "DELETE", url: "/posts/1", item })
      .its("status")
      .should("eq", 200);
  });
});
