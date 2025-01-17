import Navbar from "@/components/Navbar";


// describe("", () => {    
//   it("", () => {    
//     cy.mount()
//     cy.get("h3").contains("Number")
//   })
// })


describe("Testing for navbar component", () => {    
  it("should render all links", () => {    

    const links = [
      {label: 'Home', href: '/'},
      {label: 'About', href: '/about'},
    ]

    cy.mount(<Navbar links={links} />)
    cy.get("nav ul li").should("have.length", links.length)
    links.forEach(link => {
      cy.get('nav').contains(link.label).should('have.attr', 'href', link.href)
    })
  })
})