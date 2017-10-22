'use strict';

/* Controllers */

var cardApp = angular.module('cardApp', []);

cardApp.controller('CardControl', function($scope) {
  $scope.cards = [
    {
      'title': 'Brian taget et hovedspring ud af en tysklandsbus',
      'year': '1997',
      'image': 'slotspilsner.png'
    },
    {
      'title': 'Brian og Janni bliver gift',
      'year': '2017',
      'image': 'brian_janni_gift.jpg'
    }
  ];
});
