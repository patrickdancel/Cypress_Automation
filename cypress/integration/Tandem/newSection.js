describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)

        cy.wait(3000)
        // click plus sign to create new section
        cy.get(':nth-child(4) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(2000)

        // click on new section
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(1) > .src__Root-xohg5z-0').click()
       
        // type in new team name
        cy.get('#name').click().type('QA Team')

        // click save
        cy.get('.dAqmrL').click()

        // add user
        cy.get('.eoxhhF').rightclick()
        cy.wait(2000)
        cy.get('.PopoverMenu__Wrapper-btsdzh-0 > :nth-child(1) > .src__Root-xohg5z-0').click()
        cy.wait(3000)

        //delete section
        cy.get(':nth-child(14) > .styles__HeaderRow-dqexcr-1 > :nth-child(3) > .SimpleTooltip__TriggerWrapper-sc-9fovao-0 > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()

        cy.get('.gBERuR > .src__Root-xohg5z-0').click()
   
    })
})