var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'part-01.html',
            image:'images/tiles/part01-tile.jpg',
            title:'Part 1 - Malaysia',
            category: ['diary']
        },
        {
            link:'part-02.html',
            image:'images/tiles/part02-tile.jpg',
            title:'Part 2 - Indonesia',
            category: ['diary']
        },
        {
            link:'part-03.html',
            image:'images/tiles/part03-tile.jpg',
            title:'Part 3 - Thailand/Malaysia',
            category: ['diary']
        },
        {
            link:'part-04.html',
            image:'images/tiles/part04-tile.jpg',
            title:'Part 4 - Australia',
            category: ['diary']
        },
        {
            link:'part-05.html',
            image:'images/tiles/part05-tile.jpg',
            title:'Part 5 - Thailand',
            category: ['diary']
        },
        {
            link:'part-06.html',
            image:'images/tiles/part06-tile.jpg',
            title:'Part 6 - Laos',
            category: ['diary']
        },
        {
            link:'part-07.html',
            image:'images/tiles/part07-tile.jpg',
            title:'Part 7 - Thailand',
            category: ['diary']
        },
        {
            link:'part-08.html',
            image:'images/tiles/part08-tile.jpg',
            title:'Part 8 - Cambodia',
            category: ['diary']
        },
        {
            link:'part-09.html',
            image:'images/tiles/part09-tile.jpg',
            title:'Part 9 - Vietnam',
            category: ['diary']
        },
        {
            link:'part-10.html',
            image:'images/tiles/part10-tile.jpg',
            title:'Part 10 - Thailand',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

