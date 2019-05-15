/// <reference types="Cypress" />


describe("My suite", function(){

    it("My case", function(){
        cy.visit('/commands/actions')
        cy.get('#email1')
        .type("meuemail@email.com")
        .type('{del}{selectall}{backspace}')
        cy.contains('Email address')
    })
})