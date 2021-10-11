describe('Create quick meeting', () => {
    it('creates quick meeting, renames meeting, starts meeting', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        
        // clicks on plus sign to create new meeting
        cy.get(':nth-child(7) > .sc-bdnylx > .sc-hiKfjK').click({force: true})
        cy.wait(3000)

        // rename meeting name
        cy.get('.sc-bA-DUxO > .sc-gtssRu > .sc-daBvwG > .sc-bdnylx > .sc-jUfxsr').click().type('Meeting Test')

        // click start meeting
        cy.get('.bDXhKR').click()
        cy.wait(20000)

        // click on leave 
        cy.get('#EndCall').click()
        

   
    })
})