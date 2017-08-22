import { CodelyzerPage } from './app.po';

describe('codelyzer App', () => {
  let page: CodelyzerPage;

  beforeEach(() => {
    page = new CodelyzerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
