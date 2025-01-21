import Products from "@/components/Products";

describe("Products component", () => {
  
  it('should display a list of products', () => {
    const products = [
    {id: 1, title: "Product 1", price: 100, description: "Description one"},
    {id: 2, title: "Product 2", price: 200, description: "Description two"},
    {id: 3, title: "Product 3", price: 300, description: "Description three"},
    {id: 4, title: "Product 4", price: 400, description: "Description four"},
    ]
    

    // Testing to get products from server
    cy.intercept('GET', '/api/products', { body: products })

    // Test to mount the component
    cy.mount(<Products />)
    
    // Check for title
    cy.get("h1").should("contain", "Products")

    // Check for the list of items
    cy.get('li').should("have.length", products.length)

    // Check for each product should have title, descp and price
    products.forEach(item => {
      cy.get('li').contains(item.title);
      cy.get('li').contains(item.description);
      cy.get('li').contains(item.price)
    })
    
  })


  it("should handle API error gracefully", () => {

    // API Call to return a 500 error
    cy.intercept("GET", "/api/products", { statusCode: 500 })
    

    // Mount the component
    cy.mount(<Products />)

    cy.get('li').should('not.exist')

    cy.get('p').contains('No Products')

  })









})