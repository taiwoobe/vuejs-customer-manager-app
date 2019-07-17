// https://docs.cypress.io/api/introduction/api.html

describe('Customers Page', () => {
    it('Testing the customers page to contain a logout button', () => {
      cy.visit('/customers')
      cy.get('.logout-btn').click()
      cy.url().should('include', '/login')
    })
    it('Testing the edit button to contain the /customers URL', () => {
      cy.visit('/customers')
      cy.get('svg').first().click()
      cy.url().should('include', '/customers/')
    })
  })
  