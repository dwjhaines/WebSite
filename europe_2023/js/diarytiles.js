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
            link:'week-04.html',
            image:'images/tiles/week04-tile.jpg',
            title:'Week 4',
            category: ['diary']
        },
        {
            link:'week-05.html',
            image:'images/tiles/week05-tile.jpg',
            title:'Week 5',
            category: ['diary']
        },
        {
            link:'week-06.html',
            image:'images/tiles/week06-tile.jpg',
            title:'Week 6',
            category: ['diary']
        },
        {
            link:'week-07.html',
            image:'images/tiles/week07-tile.jpg',
            title:'Week 7',
            category: ['diary']
        },
        {
            link:'week-08.html',
            image:'images/tiles/week08-tile.jpg',
            title:'Week 8',
            category: ['diary']
        },
        {
            link:'week-09.html',
            image:'images/tiles/week09-tile.jpg',
            title:'Week 9',
            category: ['diary']
        },
        {
            link:'https://photos.app.goo.gl/nEyTiuGoyZRH9bbF9',
            image:'images/tiles/week01-tile.jpg',
            title:'1. Germany',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/zSSKLu8iGrZhBqxW6',
            image:'images/tiles/week04-tile.jpg',
            title:'2. Georgia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/CuWzGTW7y2eNVfNY7',
            image:'images/tiles/week07-tile.jpg',
            title:'3. Germany/Austria',
            category: ['photos']
        }
    ]
    this.weeks=weeks;
});

