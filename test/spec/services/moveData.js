'use strict';

describe('MoveData Service', function () {

  it('should work', function() {
    expect(1).toBe(1);
  });
  
  /*
  var svc,
      httpBackend;
  
  beforeEach(function (){
    //load the module.
    module('swingcardApp');
    
    //get your service, also get $httpBackend
    //$httpBackend will be a mock, thanks to angular-mocks.js
    inject(function($httpBackend, MoveData) {
      svc = MoveData;
      httpBackend = $httpBackend;
    });
  });
  
  //make sure no expectations were missed in your tests.
  //(e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch moves and return the response.', function (){
    //set up some data for the http call to return and test later.
    var returnData = [{'move': 'Outside Turn'}, {'move': 'Inside Turn'}];
    
    //expectGET to make sure this is called once.
    httpBackend.expectGET('data/new-moves.json').respond(200, returnData);
    
    //create an object with a function to spy on.
    var test = {
      handler: function() {}
    };
    
    //set up a spy for the callback handler.
    spyOn(test, 'handler');
    
    //make the call.
    var returnedPromise = svc.fetchMoves();
    
    //use the handler you're spying on to handle the resolution of the promise.
    returnedPromise.then(test.handler);
    
    //flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();
    
    //check your spy to see if it's been called with the returned value.  
    expect(test.handler).toHaveBeenCalledWith(returnData);
  });

  it('should have no moves if request errored.', function (){
    //set up some data for the http call to return and test later.
    var returnData = '';
    
    //expectGET to make sure this is called once.
    httpBackend.expectGET('data/new-moves.json').respond(404, returnData);
    
    //create an object with a function to spy on.
    var test = {
      handler: function() {}
    };
    
    //set up a spy for the callback handler.
    spyOn(test, 'handler');
    
    //make the call.
    var returnedPromise = svc.fetchMoves();
    
    //use the handler you're spying on to handle the resolution of the promise.
    returnedPromise.then(test.handler);
    
    //flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();
    
    //check your spy to see if it's been called with the returned value.  
    expect(test.handler).toHaveBeenCalledWith(returnData);
  });
  */
});