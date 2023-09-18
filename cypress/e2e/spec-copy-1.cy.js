describe('ReactApp test', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  // Do the number buttons update the display of the running total?

  xit('the numbers update the display of the running total', () => {
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    const runningTotal = cy.get('#running-total');
    runningTotal.should('contain', '123');
  })

  // Do the arithmetical operations update the display with the result of the operation?
  xit('the arithemtical operation should update the display with the result', () => {
    cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    const runningTotal = cy.get('#running-total');
    runningTotal.should('contain', '6');
  })

  // Can multiple operations be chained together?
  xit('it should be able to chain multiple operations together', () => {
    cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    const runningTotal = cy.get('#running-total');
    runningTotal.should('contain', '12');
  })

  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  xit('it should show a range of numbers(negative)', () => {
    cy.get('#clear').click();
    cy.get('#number2').click(); 
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    const runningTotal = cy.get('#running-total');
    runningTotal.should('contain', '-1');
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

  it('it should show % by 0 = 0', () => {
    cy.get('#clear').click();
    cy.get('#number2').click(); 
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    const runningTotal = cy.get('#running-total');
    runningTotal.should('contain', '0')
  })

})