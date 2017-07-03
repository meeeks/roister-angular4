import { RoisterDashboradNewPage } from './app.po';

describe('roister-dashborad-new App', () => {
  let page: RoisterDashboradNewPage;

  beforeEach(() => {
    page = new RoisterDashboradNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
