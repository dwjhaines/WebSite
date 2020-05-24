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
        }
    ]
    this.weeks=weeks;
});

