describe('Join table', () => {
    it('join table', () => {
        cy.visit('https://staging.tandem.chat/app/web')
        cy.get('[data-testid=google]').click()
        cy.wait(9000)

        // create meeting send @mention 
        cy.get('.NewMeetingButton__MeetingText-sc-6d8dcu-1').click()
        cy.wait(1000)
        cy.get('.dclKei').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .src__Column-xohg5z-1 > .jlOlxT > .src__Row-xohg5z-2').click()
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click().type('@Patrick{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter} yo yo yo{enter}')
        cy.wait(1000)
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click().type('@Swapnika{enter} this is an automated test from Patricks bot{enter}')
        cy.get('#EndCall').click()
        cy.wait(3000)

        // send @mention from room
        cy.get(':nth-child(6) > .src__Column-xohg5z-1 > .jlOlxT > .src__Row-xohg5z-2 > .text__Text-sc-1vvycwd-15').click({multiple: true})
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click().type('@Patrick{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{downarrow}{enter} yo yo yo{enter}')
        cy.wait(1000)
        cy.get('.bVrDEv > :nth-child(2) > .src__Root-xohg5z-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()


        // dm 
        cy.wait(3000)
        cy.contains('Patrick Mac').click()
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click().type('ayoooooo{enter}')
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click()
        

        // cross team @mention
        cy.wait(3000)
        cy.get('.gGtCgX > :nth-child(1) > .bebbWG > .PressablePrimitive__RootPressable-sc-130th01-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(2000)
        // switch teams
        cy.get(':nth-child(2) > .obfkP > .Alphatar__Wrapper-sc-1b47z1e-0 > .src__Root-xohg5z-0').click()
        cy.wait(4000)
        cy.get('.scrollbar-container > :nth-child(1) > :nth-child(3) > .src__Column-xohg5z-1 > .jlOlxT > .src__Row-xohg5z-2').click()
        cy.get('.InputBox__StyledMentionsInput-sc-1wrqfen-3__input').click().type('@Patrick{downarrow}{downarrow}{downarrow}{downarrow}{enter} crossteam chat{enter}')
        cy.wait(2000)
        cy.get('.bVrDEv > :nth-child(2) > .src__Root-xohg5z-0').click()
        //switches back to tandem team
        cy.get('.gGtCgX > :nth-child(1) > .bebbWG > .PressablePrimitive__RootPressable-sc-130th01-0 > .Icon__StyledMaterialIcon-idxmxm-1').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .obfkP').click()
        cy.wait(1000)

        // wave
        cy.contains('Patrick Mac').click()
        cy.get(':nth-child(14) > .kGxWoy > .ContactRow__Wrapper-sc-1v1mx8t-0 > .EntityActionsWrapper-u3a6n5-0 > :nth-child(1) > .src__Row-xohg5z-2 > .src__Root-xohg5z-0').click()

    })
})