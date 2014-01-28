'use strict';

describe('Move detail controller', function() {

  var scope;
  var ctrl;
  var httpBackend;
  var q;
  var deferred;
  var moveDataService;
  var location;


  beforeEach(module('swingcardApp'));

  beforeEach(function() {
    moveDataService = {
      getRandomMove: function() {
        deferred = q.defer();
        return deferred.promise;
      }
    };
  });

  beforeEach(inject(function($rootScope, $controller, _$httpBackend_, $q, $location) {
    scope = $rootScope.$new();
    q = $q;
    location = $location;

    ctrl = $controller('MoveDetailCtrl', {
      $scope: scope,
      MoveData: moveDataService
    });

  }));

  it('on creation it should invoke randomMove through MoveData service', function() {
    spyOn(moveDataService, 'getRandomMove').andCallThrough();
    scope.randomMove();

    deferred.resolve({moveId: 10});
    scope.$root.$digest();

    expect(moveDataService.getRandomMove).toHaveBeenCalled();
    expect(scope.move).not.toBe(undefined);
    expect(scope.move.moveId).toBe(10);
  });


  it('should handle not being able to load a move', function() {
    spyOn(moveDataService, 'getRandomMove').andCallThrough();

    scope.randomMove();
    deferred.reject('Error loading data');
    scope.$root.$digest();
    
    expect(moveDataService.getRandomMove).toHaveBeenCalled();
    expect(scope.error).not.toBe(undefined);
    expect(scope.error).toBe('Error loading data');
  });

  it('should clear the error after a second successful call', function() {
    spyOn(moveDataService, 'getRandomMove').andCallThrough();

    scope.randomMove();
    deferred.reject('Error loading data');
    scope.$root.$digest();

    scope.randomMove();
    deferred.resolve({moveId: 49});
    scope.$root.$digest();
    
    expect(moveDataService.getRandomMove).toHaveBeenCalled();
    expect(moveDataService.getRandomMove.callCount).toBe(2);
    expect(scope.move.moveId).toBe(49);
    expect(scope.error).toBe('');
  });

  describe('\'s url', function() {
    it('should change to the slug of the move', function() {
      spyOn(moveDataService, 'getRandomMove').andCallThrough();
      spyOn(location, 'path');

      scope.randomMove();

      deferred.resolve({'slug': 'slug-name'});
      scope.$root.$digest();

      expect(location.path).toHaveBeenCalledWith('/move/slug-name');
    });

    it('should only change the url once', function() {
      spyOn(moveDataService, 'getRandomMove').andCallThrough();
      spyOn(location, 'path');

      scope.randomMove();

      deferred.resolve({'slug': 'slug-name'});
      scope.$root.$digest();

      expect(location.path).toHaveBeenCalledWith('/move/slug-name');

      scope.$root.$digest();

      expect(moveDataService.getRandomMove).not.toHaveBeenCalled();
    });

    it('should load a move', function() {
      location.path('/move/another-slug');
      scope.$root.$digest();

      expect(location.path).toHaveBeenCalledWith('/move/another-slug');

    });
  });
});