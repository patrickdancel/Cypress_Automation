describe('Status', () => {
    it('Sets custom status, selects status', () => {
        // launch site and login, very first time you will have to login
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on status
        cy.get('.PressablePrimitive__RootPressable-sc-130th01-0 > .ProfileImage__Wrapper-sc-1xu350m-0 > .main__RadialSkrim-sc-1545u64-9').click({multiple: true})
        
        cy.wait(2000)
       
        // type in status and save
        cy.get('.ModalPadding-gqxexn-0 > .Input__StyledInputBox-sc-1neqxsk-1').click().type('testing')
        cy.get('.Button__StyledButton-uamha2-1').click()
        cy.wait(2000)

        // clear status and close
        cy.get('.PressablePrimitive__RootPressable-sc-130th01-0 > .ProfileImage__Wrapper-sc-1xu350m-0 > .main__RadialSkrim-sc-1545u64-9').click()
        cy.wait(3000)
        cy.get('.fOQYlV > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.get('#Close').click()
        cy.wait(2000)

        // select a status
        cy.get('.PressablePrimitive__RootPressable-sc-130th01-0 > .ProfileImage__Wrapper-sc-1xu350m-0 > .main__RadialSkrim-sc-1545u64-9').click()
        cy.wait(2000)
        cy.get(':nth-child(11) > .donBme').click()
        cy.wait(2000)

        // clear status
        cy.get('.PressablePrimitive__RootPressable-sc-130th01-0 > .ProfileImage__Wrapper-sc-1xu350m-0 > .main__RadialSkrim-sc-1545u64-9').click()
        cy.wait(3000)
        cy.get('.fOQYlV > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.get('#Close').click()
        cy.wait(2000)      

        
    })
})