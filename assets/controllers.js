'use strict';

/* Controllers */

var cardApp = angular.module('cardApp', []);

cardApp.controller('CardControl', function($scope) {
  $scope.cards = [
    {
      'title': 'Hvornår tog Brian et hovedspring ud af en tysklandsbus?',
      'year': ' ',
      'image': 'slotspilsner.png'
    },
    {
      'title': 'Hvornår tog Brian et hovedspring ud af en tysklandsbus?',
      'year': '1997',
      'image': 'slotspilsner.png'
    },
    {
      'title': 'Verdens største løg',
      'image': 'verdensstoersteloeg'
    }
  ];
});
