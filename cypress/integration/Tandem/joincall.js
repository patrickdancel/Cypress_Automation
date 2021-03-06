describe('Launch Tandem Web App, makes a call, mutes and unmutes,turns cam on/off, types in chat, leaves call', () => {
    it('Simulates call flow', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        // give time to login 
        cy.wait(10000)
        // calls macbook
        cy.contains('Patrick Mac').click()
        cy.get('.kVusTf').click()
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
        cy.get('#CallChat').click({force: true})
        cy.get('.cfVamX').click().type('testing how are you today?{enter}')


        cy.wait(3000)
        cy.get('#EndCall').click()  
    })
  })