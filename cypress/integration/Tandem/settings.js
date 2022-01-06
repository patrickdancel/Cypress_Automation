describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)

        cy.wait(3000)
        cy.get(':nth-child(6) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .bebbWG > .src__Root-xohg5z-0').click()
        cy.wait(2000)
        // toggle dark mode
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(1) > .src__Row-xohg5z-2').click()
        cy.wait(2000)

        // click on chrome extension
        cy.get(':nth-child(6) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .bebbWG > .src__Root-xohg5z-0').click()
        cy.wait(3000)
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(4) > .src__Root-xohg5z-0').click()

        // click on desktop  app
        cy.get(':nth-child(6) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .bebbWG > .src__Root-xohg5z-0').click()
        cy.wait(3000)
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(5) > .src__Root-xohg5z-0').click({force: true, multiple: true})
        // click on mobile app
        cy.get(':nth-child(6) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .bebbWG > .src__Root-xohg5z-0').click()
        cy.wait(3000)
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(6) > .src__Root-xohg5z-0').click({force: true, multiple: true})
      
   
    })
})