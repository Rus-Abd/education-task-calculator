before(() => {
  cy.visit('/settings');
});
describe('Erase history', () => {
  it('click erase history button', () => {
    cy.get('.settings > :nth-child(3)')
      .click()
      .should(() => {
        expect(localStorage.getItem('history')).to.equal('""');
      });
  });
});
