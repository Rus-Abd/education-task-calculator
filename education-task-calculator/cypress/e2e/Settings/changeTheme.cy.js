before(() => {
  cy.visit('/settings');
});
describe('Change to dark theme', () => {
  it('Settings page theme changed', () => {
    cy.get('[data-cy="theme-select"]').select('Dark');
    // cy.get('[data-cy="theme-dark"]').click();
    cy.get('.sc-bczRLJ').should(
      'have.css',
      'background-color',
      'rgb(54, 34, 34)',
    );
  });

  it('HomeCC page theme has changed', () => {
    cy.get('[href="/homeCC"]').click();
    cy.get('[data-cy="button7"]')
      .should('have.css', 'background-color', 'rgb(23, 16, 16)')
      .should('have.css', 'color', 'rgb(255, 255, 255)');
  });
  it('Home page theme has changed', () => {
    cy.get('[href="/"]').click();
    cy.get('[data-cy="button7"]')
      .should('have.css', 'background-color', 'rgb(23, 16, 16)')
      .should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
