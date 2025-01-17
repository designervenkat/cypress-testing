import Forms from "@/components/Forms";


describe("Contact Forms Testing", () => {    
  it('should call onSubmit with form data when submitted', () => {
    const onSubmit = cy.stub();
    cy.mount(<Forms onSubmit={onSubmit} />);
    cy.get('input[type="text"]').type('John Doe');
    cy.get('input[type="email"]').type('john.doe@example.com');
    cy.get('form').submit();
    cy.wrap(onSubmit).should('have.been.calledWith', { name: 'John Doe', email: 'john.doe@example.com' });
  });
})
