'use strict';

describe('Unit testing moves table directive', function() {
  var $compile;
  var $rootScope;
  var template;
  //var $httpBackend;

  beforeEach(module('swingcardApp','app/views/directives/x-steps-table.html'));
//  beforeEach(angular.mock.module('ngMockE2E'));
/*
  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('x-steps-table.html').passThrough();
  }));
*/
  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_) {

      //assign the template to the expected url called by the directive and put it in the cache
    template = $templateCache.get('app/views/directives/x-steps-table.html');
    $templateCache.put('views/directives/x-steps-table.html',template);
 

    $compile = _$compile_;
    $rootScope = _$rootScope_;


  }));
  
  it('inserts basic table structure', function() {
    var element = $compile('<steps-table></steps-table>')($rootScope);
    $rootScope.$digest();

//    console.log(element.html());
    expect(element.html()).toContain('table');
    expect(element.html()).toContain('<colgroup id="count" class="countColumn" colspan="2">');
    expect(element.html()).toContain('<colgroup id="count" class="countColumn" colspan="2">');
  });
});