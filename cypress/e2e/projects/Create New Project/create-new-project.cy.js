describe("Create new project", () => {
    beforeEach (() => { 
        cy.login();
    });

  it("Should Create New Project when no projects exist", () => {    
    // Verify that no projects exist  
    cy.contains("Create your first project to start organizing your tasks").should("be.visible");   
    //locate and click 'Create new project' button
    cy.contains("button", "Create Your First Project").click();
    // Fill in project details
    // locate input field and type project name
    cy.get('[name="name"]').type("My First Project");
    //locate input field and type description
    cy.get(':nth-child(2) > [name="description"]').type("This is a simple project description.");
    // Create project
    cy.get("button[type='submit']").click();
    // Modal should close
    cy.get('[role="dialog"]').should("not.exist");
    // Verify the project was created
    cy.get("main").contains("My First Project").should("exist");
  });

  it("Should Create New additional Project", () => {          
    //locate and click 'New project' button
    cy.get("main")
  .contains("button", "New Project")
  .should("be.visible")
  .click();
    //locate input field and type project name
    cy.get('[name="name"]').type("My New Project");
    //locate input field and type description
    cy.get(':nth-child(2) > [name="description"]').type("This is a simple project description.");
    //locate submit button and click it
    cy.get("button[type='submit']").click();
    // Modal should close
    cy.get('[role="dialog"]').should("not.exist");
    // Verify the project was created
    cy.get("main").contains("My New Project").should("exist");
  });


}); 