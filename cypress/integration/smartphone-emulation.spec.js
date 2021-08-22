const appList = ['알람', '메모', '사진'];

const routeApp = (appName, appId) => {
  cy.get('.app-icon').contains(appName).click();
  cy.get(appId).should('exist');
};

const dragEnterTest = (appName) => {
  cy.get('.app-icon')
    .contains(appName)
    .trigger('dragenter')
    .should('have.class', 'dragenter')
    .trigger('dragleave')
    .should('not.have.class', 'dragenter');
};

function dragTest(appName, x, y) {
  cy.get('.app-icon')
    .contains(appName)
    .trigger('mousedown', { which: 1 })
    .trigger('mousemove', { clientX: x, clientY: y })
    .trigger('mouseup', { force: true });
}

describe('home page test code', () => {
  beforeEach(() => {
    cy.viewport(700, 700);
    cy.visit('/');
  });

  it('알람 앱을 우클릭할 떄, 알람 앱이 렌더링된다.', () => {
    routeApp('알람', '.alarm');
  });
  it('메모 앱을 우클릭할 떄, 메모 앱이 렌더링된다.', () => {
    routeApp('메모', '.memo');
  });
  it('사진 앱을 우클릭할 떄, 사진 앱이 렌더링된다.', () => {
    routeApp('사진', '.photo');
  });
  it('dragenter일때, dragenter 클래스가 추가되고, dragleave일때, 제거된다.', () => {
    appList.forEach((app) => dragEnterTest(app));
  });
  it('알람앱을 사진앱 영역에 드레그 앤 드롭할 때, 알람앱과 사진앱의 위치가 변경된다.', () => {
    dragTest('알람', 300, 150);
  });
});
