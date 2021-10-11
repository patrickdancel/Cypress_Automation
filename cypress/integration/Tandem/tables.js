describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)

        // click on table
        cy.get('.ejzPYN > :nth-child(3) > .cekiLT > .sc-bdnylx').click()
        cy.wait(10000)

        // leave table
        cy.get('#EndCall').click()



   
    })
})