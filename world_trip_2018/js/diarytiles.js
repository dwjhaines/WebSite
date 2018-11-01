var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-24.html',
            image:'images/tiles/week24-tile.JPG',
            title:'Week 24',
            category: ['diary']
        },
        {
            link:'week-23.html',
            image:'images/tiles/week23-tile.JPG',
            title:'Week 23',
            category: ['diary']
        },
        {
            link:'week-22.html',
            image:'images/tiles/week22-tile.JPG',
            title:'Week 22',
            category: ['diary']
        },
        {
            link:'week-21.html',
            image:'images/tiles/week21-tile.JPG',
            title:'Week 21',
            category: ['diary']
        },
        {
            link:'week-20.html',
            image:'images/tiles/week20-tile.JPG',
            title:'Week 20',
            category: ['diary']
        },
        {
            link:'week-19.html',
            image:'images/tiles/week19-tile.JPG',
            title:'Week 19',
            category: ['diary']
        },
        {
            link:'week-18.html',
            image:'images/tiles/week18-tile.JPG',
            title:'Week 18',
            category: ['diary']
        },
        {
            link:'week-17.html',
            image:'images/tiles/week17-tile.JPG',
            title:'Week 17',
            category: ['diary']
        },
        {
            link:'week-16.html',
            image:'images/tiles/week16-tile.JPG',
            title:'Week 16',
            category: ['diary']
        },
        {
            link:'week-15.html',
            image:'images/tiles/week15-tile.JPG',
            title:'Week 15',
            category: ['diary']
        },
        {
            link:'week-14.html',
            image:'images/tiles/week14-tile.JPG',
            title:'Week 14',
            category: ['diary']
        },
        {
            link:'week-13.html',
            image:'images/tiles/week13-tile.JPG',
            title:'Week 13',
            category: ['diary']
        },
        {
            link:'week-12.html',
            image:'images/tiles/week12-tile.JPG',
            title:'Week 12',
            category: ['diary']
        },
        {
            link:'week-11.html',
            image:'images/tiles/week11-tile.JPG',
            title:'Week 11',
            category: ['diary']
        },
        {
            link:'week-10.html',
            image:'images/tiles/week10-tile.JPG',
            title:'Week 10',
            category: ['diary']
        },
        {
            link:'week-09.html',
            image:'images/tiles/week09-tile.JPG',
            title:'Week 9',
            category: ['diary']
        },
        {
            link:'week-08.html',
            image:'images/tiles/week08-tile.JPG',
            title:'Week 8',
            category: ['diary']
        },
        {
            link:'week-07.html',
            image:'images/tiles/week07-tile.JPG',
            title:'Week 7',
            category: ['diary']
        },
        {
            link:'week-06.html',
            image:'images/tiles/week06-tile.JPG',
            title:'Week 6',
            category: ['diary']
        },
        {
            link:'week-05.html',
            image:'images/tiles/week05-tile.JPG',
            title:'Week 5',
            category: ['diary']
        },
        {
            link:'week-04.html',
            image:'images/tiles/week04-tile.JPG',
            title:'Week 4',
            category: ['diary']
        },
        {
            link:'week-03.html',
            image:'images/tiles/week03-tile.JPG',
            title:'Week 3',
            category: ['diary']
        },
        {
            link:'week-02.html',
            image:'images/tiles/week02-tile.JPG',
            title:'Week 2',
            category: ['diary']
        },
        {
            link:'week-01.html',
            image:'images/tiles/week01-tile.JPG',
            title:'Week 1',
            category: ['diary']
        },
        {
            link:'https://photos.app.goo.gl/Vn1VyjrhFdkJ97sE9',
            image:'images/tiles/week02-tile.JPG',
            title:'1. Kingsclere to Skopje',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/1DeC3JDDMza7ct9t7',
            image:'images/tiles/week05-tile.JPG',
            title:'2. Russia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/EV4ZaTCCV6vGAXRa6',
            image:'images/tiles/week06-tile.JPG',
            title:'3. Russia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/m2odvgpAoPt6PbsG8',
            image:'images/tiles/DSC_0400.JPG',
            title:'4. Macedonia and Greece',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/dsgNnvsaAjAwCQLs8',
            image:'images/tiles/week17-tile.JPG',
            title:'5. The Journey Home',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/JFuVdg1VWB3772m19',
            image:'images/tiles/malaysia-tile.JPG',
            title:'6. Malaysia',
            category: ['photos']
        }
    ]
    this.weeks=weeks;
});

