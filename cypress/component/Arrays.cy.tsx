import Arrays from "@/components/Arrays";

describe("Array Components", () => {
  const numbers = [1,2,3,8,5,6]
  const strings = ["One","Two","Three","Four","Five","Six"]
  
  it("should display all numbers", () => {
    // First test is to mount the individual component
    cy.mount(<Arrays numbers={numbers} strings={strings} />)
    // Second test to check h3 and the title are expected
    cy.get("h3").contains("Number")
    // Third test to check ul and li and the length
    cy.get("ul").first().children('li').should("have.length", numbers.length)
    numbers.forEach(num => {
      cy.get("ul").first().contains(num.toString())
    })
  })


  it("should display all string", () => {
    // First test is to mount the individual component
    cy.mount(<Arrays numbers={numbers} strings={strings} />)
    // Second test to check h3 and the title are expected
    cy.get("h3").contains("String")
    // Third test to check ul and li and the length
    cy.get("ul").last().children('li').should("have.length", strings.length)
    strings.forEach(str => {
      cy.get("ul").last().contains(str)
    })
  })
} )