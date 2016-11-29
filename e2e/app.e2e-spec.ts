import { ModeloDashboardPage } from './app.po';

describe('modelo-dashboard App', function() {
  let page: ModeloDashboardPage;

  beforeEach(() => {
    page = new ModeloDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
