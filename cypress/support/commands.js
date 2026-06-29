Cypress.Commands.add("login", () => {
    cy.visit("https://task.ezvz.app/login");
    //locate and click 'Sign with Email' button
    cy.get("button").contains("Sign in with email").click();
    //locate and type email
    cy.get("input[type='email']").type("lanatestkorentest@gmail.com");
    //locate and type password
    cy.get("input[type='password']").type("Test12345!");
    cy.url().should("include", "/dashboard");
    cy.getCookie("auth-token").should("exist");
    cy.wait(1000);
});
