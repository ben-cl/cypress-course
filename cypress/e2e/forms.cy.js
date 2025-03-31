describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/Testing Forms/i);

    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");

    cy.get("@subscribe-input").type("hello@gmail.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email:/i).should("be.visible");

    cy.get("@subscribe-input").type("hello@gmail.com");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed:/i).should("be.visible");
    cy.wait(3000);
    cy.contains(/Successfully subbed:/i).should("not.exist");
  });
});
