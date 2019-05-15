/// <reference types="Cypress" />

describe("Criando Testes Automatizados para o site FunRetro", function(){
    var faker = require('faker');
    it("Logar no FunRetro", function(){
        cy.visit('')
        cy.get('.home-button').click()
        cy.get('#name').type(faker.name.findName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type(faker.internet.password())
        cy.get('#accept-terms').check()
        cy.get('#accept-subs').check()
        cy.get('.button').click()
    })
    it("Criar um Board novo", function(){
        cy.get('.dashboard-item')
        .click()

        cy.get('#newBoardName')
        .type('Fun Retro Sprint Test')
        .screenshot('boardName')

        cy.get(':nth-child(3) > button')
        .click()
    })
    it("Criando os itens positivos no board", function(){
        // altera o título de "Went well" para "Pontos Positivos"
        cy.get('.selected > .column-header > .ng-binding').click()
        cy.get('#new_name_1').clear()
        .type('Pontos Positivos').tab()
        cy.wait(1000)
        cy.get('[class=success-button]').focused().click()

        // preenche o primeiro card
        cy.get('.selected > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()

        // preenche o segundo card
        cy.get('.selected > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()
    })
    it("Criando os itens a melhorar no board", function(){
        // altera o título de "To improve" para "Pontos a melhorar"
        cy.get('[data-column-id="2"] > .column-header > .ng-binding').click()
        cy.get('#new_name_2').clear()
        .type('Pontos a melhorar').tab()
        cy.wait(1000)
        cy.get('[class=success-button]').focused().click()
        
        // preenche o primeiro card a melhorar
        cy.get('[data-column-id="2"] > .column-header > .add-card > .fa').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()
    })
    it("Criando Plano de Ação", function(){
        // altera o título de "Action items" para "Plano de Ação"
        cy.get('[data-column-id="3"] > .column-header > .ng-binding').click()
        cy.get('#new_name_3').clear()
        .type('Plano de Ação').tab()
        cy.wait(1000)
        cy.get('[class=success-button]').focused().click()
        
        // preenche o primeiro plano de ação
        cy.get('[data-column-id="3"] > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words(), { delay: 150 })
        cy.get('.editing > button').click()

    })

})