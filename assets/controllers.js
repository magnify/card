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
      'year': '1986',
      'image': 'flyttebil.jpg'
    },
    {
      'title': 'Brian tager et hovedspring på den store rampe i klubben',
      'year': '1993',
      'image': 'halfpipe.jpeg'
    },
    {
      'title': 'Brian frier til Janni',
      'year': '2012',
      'image': 'eforen.jpg'
    },
    {
      'title': 'Janni og Brian møder hinanden',
      'year': '2009',
      'image': 'moedtes.jpg'
    },
    {
      'title': 'Janni og Michael slår Mette og Brian i ølbowlingfinalen',
      'year': '2011',
      'image': 'oelbowling.jpg'
    },
    {
      'title': 'Janni ser Mathiases røvhår',
      'year': '2011',
      'image': 'rovhaar.jpg'
    },
    {
      'title': 'Janni bliver født',
      'year': '1981',
      'image': 'janni-foedt.png'
    },
    {
      'title': 'Brian bliver født',
      'year': '1980',
      'image': 'brian-foedt.jpg'
    },
    {
      'title': 'Janni bliver student',
      'year': '2001',
      'image': 'student.jpg'
    },
    {
      'title': 'Brian dropper ud af dyrepasseruddannelsen',
      'year': '1999',
      'image': 'dyrepasser.jpg'
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
      'title': 'Janni snaver 19 fyre på én aften',
      'year': '2002',
      'image': 'snaver.jpg'
    },
    {
      'title': 'Janni og Brian flytter sammen',
      'year': '2010',
      'image': 'noerrealle.jpg'
    },
    {
      'title': 'Brian ser en flok ællinger, tager et billede og sender til Janni',
      'year': '2012',
      'image': 'aender.png'
    },
    {
      'title': 'Janni får sit første job',
      'year': '1994',
      'image': 'hundelufter.jpg'
    },
    {
      'title': 'Janni går kold til en fest og bliver kørt på skadestuen',
      'year': '2001',
      'image': 'george-clooney.png'
    },
    {
      'title': 'Brian kommer op at slås med sin matematiklærer',
      'year': '1989',
      'image': 'fightclub.jpg'
    },
    {
      'title': 'Brian ridser en parkeret BMW',
      'year': '1985',
      'image': 'bmw.jpg'
    },
    {
      'title': 'Brian forsvandt',
      'year': '1981',
      'image': 'forsvandt.jpg'
    },
    {
      'title': 'Brian og Johnny måler hvor meget toiletpapir der er på en toiletrulle',
      'year': '1983',
      'image': 'toiletpapir.jpg'
    },
    {
      'title': 'Brian bliver tingfinder',
      'year': '1984',
      'image': 'tingfinder.jpg'
    },
    {
      'title': 'Brian får en lillebror',
      'year': '1991',
      'image': 'lennart.jpg'
    },
    {
      'title': 'Janni scorer en buschauffør',
      'year': '2007',
      'image': 'buschauffoer.jpg'
    },
    {
      'title': 'Janni farer vild 500 meter fra sit hus',
      'year': '1985',
      'image': 'lost.png'
    },
    {
      'title': 'Janni vinder Eurovision pokalen',
      'year': '2014',
      'image': 'eurovision.jpg'
    },
    {
      'title': 'Janni stjæler en sofa',
      'year': '2008',
      'image': 'sofa.jpg'
    },
    {
      'title': 'Brian er til Nik og Jay koncert',
      'year': '2007',
      'image': 'nik-jay.jpg'
    }
  ];
});
