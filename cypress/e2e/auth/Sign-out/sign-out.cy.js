describe("Sign out", () => {
    beforeEach (() => { 
        cy.login();
     });
    it(" Should Sign out successfully", () => {
     //locate and click drop menu button
     cy.get('button[data-slot="dropdown-menu-trigger"]').last().click()
     //locate and click Log out menu item
     cy.contains('Logout').click();
     // Verify that the user is redirected to the login page
     cy.url().should("include", "/login");
    });
}); 