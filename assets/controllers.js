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
    },
    {
      'title': 'Brian tager et hovedspring ud af en flyttebil',
      'year': '',
      'image': ''
    },
    {
      'title': 'Brian tager et hovedspring på den store rampe i klubben',
      'year': '',
      'image': ''
    },
    {
      'title': 'Brian frier til Janni',
      'year': '2012',
      'image': 'eforen.jpg'
    },
    {
      'title': 'Janni og Brian møder hinanden',
      'year': '',
      'image': ''
    },
    {
      'title': 'Janni og Michael slår Mette og Brian i ølbowlingfinalen',
      'year': '',
      'image': ''
    },
    {
      'title': 'Janni ser Mathiases røvhår',
      'year': '',
      'image': ''
    },
    {
      'title': 'Janni bliver født',
      'year': '1981',
      'image': ''
    },
    {
      'title': 'Brian bliver født',
      'year': '1980',
      'image': ''
    },
    {
      'title': 'Janni bliver student',
      'year': '2001',
      'image': ''
    },
    {
      'title': 'Brian dropper ud af dyrepasseruddannelsen',
      'year': '1999',
      'image': ''
    },
    {
      'title': 'Janni får sit første kys',
      'year': '2001',
      'image': 'kys.jpg'
    },
    {
      'title': 'Brian får sit første kys',
      'year': '1994',
      'image': 'kys.jpg'
    },
    {
      'title': 'Brian er på Malta',
      'year': '1997',
      'image': 'malta.jpg'
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    },
    {
      'title': '',
      'year': '',
      'image': ''
    }
  ];
});
