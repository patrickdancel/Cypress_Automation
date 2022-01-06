

describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)

        // invite teammate
        cy.get('.hSOKAJ > .text__T14-sc-1vvycwd-9').click()
        cy.wait(2000)
        
        // type in email address
        cy.get('#input0').click().type('pdancel25@gmail.com')
        cy.wait(2000)

        // submit
        cy.get('#SubmitButton').click()
       
   
    })
})