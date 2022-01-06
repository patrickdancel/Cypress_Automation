describe('Switching teams', () => {
    it('switches teams, creates new team', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on team
        cy.wait(3000)
        cy.get('.gGtCgX > :nth-child(1) > .bebbWG > .PressablePrimitive__RootPressable-sc-130th01-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(2000)
        // switches team
        cy.get(':nth-child(2) > .obfkP > .Alphatar__Wrapper-sc-1b47z1e-0 > .src__Root-xohg5z-0').click()
        cy.wait(2000)
        // click on team dropdown switch back team
        cy.get('.gGtCgX > :nth-child(1) > .bebbWG > .PressablePrimitive__RootPressable-sc-130th01-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .obfkP > .src__Column-xohg5z-1 > .text__T16-sc-1vvycwd-7').click()

    })
})