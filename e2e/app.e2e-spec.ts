import { MapFeaturePage } from './app.po';

describe('map-feature App', function() {
  let page: MapFeaturePage;

  beforeEach(() => {
    page = new MapFeaturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
