describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("has the correct <h1>", () => {
    cy.contains("h1", "Epic Gains")
  })

  it("navigates to /about", () => {
    cy.get("nav li a")
      .contains("About")
      .click()
    cy.url().should("include", "/about")
  })

  it("navigates to /blog", () => {
    cy.get("nav li a")
      .contains("Blog")
      .click()
    cy.url().should("include", "/blog")
  })
})
