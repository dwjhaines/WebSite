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
        },
        {
            image:'images/bertie.jpg',
            title:'8/1 - Bertie',
            category: ['cuddle']
        },
        {
            image:'images/bertie.jpg',
            title:'9/1 - Bertie',
            category: ['cuddle']
        },
        {
            image:'images/legend.jpg',
            title:'10/1 - Legend',
            category: ['cuddle']
        },
        {
            image:'images/smoo.jpg',
            title:'11/1 - Smoo',
            category: ['cuddle']
        },
        {
            image:'images/paddy2.jpg',
            title:'12/1 - Paddy II',
            category: ['cuddle']
        }        

    ]
    this.weeks=weeks;
});

