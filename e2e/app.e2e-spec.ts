import { CorkappfrontPage } from './app.po';

describe('corkappfront App', () => {
  let page: CorkappfrontPage;

  beforeEach(() => {
    page = new CorkappfrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
