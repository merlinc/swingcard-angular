'use strict';

angular.module('swingcardApp')
  .factory('DataTransformer', function () { //, $route, $routeParams) {
    var rewrap = function rewrap(data) {

      var moveIndex, stepIndex, beatIndex;
      var moveLength, stepLength, beatsLength;
      var currentMove, currentStep, currentBeat;
      var beatCount;

      moveLength = data.length;
      for(moveIndex=0; moveIndex < moveLength; moveIndex++) {
        currentMove = data[moveIndex];
        stepLength = currentMove.steps.length;
        console.log('Current Move', currentMove);
        beatCount = 0;

        for(stepIndex=0; stepIndex < stepLength; stepIndex++) {
          currentStep = currentMove.steps[stepIndex];

          console.log('Current Step', currentStep);
          beatsLength = currentStep.beats.length;
          currentStep.beatsCount = [];

          for(beatIndex=0; beatIndex < beatsLength; beatIndex++) {
            currentBeat = currentStep.beats[beatIndex];

            // 11 and 111 indicate 2 beats per couplet, 
            // 011 and 110 indicate swing beats
            // all the others indicate 1 beat

            if(-1 !== ['10','01'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['11'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['100', '001'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['010'].indexOf(currentBeat)) {
              currentStep.beatsCount.push('and');
            } else if(-1 !== ['110'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push('and');
            } else if(-1 !== ['011'].indexOf(currentBeat)) {
              currentStep.beatsCount.push('and');
              currentStep.beatsCount.push(++beatCount);
            } else if(-1 !== ['111'].indexOf(currentBeat)) {
              currentStep.beatsCount.push(++beatCount);
              currentStep.beatsCount.push('and');
              currentStep.beatsCount.push(++beatCount);
            }
          }
        }
      }
      return data;
    };

    var extrapolateSteps = function extrapolateSteps(steps) {
      var returnSteps = [];
      var i;
      var length;

      length = steps.length;
      // copy object, don't pollute external variables
      for(i=0; i<steps.length; i++) {
        returnSteps.push({'sid': steps[i].sid, 'beats': steps[i].beats.slice(), 'description': steps[i].description});
      }

      console.log('Data', returnSteps);

      var totalBeats = 0;
      // modify copied objects
      for(i=0; i<steps.length; i++) {
        if(steps[i].beats[0] === '10') {
          returnSteps[i].beatCount = [++totalBeats];
        } else if(steps[i].beats[0] === '01') {
          returnSteps[i].beatCount = [++totalBeats];
        } else {
          returnSteps[i].beatCount = ['0'];
        }
      }

      return returnSteps;
    };

    return {
      rewrap: rewrap,
      extrapolateSteps: extrapolateSteps
    };
  });