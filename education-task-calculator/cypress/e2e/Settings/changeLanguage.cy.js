before(() => {
  cy.visit('/settings');
});
describe('change to russian', () => {
  it('Click button to change language', () => {
    cy.get('.settings > :nth-child(4)').click();
  });

  it('Settings page language has changed', () => {
    const headerTitle = cy.get('.sc-gsnTZi');
    headerTitle.should('have.text', ' Калькулятор');

    cy.get('[href="/"]').should('have.text', 'Главная');
    cy.get('[href="/homeCC"]').should('have.text', 'Главная(КК)');
    cy.get('[href="/settings/"]').should('have.text', 'Настройки');
    cy.get('h2').should('have.text', 'Настройки');
    cy.get('label').should('have.text', 'Изменить Тему');
    cy.get('.settings > :nth-child(3)').should(
      'have.text',
      'Стереть всю историю',
    );
    cy.get('.settings > :nth-child(4)').should('have.text', 'Изменить Язык');
  });
  it('HomeCC page language has changed', () => {
    cy.get('[href="/homeCC"]').click();
    cy.get('.sc-papXJ').should('have.text', 'История');
  });
  it('Home page language has changed', () => {
    cy.get('[href="/"]').click();
    cy.get('.sc-papXJ').should('have.text', 'История');
  });
});
