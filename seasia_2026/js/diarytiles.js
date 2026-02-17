var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'https://photos.app.goo.gl/kkEQDtzf5zGxiJej9',
            image:'images/part1-tile.jpg',
            title:'1. Malaysia and Thailand',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/U5vQXLRgbhMCJkdcA',
            image:'images/part2-tile.jpg',
            title:'2. The Similans',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/81ZvziaZCeAjpNSLA',
            image:'images/part3-tile.jpg',
            title:'3. Thailand and Laos',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/A7ju7p5tA6wYJcmx8',
            image:'images/part4-tile.jpg',
            title:'4. Northern Thailand',
            category: ['photos']
        },
				{
            link:'',
            image:'images/part5-tile.jpg',
            title:'5. Phuket',
            category: ['photos']
        },
				{
            link:'part1.html',
            image:'images/part1-tile.jpg',
            title:'1. Malaysia and Thailand',
            category: ['diary']
        },
        {
            link:'part2.html',
            image:'images/part2-tile.jpg',
            title:'2. The Similans',
            category: ['diary']
        },
        {
            link:'part3.html',
            image:'images/part3-tile.jpg',
            title:'3. Thailand and Laos',
            category: ['diary']
        },
        {
            link:'part4.html',
            image:'images/part4-tile.jpg',
            title:'4. Northern Thailand',
            category: ['diary']
        },
        {
            link:'part5.html',
            image:'images/part5-tile.jpg',
            title:'5. Phuket',
            category: ['diary']
        }
    ]
    this.weeks=weeks;
});

