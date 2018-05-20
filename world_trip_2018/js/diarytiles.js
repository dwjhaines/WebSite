var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-01.html',
            image:'images/russia.JPG',
            title:'Week 1',
            category: ['diary']
         }

    ]
    this.weeks=weeks;
});