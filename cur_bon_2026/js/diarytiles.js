var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'https://photos.app.goo.gl/gvJr9u39WmUaaqv26',
            image:'images/curacao-tile.jpg',
            title:'1. Curaçao',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/U5vQXLRgbhMCJkdcA',
            image:'images/bonaire-tile.jpg',
            title:'2. Bonaire',
            category: ['photos']
        },
				{
            link:'curacao.html',
            image:'images/curacao-tile.jpg',
            title:'1. Curaçao',
            category: ['diary']
        },
        {
            link:'bonaire.html',
            image:'images/bonaire-tile.jpg',
            title:'2. Bonaire',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

