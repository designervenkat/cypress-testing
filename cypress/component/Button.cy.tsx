import Button from '@/components/Button'
import { mount } from 'cypress/react18'

describe("Button Test", () => {
  it('should render the button', () => {
    mount(<Button onClick={() => console.log("Clicked")}>Click Me</Button>)
  })
  it("should handle click event", () => {
    const handleClick = cy.spy().as('clickHandler')

    mount(<Button onClick={handleClick}>Submit</Button>)

    cy.get('button').contains("Submit").click()
    cy.get("@clickHandler").should("have.been.calledOnce")
  })
})