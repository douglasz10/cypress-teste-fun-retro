/// <reference types="Cypress" />

describe("FunRetro - Drag and Drop Test", function(){
    var faker = require('faker');
    it("My case - SignUp FunRetro", function(){
        cy.visit('')
        cy.get('.home-button').click()
        cy.get('#name').type(faker.name.findName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type(faker.internet.password())
        cy.get('#accept-terms').check()
        cy.get('#accept-subs').check()
        cy.get('.button').click()
        cy.wait(2000)
    })
    it("My case - Create Board Name", function(){
        cy.get('.dashboard-item')
        .click()

        cy.get('#newBoardName')
        .type('Fun Retro Teste')

        cy.get(':nth-child(3) > button')
        .click()
    })
    it("My case - Create Went Well Item", function(){
        cy.get('.selected > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()
    })

    it("Drag and Drop element in To improve Column", function(){
        cy.get('.drop-area')
        .trigger('mousedown', {which: 1})
        .trigger('mousemove', { clientX: 180 ,clientY: 800})
        .trigger('mouseup', { force: true })
    })


})