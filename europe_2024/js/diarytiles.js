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
        },
        {
            link:'https://photos.app.goo.gl/Ay1Yw1Qh4LPvjkda7',
            image:'images/tiles/week01-tile.jpg',
            title:'1. Germany/Italy',
            category: ['photos']
        },
        {
            link:'',
            image:'images/tiles/week04-tile.jpg',
            title:'2. Euro 2024',
            category: ['photos']
        },
        {
            link:'',
            image:'images/tiles/week07-tile.jpg',
            title:'3. Germany/Belgium',
            category: ['photos']
        }
    ]
    this.weeks=weeks;
});

