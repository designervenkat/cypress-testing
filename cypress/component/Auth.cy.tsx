import Auth from "@/components/Auth";


describe("Login Compoent Testing", () => {

  it("should log with valid credentials", () => {
    cy.intercept('POST', '/api/auth', {
      statusCode: 200,
      body: {username: "test", token: "124"}
    })


    cy.mount(<Auth />)
    

    cy.get('input[placeholder="Username"]').type('test')
    cy.get('input[placeholder="Password"]').type('password')
    cy.get('button').click()


    cy.get("h2").should('contain', "Welcome, test")
    cy.get("p").should('contain', "Token: 124")



  })



  it("should display error with invalid credentials", () => {
    cy.intercept('POST', '/api/auth', {
      statusCode: 401,
      body: {error: "Invalid Credentails"}
    })


    cy.mount(<Auth />)
    

    cy.get('input[placeholder="Username"]').type('test')
    cy.get('input[placeholder="Password"]').type('password')
    cy.get('button').click()


   
    cy.get("p").should('contain', "Login failed")



  })




})