var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'part-01.html',
            image:'images/tiles/part01-tile.jpg',
            title:'Part 1 - U.S.A.',
            category: ['diary']
        },
        {
            link:'part-02.html',
            image:'images/tiles/part02-tile.jpg',
            title:'Part 2 - Hawaii',
            category: ['diary']
        },
        {
            link:'part-03.html',
            image:'images/tiles/part03-tile.jpg',
            title:'Part 3 - New Zealand',
            category: ['diary']
        },
        {
            link:'part-04.html',
            image:'images/tiles/part04-tile.jpg',
            title:'Part 4 - Sydney to Perth',
            category: ['diary']
        },
        {
            link:'part-05.html',
            image:'images/tiles/part05-tile.jpg',
            title:'Part 5 - Fremantle',
            category: ['diary']
        },
        {
            link:'part-06.html',
            image:'images/tiles/part06-tile.jpg',
            title:'Part 6 - Freo to Cairns',
            category: ['diary']
        },
        {
            link:'part-07.html',
            image:'images/tiles/part07-tile.jpg',
            title:'Part 7 - Cairns to Sydney',
            category: ['diary']
        },
        {
            link:'part-08.html',
            image:'images/tiles/part08-tile.jpg',
            title:'Part 8 - Sydney',
            category: ['diary']
        },
        {
            link:'part-09.html',
            image:'images/tiles/part09-tile.jpg',
            title:'Part 9 - Sydney cont.',
            category: ['diary']
        },
        {
            link:'part-10.html',
            image:'images/tiles/part10-tile.jpg',
            title:'Part 10 - New Zealand',
            category: ['diary']
        },
        {
            link:'part-11.html',
            image:'images/tiles/part11-tile.jpg',
            title:'Part 11 - Indonesia',
            category: ['diary']
        },
        {
            link:'part-12.html',
            image:'images/tiles/part12-tile.jpg',
            title:'Part 12 - Singapore',
            category: ['diary']
        },
        {
            link:'part-13.html',
            image:'images/tiles/part13-tile.jpg',
            title:'Part 13 - Malaysia',
            category: ['diary']
        },
        {
            link:'part-14.html',
            image:'images/tiles/part14-tile.jpg',
            title:'Part 14 - Thailand',
            category: ['diary']
        },
        {
            link:'part-15.html',
            image:'images/tiles/part15-tile.jpg',
            title:'Part 15 - Sri Lanka',
            category: ['diary']
        },
        {
            link:'part-16.html',
            image:'images/tiles/part16-tile.jpg',
            title:'Part 16 - India',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

