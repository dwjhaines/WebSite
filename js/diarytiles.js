var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-01.html',
            image:'images/russia.JPG',
            title:'Week 1',
            category: ['diary']
         },
         {
            link:'week-02.html',
            image:'images/turtle.JPG',
            title:'Week 2',
            category: ['diary']
         },
         {
            link:'week-03.html',
            image:'images/Week03.JPG',
            title:'Week 3',
            category: ['diary']
         },
         {
            link:'week-04.html',
            image:'images/manta.JPG',
            title:'Week 4',
            category: ['diary']
         }
    ]
    this.weeks=weeks;
});
