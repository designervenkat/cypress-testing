import Header from '@/components/Header'
import { mount } from 'cypress/react18'


describe("Testing Header Component", () => {
  it("should render the header", () => {
    cy.mount(<Header title='50% Sales' />)
    cy.get('h1').contains("50% Sale")
  })
})