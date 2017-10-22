'use strict';

/* Controllers */

var cardApp = angular.module('cardApp', []);

cardApp.controller('CardControl', function($scope) {
  $scope.cards = [
    {
      'title': 'Brian tager et hovedspring ud af en tysklandsbus',
      'year': '1997',
      'image': 'slotspilsner.png'
    },
    {
      'title': 'Brian og Janni bliver gift',
      'year': '2017',
      'image': 'brian_janni_gift.jpg'
    },
    {
      'title': 'FAD kom til verden i Brians ungdomsbolig',
      'year': '2003',
      'image': 'fad_opfundet.jpg'
    }
  ];
});
