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
            link:'',
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

