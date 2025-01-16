import Input from '@/components/Input'
import { mount } from 'cypress/react18'


describe("Testing Input Component", () => {

  it("should render the input with the provided value", () => {
    cy.mount(<Input value='Name' onChange={() => { }} />)
    cy.get("input").should("have.value", "Name")
  })

  it("should call onChange when value changes", () => {
    const onChange = cy.stub()
    cy.mount(<Input value='' onChange={onChange} />)
    cy.get("input").type("New Value")
    cy.wrap(onChange).should("have.been.called")
  })

})