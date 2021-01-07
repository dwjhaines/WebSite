var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            image:'images/seb.jpg',
            title:'5/1 - Seb',
            category: ['cuddle']
        },
        {
            image:'images/binky.jpg',
            title:'6/1 - Binky',
            category: ['cuddle']
        },
        {
            image:'images/piggywiggy.jpg',
            title:'7/1 - Piggy Wiggy',
            category: ['cuddle']
        }        

    ]
    this.weeks=weeks;
});

