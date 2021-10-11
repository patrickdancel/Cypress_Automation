describe('Launch Tandem Web App, makes a call, mutes and unmutes,turns cam on/off, types in chat, leaves call', () => {
    it('Simulates call flow', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        // give time to login 
        cy.wait(10000)
        // calls macbook
        cy.contains('Patrick+mac').click()
        cy.get('.dvjQFC').click()
        // unmute/mute
        cy.get('#MuteToggle').click()
        cy.wait(5000)
        cy.get('#MuteToggle').click()
        // turn on camera
        cy.get('#VideoToggle').click()
        cy.wait(4000)
        // turn off camera
        cy.get('#VideoToggle').click()
        // click chat button
        cy.get('#CallChat').click()
        cy.get('.jBGJhK > .sc-cGKHXZ').click().type('testing how are you today?{enter}')
        cy.get('.haaQWJ > .sc-csTaMs > .sc-bdnylx > .sc-hiKfjK').click()

        // click on screenshare
        cy.get('#ScreenShareToggle').click()

        cy.wait(3000)
        // click on settings
        // cy.get('#More').click()
        
        // leave conversation
        cy.get('.sc-cBoprd').click()  
    })
  })