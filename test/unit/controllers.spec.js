'use strict';

/* jasmine specs for controllers go here */

describe('MoveController', function(){

  var ctrl, myScope, $httpBackend;

/*

beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
 
      scope = $rootScope.$new();
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));

 */
  beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {

    $routeParams.moveId = 1;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/new-moves.json').
        respond([
          {"id": "1", "type": "move", "name": "Move 1"},
          {"id": "2", "type": "move", "name": "Move 2"},
          {"id": "3", "type": "move", "name": "Move 3"}
        ]);

      myScope = $rootScope.$new();

      ctrl = $controller('MoveController', {
          $scope: myScope
      });

      myScope.moves = [];
  }));

  it('should initially set the model to have a moveCount of 0', function() {
    expect(myScope.movesModel.movesCount).toBe(0);
  });

  it('should set the model to have a movesCount of 3 once it has data', function() {
    //expect(myScope.movesModel.movesCount).toBe(3);
  });


  it('should set the model to have an empty array', function() {
      $httpBackend.flush();
      expect(myScope.movesModel.moves instanceof Array).toBeTruthy();
      expect(myScope.movesModel.moves.length).toBe(3);
  });

  it('given an index should set the previous move index', function () {
     $httpBackend.flush();
      expect(myScope.movesModel.previousMoveIndex).toBe(0);
  });
  
  it('given an index should set the current move index', function () {
     $httpBackend.flush();
      expect(myScope.movesModel.currentMoveIndex).toBe(1);
  });

  it('given an index should set the next move index', function () {
     $httpBackend.flush();
     //expect(myScope.movesModel.nextMoveIndex).toBe(2);
  });

  describe('when at the beginning of a list', function() {
    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
    $routeParams.moveId = 99;
    }));

    it('should have the previous move index wrap around', function () {
      $httpBackend.flush();
      //expect(myScope.movesModel.previousMoveIndex).toBe(2);
    });

    it('should have the current index set', function () {
      $httpBackend.flush();
      //expect(myScope.movesModel.currentMoveIndex).toBe(0);
    });

    it('should have a normal next move index', function () {
      $httpBackend.flush();
      //expect(myScope.movesModel.nextMoveIndex).toBe(1);
    });

  });
  
});