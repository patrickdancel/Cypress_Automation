describe('Create room', () => {
    it('creates room, join room, delete room', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        //click on add room
        cy.get(':nth-child(5) > :nth-child(3) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(2000) 
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(1)').click()

        // type name of room
        cy.get('#room_name').click().type('QA Room Test')
        cy.wait(1000)

        // click on add members then done
        cy.get('.Button__StyledButton-uamha2-1').click()
        cy.wait(1000)
        cy.contains('Done').click()

        // join room
        cy.get('.kVusTf').click()

        // leave room
        cy.wait(3000)
        cy.get('#EndCall').click()

        // delete room
        cy.get('.selected > .src__Column-xohg5z-1 > .jlOlxT > .src__Row-xohg5z-2').rightclick()
        cy.wait(2000)
        cy.contains('Delete').click()
        //click ok
        cy.get('.fByyFY').click()
    })
})