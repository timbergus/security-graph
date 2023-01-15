describe('Secure Graph', () => {
  it('should be there.', () => {
    cy.visit('http://localhost:5173/security-graph/')
  })

  it('should have a tools panel', () => {
    cy.visit('http://localhost:5173/security-graph/')
    cy.findByRole('heading', { level: 1, name: 'Security Graph' }).should(
      'exist'
    )
  })

  it('should contain a group tool', () => {
    cy.visit('http://localhost:5173/security-graph/')
    cy.findByTestId('group-node-tool').should('exist')
  })

  it('should contain a permission tool', () => {
    cy.visit('http://localhost:5173/security-graph/')
    cy.findByTestId('permission-node-tool').should('exist')
  })

  it('should contain a user tool', () => {
    cy.visit('http://localhost:5173/security-graph/')
    cy.findByTestId('user-node-tool').should('exist')
  })

  it('should contain a company tool', () => {
    cy.visit('http://localhost:5173/security-graph/')
    cy.findByTestId('company-node-tool').should('exist')
  })
})
