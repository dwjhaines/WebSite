var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'part-01.html',
            image:'images/tiles/part01-tile.JPG',
            title:'Part 1',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

