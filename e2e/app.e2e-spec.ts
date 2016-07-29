import { Ng2JwtTs1Page } from './app.po';

describe('ng2-jwt-ts-1 App', function() {
  let page: Ng2JwtTs1Page;

  beforeEach(() => {
    page = new Ng2JwtTs1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
