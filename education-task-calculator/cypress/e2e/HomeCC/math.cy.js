beforeEach(() => {
  cy.visit('/homeCC');
});
describe('it can add numbers', () => {
  it('2+2=4', () => {
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '4');
  });
  it('3930+93+29=4052', () => {
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
    cy.get('[data-cy="displayValue"]').should('have.text', '4052');
  });
});
describe('it can subtract numbers', () => {
  it('1-9=-8', () => {
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '-8');
  });
  it('0.5-2.4+90-23=65.1', () => {
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button."]').click();
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button."]').click();
    cy.get('[data-cy="button4"]').click();
    cy.get('[data-cy="button+"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '65.1');
  });
});
describe('it can multiply numbers', () => {
  it('3*9=27', () => {
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '27');
  });
  it('81*29*90=211410', () => {
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '211410');
  });
});
describe('it can divide numbers', () => {
  it('9/3=3', () => {
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '3');
  });
  it('5/6*3/25/7=0.014', () => {
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button6"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '0.014');
  });
});
describe('it can multiply numbers', () => {
  it('3*9=27', () => {
    cy.get('[data-cy="button3"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '27');
  });
  it('81*29*90=211410', () => {
    cy.get('[data-cy="button8"]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '211410');
  });
});
describe('it can solve equations brackets', () => {
  it('0.1(5) = 0.5', () => {
    cy.get('[data-cy="button0"]').click();
    cy.get('[data-cy="button."]').click();
    cy.get('[data-cy="button1"]').click();
    cy.get('[data-cy="button("]').click();
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button)"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '0.5');
  });
  it('7-(5*2/2/(9)) = 6.444', () => {
    cy.get('[data-cy="button7"]').click();
    cy.get('[data-cy="button-"]').click();
    cy.get('[data-cy="button("]').click();
    cy.get('[data-cy="button5"]').click();
    cy.get('[data-cy="button*"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button2"]').click();
    cy.get('[data-cy="button/"]').click();
    cy.get('[data-cy="button("]').click();
    cy.get('[data-cy="button9"]').click();
    cy.get('[data-cy="button)"]').click();
    cy.get('[data-cy="button)"]').click();
    cy.get('[data-cy="button="]').click();
    cy.get('[data-cy="displayValue"]').should('have.text', '6.444');
  });
});
