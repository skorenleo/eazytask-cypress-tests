describe("Registration-WithEmail", () => {
  it("Registration on EazyTask with valid data", () => {
    // open page
    cy.visit("https://task.ezvz.app/register");
    //locate and click 'Sign Up with Email' button
    cy.get("button").contains("Sign up with email").click();
    //locate and type full name
    cy.get("input[placeholder='John Doe']").type("Lana Test");
    //locate and type email
    cy.get("input[type='email']").type("lanatestkorentest@gmail.com");
    //locate and type password
    cy.get("input[name='password']").type("Test12345!");
    //locate and type confirm password
    cy.get("input[name='confirmPassword']").type("Test12345!");
    //locate and click 'Create Account' button
    cy.get('button[type="submit"]').click();

  });
});