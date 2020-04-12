var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-01.html',
            image:'images/tiles/week01-tile.JPG',
            title:'Week 1',
            category: ['diary']
        },
        {
            link:'week-02.html',
            image:'images/tiles/week02-tile.JPG',
            title:'Week 2',
            category: ['diary']
        },
        {
            link:'week-03.html',
            image:'images/tiles/week03-tile.JPG',
            title:'Week 3',
            category: ['diary']
        },
        {
            link:'week-04.html',
            image:'images/tiles/week04-tile.JPG',
            title:'Week 4',
            category: ['diary']
        },
        {
            link:'week-05.html',
            image:'images/tiles/week05-tile.JPG',
            title:'Week 5',
            category: ['diary']
        },
        {
            link:'week-06.html',
            image:'images/tiles/week06-tile.JPG',
            title:'Week 6',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

