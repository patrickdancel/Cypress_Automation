describe('Create quick meeting', () => {
    it('creates quick meeting, renames meeting, starts meeting', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(10000)
        
        // clicks on plus sign to create new meeting
        cy.get('.NewMeetingButton__StyledPressable-sc-6d8dcu-0').click({force: true})
        cy.wait(3000)

        // rename meeting name
        cy.get('.Stack__Wrapper-sc-118ccxv-0 > .src__Column-xohg5z-1 > .Input__StyledInputBox-sc-1neqxsk-0 > .src__Root-xohg5z-0').click().type('Meeting Test')

        // click start meeting
        cy.get('.kHPNQv').click()
        cy.wait(10000)

        // click on leave 
        cy.get('#EndCall').click()
        

   
    })
})