before(() => {
  cy.visit('/homeCC');
});
describe('Home page updates history correctly', () => {
  beforeEach(() => {
    cy.visit('/settings');
    cy.get('.settings > :nth-child(3)').click();
    cy.visit('/homeCC');
    cy.get('[data-cy="buttonC"]').click();
  });
  it('Can add new history logs: 2 + 2', () => {
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('.sc-jqUVSM')
      .children()
      .then((items) => {
        expect(items[0]).to.contain.text('2+2');
      });
  });
  it('Can add new history logs: 8+11+9+4+7', () => {
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('.sc-jqUVSM')
      .children()
      .then((items) => {
        expect(items[0]).to.contain.text('8+11');
        expect(items[1]).to.contain.text('8+11+9');
        expect(items[2]).to.contain.text('8+11+9+4');
        expect(items[3]).to.contain.text('8+11+9+4+7');
      });
  });
});
describe('Is in sync with homeCC history', () => {
  beforeEach(() => {
    cy.visit('/settings');
    cy.get('.settings > :nth-child(3)').click();
    cy.visit('/homeCC');
    cy.get('[data-cy="buttonC"]').click();
  });

  it('Can add 3930+93+29 to history', () => {
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.visit('/');
    cy.get('.sc-jqUVSM')
      .children()
      .then((items) => {
        expect(items[0]).to.contain.text('3930+93+29');
      });
  });
});
