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
        },
        {
            image:'images/snuffle.jpg',
            title:'13/1 - Snuffle',
            category: ['cuddle']
        },
        {
            image:'images/sid.jpg',
            title:'14/1 - Sid',
            category: ['cuddle']
        },
        {
            image:'images/roz.jpg',
            title:'15/1 - Roz',
            category: ['cuddle']
        },
        {
            image:'images/rainbow.jpg',
            title:'16/1 - Rainbow',
            category: ['cuddle']
        }
    ]
    this.weeks=weeks;
});

