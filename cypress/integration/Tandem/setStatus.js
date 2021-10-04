describe('Status', () => {
    it('Sets custom status, selects status', () => {
        // launch site and login, very first time you will have to login
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on status
        cy.get('.lnHtr > .sc-csTaMs > .sc-giAqnE').click()
        cy.wait(2000)
       
        // type in status and save
        cy.get('.sc-daBvwG > .sc-jUfxsr').click().type('testing')
        cy.get('.sc-cBoprd').click()
        cy.wait(2000)

        // clear status and close
        cy.get('.lnHtr > .sc-csTaMs > .sc-giAqnE').click()
        cy.wait(3000)
        cy.get('.jmNbpo > .sc-bdnylx > .sc-hiKfjK').click()
        cy.get('#Close > .sc-hiKfjK').click()
        cy.wait(2000)

        // select a status
        cy.get('.lnHtr > .sc-csTaMs > .sc-giAqnE').click()
        cy.wait(2000)
        cy.get('.sc-kGVuQl > :nth-child(9)').click()
        cy.wait(2000)

        // clear status
        cy.get('.lnHtr > .sc-csTaMs > .sc-giAqnE').click()
        cy.wait(3000)
        cy.get('.jmNbpo > .sc-bdnylx > .sc-hiKfjK').click()
        cy.get('#Close > .sc-hiKfjK').click()
        cy.wait(2000)      

        
    })
})