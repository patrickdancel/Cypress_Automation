describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(9000)

        // click on table
        cy.get(':nth-child(1) > :nth-child(4) > .src__Row-xohg5z-2 > .src__Root-xohg5z-0').click()
        cy.wait(10000)

        // leave table
        cy.get('#EndCall').click()
   
    })
})