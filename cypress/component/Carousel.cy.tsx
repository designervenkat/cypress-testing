import Carousel from "@/components/Carousel"


describe("Testing carousel component", () => {    

  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']

  it("should display the first image initially", () => {    
    cy.mount(<Carousel images={images} />)
    cy.get('img').should('have.attr', "src", 'image1.jpg')
  })

  it("should display the next image when the next button is clicked", () => {    
    cy.mount(<Carousel images={images} />)
    cy.get('button').contains("Next").click()
    cy.get('img').should('have.attr', "src", 'image2.jpg')
  })

  it("should display the prev image when the prev button is clicked", () => {    
    cy.mount(<Carousel images={images} />)
    cy.get('button').contains("Prev").click()
    cy.get('img').should('have.attr', "src", 'image3.jpg')
  })
})