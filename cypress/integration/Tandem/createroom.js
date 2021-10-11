describe('Create room', () => {
    it('creates room, join room, delete room', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        //click on add room
        cy.get(':nth-child(5) > :nth-child(3) > .sc-csTaMs > .sc-bdnylx').click()
        cy.wait(2000) 
        cy.get('.sc-kHWWFa > :nth-child(1)').click()

        // type name of room
        cy.get('#room_name').click().type('QA Room Test')
        cy.wait(1000)

        // click on add members then done
        cy.get('.sc-cBoprd').click()
        cy.wait(1000)
        cy.get('.sc-cBoprd').click()
        cy.get('.kIdrfC > :nth-child(2) > .sc-bdnylx > .sc-hiKfjK').click()

        // join room
        cy.get(':nth-child(11) > .sc-gtssRu > .eWwHwG > .sc-dlnjPT').click()
        cy.get('.bqAyor').click()
        cy.wait(20000)
        cy.get('#EndCall').click()

        // delete room
        cy.get(':nth-child(11) > .sc-gtssRu > .eWwHwG > .sc-dlnjPT > .sc-hHEjAm').rightclick()
        cy.get('.gxYZqA > .sc-bdnylx').click()
        cy.wait(2000)
        cy.get('.gLflUe').click()
    })
})