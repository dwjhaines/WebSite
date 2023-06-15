var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-01.html',
            image:'images/tiles/week01-tile.jpg',
            title:'Week 1',
            category: ['diary']
        },
        {
            link:'week-02.html',
            image:'images/tiles/week02-tile.jpg',
            title:'Week 2',
            category: ['diary']
        },
        {
            link:'week-03.html',
            image:'images/tiles/week03-tile.jpg',
            title:'Week 3',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

