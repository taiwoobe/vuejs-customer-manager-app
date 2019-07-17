// https://docs.cypress.io/api/introduction/api.html

describe('Login Page', () => {
  it('Testing the login page to contain a title', () => {
    cy.visit('/login')
    cy.contains('h2', 'Login to Customer Management System')
  })

  it('checks login details and navigates to right URl', () => {
    cy.visit('/login')
    cy.get('.email-field')
      .type('eve.holt@reqres.in')
      .get('.password-field')
      .type('cityslicka')
    cy.get('button').click()
    // Should be on a new URL which includes '/customers'
    cy.url().should('include', '/customers')

  })
})
