var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'https://photos.app.goo.gl/kkEQDtzf5zGxiJej9',
            image:'images/part1-tile.jpg',
            title:'1. Curaçao',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/U5vQXLRgbhMCJkdcA',
            image:'images/part2-tile.jpg',
            title:'2. Bonaire',
            category: ['photos']
        },
				{
            link:'curaçao.html',
            image:'images/part1-tile.jpg',
            title:'1. Curaçao',
            category: ['diary']
        },
        {
            link:'bonaire.html',
            image:'images/part2-tile.jpg',
            title:'2. Bonaire',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

