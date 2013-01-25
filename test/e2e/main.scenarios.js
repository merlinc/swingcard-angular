'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /move when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/move");
  });


  describe('move', function() {

    beforeEach(function() {
      browser().navigateTo('#/move');
    });


    it('should render move when user navigates to /move', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 1/);
    });

  });


  describe('tip', function() {

    beforeEach(function() {
      browser().navigateTo('#/tip');
    });


    it('should render tip when user navigates to /tip', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
