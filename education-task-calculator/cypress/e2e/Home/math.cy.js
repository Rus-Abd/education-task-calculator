before(() => {
  cy.visit('/');
});
afterEach(() => {
  cy.get('[data-cy="buttonC"]').click();
});
describe('it can add numbers', () => {
  it('2+2=4', () => {
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '4');
  });
  it('8+11+9+4+7=39', () => {
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
    cy.get('[data-cy="displayValue"]').should('have.text', '39');
  });
});

describe('it can subtract numbers', () => {
  it('20-18', () => {
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '2');
  });
  it('2-41-9-4-6=-58', () => {
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button6"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '-58');
  });
});

describe('it can multiply numbers', () => {
  it('5*4', () => {
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '20');
  });
  it('8*11*9*4*7=22176', () => {
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '22176');
  });
});
describe('it can divide numbers', () => {
  it('3719/73', () => {
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '50.945');
  });
  it('5/4/32/8=0.005', () => {
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '0.005');
  });
});
