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
        },
        {
            link:'week-07.html',
            image:'images/tiles/week07-tile.JPG',
            title:'Week 7',
            category: ['diary']
        },
        {
            link:'week-08.html',
            image:'images/tiles/week08-tile.JPG',
            title:'Week 8',
            category: ['diary']
        },
        {
            link:'week-09.html',
            image:'images/tiles/week09-tile.JPG',
            title:'Week 9',
            category: ['diary']
        },
        {
            link:'week-10.html',
            image:'images/tiles/week10-tile.JPG',
            title:'Week 10',
            category: ['diary']
        },
        {
            link:'week-11.html',
            image:'images/tiles/week11-tile.JPG',
            title:'Week 11',
            category: ['diary']
        },
        {
            link:'week-12.html',
            image:'images/tiles/week12-tile.JPG',
            title:'Week 12',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

