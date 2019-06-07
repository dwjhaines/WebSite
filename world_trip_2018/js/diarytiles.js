var app = angular.module('diaryApp',[]);
app.controller('tileController', function() {
    var weeks=[
        {
            link:'week-55.html',
            image:'images/tiles/week55-tile.JPG',
            title:'Week 55',
            category: ['diary']
        },
        {
            link:'week-54.html',
            image:'images/tiles/week54-tile.JPG',
            title:'Week 54',
            category: ['diary']
        },
        {
            link:'week-53.html',
            image:'images/tiles/week53-tile.JPG',
            title:'Week 53',
            category: ['diary']
        },
        {
            link:'week-52.html',
            image:'images/tiles/week52-tile.JPG',
            title:'Week 52',
            category: ['diary']
        },
        {
            link:'week-51.html',
            image:'images/tiles/week51-tile.JPG',
            title:'Week 51',
            category: ['diary']
        },
        {
            link:'week-50.html',
            image:'images/tiles/week50-tile.JPG',
            title:'Week 50',
            category: ['diary']
        },
        {
            link:'week-49.html',
            image:'images/tiles/week49-tile.JPG',
            title:'Week 49',
            category: ['diary']
        },
        {
            link:'week-48.html',
            image:'images/tiles/week48-tile.JPG',
            title:'Week 48',
            category: ['diary']
        },
        {
            link:'week-47.html',
            image:'images/tiles/week47-tile.JPG',
            title:'Week 47',
            category: ['diary']
        },
        {
            link:'week-46.html',
            image:'images/tiles/week46-tile.JPG',
            title:'Week 46',
            category: ['diary']
        },
        {
            link:'week-45.html',
            image:'images/tiles/week45-tile.JPG',
            title:'Week 45',
            category: ['diary']
        },
        {
            link:'week-44.html',
            image:'images/tiles/week44-tile.JPG',
            title:'Week 44',
            category: ['diary']
        },
        {
            link:'week-43.html',
            image:'images/tiles/week43-tile.JPG',
            title:'Week 43',
            category: ['diary']
        },
        {
            link:'week-42.html',
            image:'images/tiles/week42-tile.JPG',
            title:'Week 42',
            category: ['diary']
        },
        {
            link:'week-41.html',
            image:'images/tiles/week41-tile.JPG',
            title:'Week 41',
            category: ['diary']
        },
        {
            link:'week-40.html',
            image:'images/tiles/week40-tile.JPG',
            title:'Week 40',
            category: ['diary']
        },
        {
            link:'week-39.html',
            image:'images/tiles/week39-tile.JPG',
            title:'Week 39',
            category: ['diary']
        },
        {
            link:'week-38.html',
            image:'images/tiles/week38-tile.JPG',
            title:'Week 38',
            category: ['diary']
        },
        {
            link:'week-37.html',
            image:'images/tiles/week37-tile.JPG',
            title:'Week 37',
            category: ['diary']
        },
        {
            link:'week-36.html',
            image:'images/tiles/week36-tile.JPG',
            title:'Week 36',
            category: ['diary']
        },
        {
            link:'week-35.html',
            image:'images/tiles/week35-tile.JPG',
            title:'Week 35',
            category: ['diary']
        },
        {
            link:'week-34.html',
            image:'images/tiles/week34-tile.JPG',
            title:'Week 34',
            category: ['diary']
        },
        {
            link:'week-33.html',
            image:'images/tiles/week33-tile.JPG',
            title:'Week 33',
            category: ['diary']
        },
        {
            link:'week-32.html',
            image:'images/tiles/week32-tile.JPG',
            title:'Week 32',
            category: ['diary']
        },
        {
            link:'week-31.html',
            image:'images/tiles/week31-tile.JPG',
            title:'Week 31',
            category: ['diary']
        },
        {
            link:'week-30.html',
            image:'images/tiles/week30-tile.JPG',
            title:'Week 30',
            category: ['diary']
        },
        {
            link:'week-29.html',
            image:'images/tiles/week29-tile.JPG',
            title:'Week 29',
            category: ['diary']
        },
        {
            link:'week-28.html',
            image:'images/tiles/week28-tile.JPG',
            title:'Week 28',
            category: ['diary']
        },
        {
            link:'week-27.html',
            image:'images/tiles/week27-tile.JPG',
            title:'Week 27',
            category: ['diary']
        },
        {
            link:'week-26.html',
            image:'images/tiles/week26-tile.JPG',
            title:'Week 26',
            category: ['diary']
        },
        {
            link:'week-25.html',
            image:'images/tiles/week25-tile.JPG',
            title:'Week 25',
            category: ['diary']
        },
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
        },
        {
            link:'https://photos.app.goo.gl/1knBtLEYJrsx88zx9',
            image:'images/tiles/indonesia-tile.JPG',
            title:'7. Indonesia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/PLBpPmf89r1H8urB8',
            image:'images/tiles/australia-tile.JPG',
            title:'8. Australia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/ZEBXkUWrRspdKV8a7',
            image:'images/tiles/week30-tile.JPG',
            title:'9. Indonesia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/47wG1A3q5dWzwt8t9',
            image:'images/tiles/week32-tile.JPG',
            title:'10. Bangkok',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/2pkoKJMZRj4vZRYv7',
            image:'images/tiles/philippines-tile.JPG',
            title:'11. The Philippines',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/27Erwf5oeEiRL4AX6',
            image:'images/tiles/week37-tile.JPG',
            title:'12. Indonesia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/tuUsDFoftWLZT4nx6',
            image:'images/tiles/week39-tile.JPG',
            title:'13. Penang',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/syMn1f2m5ptzmEhZ6',
            image:'images/tiles/week40-tile.JPG',
            title:'14. Thailand',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/WcJ4uvsdQV5GUVh29',
            image:'images/tiles/myanmar-tile.JPG',
            title:'15. Myanmar',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/fEAzhXMgrCrwfP9C7',
            image:'images/tiles/week42-tile.JPG',
            title:'16. Thailand',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/KgsELuCJyC44GohV7',
            image:'images/tiles/week43-tile.JPG',
            title:'17. Indonesia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/NPsVqW8ej2m3xFEC7',
            image:'images/tiles/week46-tile.JPG',
            title:'18. Malaysia',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/jmfLh6mvqbPJwgTr5',
            image:'images/tiles/thailand-tile.JPG',
            title:'19. Thailand',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/RCh4MNCXFeXrxpPm6',
            image:'images/tiles/week47-tile.JPG',
            title:'20. Hong Kong',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/W1okcugVrL3HjRe88',
            image:'images/tiles/week50-tile.JPG',
            title:'21. Antwerp',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/cnzu8F8yXq7dVLoa8',
            image:'images/tiles/bonaire-tile.JPG',
            title:'22. Bonaire',
            category: ['photos']
        },
        {
            link:'https://photos.app.goo.gl/UnMMNZnNvfVD6TeMA',
            image:'images/tiles/germany-tile.JPG',
            title:'23. Germany',
            category: ['photos']
        }

    ]
    this.weeks=weeks;
});

