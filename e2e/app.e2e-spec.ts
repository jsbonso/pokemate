import { PokematePage } from './app.po';

describe('pokemate App', () => {
  let page: PokematePage;

  beforeEach(() => {
    page = new PokematePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
