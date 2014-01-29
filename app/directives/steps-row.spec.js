'use strict';

describe('steps-row directive', function() {
  var $compile;
  var $rootScope;
  var template;

  beforeEach(module('swingcardApp','app/views/directives/x-steps-row.html'));

  beforeEach(inject(function($templateCache, _$compile_, _$rootScope_) {

      //assign the template to the expected url called by the directive and put it in the cache
    template = $templateCache.get('app/views/directives/x-steps-row.html');
    $templateCache.put('views/directives/x-steps-row.html',template);

    $compile = _$compile_;
    $rootScope = _$rootScope_;

 
  }));
  
  it('displays data when given', function() {
    $rootScope.step = {};
    $rootScope.step.beatsCount = ['1','2'];
    $rootScope.step.beats = ['10','01'];
    $rootScope.step.description = 'step description';

  //  var element = $compile('<steps-row></steps-row>')($rootScope);
/*
    $rootScope.$digest();

//    console.log(element.html());
    expect(element.html()).toContain('1 2');
    expect(element.html()).toContain('01');
    expect(element.html()).toContain('10');
    expect(element.html()).toContain('step description');
  */
  });
});