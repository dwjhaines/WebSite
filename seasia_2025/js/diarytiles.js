var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'https://photos.app.goo.gl/ghqBDUCAH2xH8iLQA',
            image:'images/part1-tile.jpg',
            title:'1. Malaysia and Thailand',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/cQcvoLkvVJRnwuKm9',
            image:'images/part2-tile.jpg',
            title:'2. Laos',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/Hsqmk8WEjnsUq7h29',
            image:'images/part3-tile.jpg',
            title:'3. Cambodia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/e5P85csCfnRBxmGc8',
            image:'images/part4-tile.jpg',
            title:'4. Thailand',
            category: ['photos']
        }
    ]
    this.weeks=weeks;
});

