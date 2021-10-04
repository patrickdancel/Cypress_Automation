describe('Switching teams', () => {
    it('switches teams, creates new team', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on team
        cy.get('.fdWAPI').click()
        cy.wait(2000)
        // switches team
        cy.get(':nth-child(2) > .beJpkO > .sc-gtssRu > .sc-bqGHjH').click()
        cy.wait(2000)
        // click on team dropdown switch back team
        cy.get('.fdWAPI').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .beJpkO > .sc-amjdv').click()

    })
})