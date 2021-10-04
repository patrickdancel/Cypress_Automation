describe('Join room', () => {
    it('Joins room, turns camera on/off, leave room', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on room
        cy.get(':nth-child(7) > .sc-gtssRu > .eWwHwG > .sc-dlnjPT > .sc-hHEjAm').click()
        cy.wait(2000)
        // click join to join room
        cy.get('.bqAyor').click()
        cy.wait(2000)
        // turn on camera
        cy.get('#VideoToggle').click()
        cy.wait(3000)
        cy.get('#VideoToggle').click()
        cy.wait(2000)
        //mute/unmute
        cy.get('#MuteToggle').click()
        cy.wait(3000)
        cy.get('#MuteToggle').click()
        cy.wait(1000)

        // end call
        cy.get('#EndCall').click()
        // close details panel
        cy.get('.kIdrfC > :nth-child(2) > .sc-bdnylx').click()
       
    })
  })