describe('Switching teams', () => {
    it('switches teams, creates new team', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on team
        cy.wait(3000)
        cy.get('.text__T15-sc-1vvycwd-8').click()
        cy.wait(2000)
        // switches team
        cy.get(':nth-child(2) > .obfkP > .Alphatar__Wrapper-sc-1b47z1e-0 > .src__Root-xohg5z-0').click()
        cy.wait(2000)
        // click on team dropdown switch back team
        cy.get('.text__T15-sc-1vvycwd-8').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .beJpkO > .sc-amjdv').click()

    })
})