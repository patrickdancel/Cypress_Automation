describe('Join room', () => {
    it('Joins room, turns camera on/off, leave room', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(7000)
        // click on room
        cy.contains('Bobalicious').click()
        cy.wait(2000)
        // click join to join room
        cy.get('.kVusTf').click()
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
        cy.get('.bVrDEv > :nth-child(2) > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
       
    })
  })