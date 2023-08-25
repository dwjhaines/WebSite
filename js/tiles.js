var app = angular.module('tripApp',[]);
app.controller('tileController', function() {
    var trips=[ 
        {
            link:'europe_2023/index-2023.html',
            image:'images/europe-2023-tile.jpg',
            title:'Europe 2023',
            category: ['travel']
        },
        {
            link:'hungary-2023.html',
            image:'images/hungary-2023-tile.jpg',
            title:'Hungary 2023',
            category: ['travel']
        },
        {
            link:'italy-2023.html',
            image:'images/italy-2023-tile.jpg',
            title:'Italy 2023',
            category: ['travel', 'football']
        },
        {
            link:'bruges-2022.html',
            image:'images/bruges-2022-tile.jpg',
            title:'Bruges 2022',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/ohJ8S3z4jnBvLF4x5',
            image:'images/palma-2022-tile.jpg',
            title:'Palma 2022',
            category: ['travel']
        },
        {
            link:'munich-2022.html',
            image:'images/munich-2022-tile.jpg',
            title:'Munich 2022',
            category: ['beer']
        },
        {
            link:'greeceanditaly.html',
            image:'images/greece-tile.jpg',
            title:'Greece and Italy 2022',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/aCeBnLCZf1r93RHX7',
            image:'images/nottingham-ale-trail-tile.jpg',
            title:'Nottingham Ale Trail',
            category: ['beer']
        },
        {
            link:'belgium-2022.html',
            image:'images/belgium-2022-tile.jpg',
            title:'Belgium 2022',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/bUEpHYiM2uNs2gZr7',
            image:'images/shed-tile.jpg',
            title:'Shed',
            category: ['misc']
        },
        {
            link:'germany-2022.html',
            image:'images/germany-2022-tile.jpg',
            title:'Germany 2022',
            category: ['beer', 'football', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/CvYL8fU8YbfmSFD49',
            image:'images/brixham-2022-tile.jpg',
            title:'Brixham 2022',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/UNTbmHaYzgpVBXpo7',
            image:'images/play-off-2022-tile.jpg',
            title:'Play-off Final',
            category: ['football']
        },
        {
            link:'bonaire-2022.html',
            image:'images/bonaire-2022-tile.jpg',
            title:'Bonaire 2022',
            category: ['diving', 'travel']
        },
        {
            link:'france-2022.html',
            image:'images/france-2022-tile.jpg',
            title:'France 2022',
            category: ['beer', 'travel']
        },
        {
            link:'munich-2021.html',
            image:'images/munich-2021-tile.jpg',
            title:'Munich 2021',
            category: ['beer', 'travel']
        },
        {
            link:'bonaire-2021.html',
            image:'images/bonaire-2021-tile.jpg',
            title:'Bonaire 2021',
            category: ['diving', 'travel']
        },
        {
            link:'germany-2021.html',
            image:'images/germany-2021-tile.jpg',
            title:'Germany 2021',
            category: ['beer', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/gcwD8LLQRqnFwni69',
            image:'images/london-animals-tile.jpg',
            title:'London Animals',
            category: ['beer']
        },
        {
            link:'bristol-2021.html',
            image:'images/bristol-2021-tile.jpg',
            title:'Bristol 2021',
            category: ['travel', 'beer']
        },
        {
            link:'https://photos.app.goo.gl/7NN1zbjzMZw9oSJd7',
            image:'images/wimbledon-tile.jpg',
            title:'Wimbledon',
            category: ['misc']
        },
        {
            link:'euro2020.html',
            image:'images/euro2020-tile-2.jpg',
            title:'Euro 2020',
            category: ['football']
        },
        {
            link:'https://photos.app.goo.gl/F21Es9pVPi7SksX66',
            image:'images/middlesbrough-tile.jpg',
            title:'Middlesbrough 2021',
            category: ['football']
        },
        {
            link:'https://photos.app.goo.gl/fSyKAewVvC2r8VJb7',
            image:'images/backfence-tile.jpg',
            title:'Back Fence',
            category: ['misc']
        },
        {
            link:'https://photos.app.goo.gl/iajs1pe6TLrjcWBNA',
            image:'images/spare-room-tile.jpg',
            title:'Spare Room',
            category: ['misc']
        },
        {
            link:'https://photos.app.goo.gl/KYZAnk2k9r1gySfaA',
            image:'images/lockdown-2021-tile.jpg',
            title:'Lockdown 2021',
            category: ['misc']
        }, 
        {
            link:'https://photos.app.goo.gl/yFdAqZAc3T6c63de7',
            image:'images/london-2020.jpg',
            title:'London - Dec 2020',
            category: ['beer', 'travel']
        }, 
        {
            link:'https://photos.app.goo.gl/May8cejN5XmL6JNWA',
            image:'images/sid-tile.jpg',
            title:'Sid',
            category: ['misc']
        }, 
        {
            link:'germany-2020.html',
            image:'images/germany-2020-tile.jpg',
            title:'Germany 2020',
            category: ['beer', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/sLwrwGPUEG3BHsJJ7',
            image:'images/winchester-tile.jpg',
            title:'Winchester 2020',
            category: ['beer']
        },
        {
            link:'aachen-2020.html',
            image:'images/aachen-2020-tile.JPG',
            title:'Aachen 2020',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/QGp2bDHvENtrojNu6',
            image:'images/lockdown-tile-2.jpg',
            title:'Lockdown 2020',
            category: ['misc']
        },
        {
            link:'indonesia-2020.html',
            image:'images/indonesia-2020-tile.JPG',
            title:'Indonesia 2020',
            category: ['diving', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/qCduTBH6WjCZ1vsR7',
            image:'images/belgium-2019-tile.JPG',
            title:'Brussels 2019',
            category: ['beer']
        },
        {
            link:'pragueandsofia.html',
            image:'images/praguesofia-tile.JPG',
            title:'Prague and Sofia',
            category: ['football']
        }, 
        {
            link:'https://photos.app.goo.gl/S2hHsNyGwxf3xvgq7',
            image:'images/munich-2019-tile.jpg',
            title:'Munich 2019',
            category: ['beer']
        }, 
        {
            link:'world_trip_2018/index-2018.html',
            image:'world_trip_2018/images/tiles/week23-tile.JPG',
            title:'World Trip 2018/19',
            category: ['travel']
         },
		 {
            link:'https://photos.app.goo.gl/hBkHDWbZUFhCGbH59',
            image:'images/hoggy-tile.jpg',
            title:'Hoggy\'s 50th',
            category: ['beer']
         },
		 {
            link:'https://photos.app.goo.gl/dYngfhi6RLfwe20C3',
            image:'images/london-2018-tile.JPG',
            title:'London 2018',
            category: ['beer']
         },
		 {
            link:'https://photos.app.goo.gl/J3BuVc50tQ6dlGwG3',
            image:'images/thailand-2018-2-tile.JPG',
            title:'Thailand 2018',
            category: ['diving']
         },
         {
            link:'https://photos.app.goo.gl/pv450j2TRH4dsEBr1',
            image:'images/myanmar-2018-tile.JPG',
            title:'Myanmar 2018',
            category: ['diving']
         },
         {
            link:'thailand-2018.html',
            image:'images/thailand-2018-tile.JPG',
            title:'Thailand 2018',
            category: ['travel']
         },
         {
            link:'https://photos.app.goo.gl/6KNs224M4mBKIlCu2',
            image:'images/christmas-2017-tile.JPG',
            title:'Christmas Markets 2017',
            category: ['beer', 'travel']
         },
         {
            link:'https://photos.app.goo.gl/N0ZrKnOkCqGbphTF2',
            image:'images/bonaire-2017-tile.JPG',
            title:'Bonaire 2017',
            category: ['diving', 'travel']
         },
         {
            link:'poland-2017.html',
            image:'images/poland-tile.JPG',
            title:'Poland 2017',
            category: ['football', 'travel']
        }, 
        {
            link:'https://goo.gl/photos/uNPTGj3jDgACruDH6',
            image:'images/munich-2017-tile.JPG',
            title:'Munich 2017',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/b7fVVNYPKDm98iKbA',
            image:'images/belgium-2017-tile.JPG',
            title:'Belgium 2017',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/Fyi2KbnMVFD1LzrS6',
            image:'images/germany-2-tile.JPG',
            title:'Germany 2017',
            category: ['beer', 'travel', 'football']
        },
        {
            link:'https://goo.gl/photos/An7H2jwyCpCyvJZd7',
            image:'images/thailand-2016-tile.JPG',
            title:'Thailand 2016',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/zJckBBD52Ceichca9',
            image:'images/bonaire-2016-tile.JPG',
            title:'Bonaire 2016',
            category: ['diving']
        },
        {
            link:'https://goo.gl/photos/E17KU5vKjNEzfja16',
            image:'images/slovakia-tile.JPG',
            title:'Slovakia v England',
            category: ['football']
        }, 
        {
            link:'https://photos.app.goo.gl/RGaeOtltzzoCdaDl1w',
            image:'images/leuven-tile.JPG',
            title:'Leuven 2016',
            category: ['beer']
        }, 
        {
            link:'france-2016.html',
            image:'images/france-tile.JPG',
            title:'France 2016',
            category: ['football', 'travel']
        }, 
        {
            link:'https://goo.gl/photos/d5VVhEpxTfqHjPKf8',
            image:'images/munich-tile.JPG',
            title:'Munich 2016',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/83NW68uTbJ6tZfiL9',
            image:'images/belgium-tile.JPG',
            title:'Belgium/Germany',
            category: ['beer', 'travel', 'football']
        },
        {
            link:'https://goo.gl/photos/LDK3N4h2JvaCsdZi7',
            image:'images/thailand-tile.JPG',
            title:'Thailand 2015',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/rrY1sqr2YPasXyYm6',
            image:'images/spain-tile.JPG',
            title:'Spain v England',
            category: ['beer', 'football']
        }, 
        {
            link:'https://goo.gl/photos/8barMhKNdbdqRNxe7',
            image:'images/bonaire-2015-tile.JPG',
            title:'Bonaire 2015',
            category: ['diving']
        },
        {
            link:'https://goo.gl/photos/cK4P6ThiPwcktuEW6',
            image:'images/san-marino-tile.JPG',
            title:'San Marino v England',
            category: ['football']
        },   
        {
            link:'https://goo.gl/photos/3umS8YXcG68W2DxR8',
            image:'images/brussels-tile.JPG',
            title:'Brussels 2015',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/LWgreorWVnJHDJJx7',
            image:'images/munich-1860-tile.JPG',
            title:'1860 Munich v Swansea',
            category: ['football', 'beer']
        },                       
        {
            link:'https://goo.gl/photos/8zi3dK7XreUvnR6F9',
            image:'images/dublin-tile.JPG',
            title:'Ireland and Slovenia',
            category: ['football', 'beer', 'travel']
        },  
        {
            link:'https://goo.gl/photos/T4b29obhdk3UuKo49',
            image:'images/munich-2015-tile.JPG',
            title:'Munich 2015',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/ibWwL6oDdiFcJcVt9',
            image:'images/bruges-tile.JPG',
            title:'Bruges/Ghent',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/QJNTijtN1KHXJweM6',
            image:'images/real-ale-trail-tile.JPG',
            title:'Real Ale Trail',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/nBbn6E2faHmCctte6',
            image:'images/amsterdam-2015-tile.JPG',
            title:'Amsterdam 2015',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/JHWAv7B591zSTGr48',
            image:'images/bonaire-2014-tile.JPG',
            title:'Bonaire 2014',
            category: ['diving']
        },
        {
            link:'https://goo.gl/photos/SXnE9xzrZcbZ5YvZ8',
            image:'images/glasgow-tile.JPG',
            title:'Scotland v England',
            category: ['football']
        }, 
        {
            link:'https://goo.gl/photos/93ktqEjPmE63fQpMA',
            image:'images/burford-tile.JPG',
            title:'Burford',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/u1WdEKMbneVuuyRdA',
            image:'images/maldives-tile.JPG',
            title:'Maldives 2014',
            category: ['diving']
        },
        {
            link:'https://goo.gl/photos/EryTs8xySPbzZBWb9',
            image:'images/tallinn-tile.JPG',
            title:'Estonia v England',
            category: ['football']
        },                       
        {
            link:'brazil.html',
            image:'images/brazil2-tile.JPG',
            title:'Brazil 2014',
            category: ['football', 'travel']
        }, 
        {
            link:'https://photos.app.goo.gl/wF2Mvo4VBhj8oc2L2',
            image:'images/swan-tile.JPG',
            title:'Last Night in The Swan',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/NEFgcq8HUi8W5Trj9',
            image:'images/munich-2014-tile.JPG',
            title:'Munich 2014',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/UhkXHBit6Xx1joUj7',
            image:'images/gower-2014-tile.JPG',
            title:'Gower 2014',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/o7nM7CT5CiZyd2KH6',
            image:'images/london-2014-tile.JPG',
            title:'London 2014',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/gXi3fyNKmNKMHEue7',
            image:'images/amsterdam-2014-tile.JPG',
            title:'Amsterdam 2014',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/9YZ5ihSnKoB2L8qv7',
            image:'images/napoli-tile.JPG',
            title:'Napoli v Swansea',
            category: ['football']
        },
        {
            link:'https://goo.gl/photos/owFVQPsQUik97B6X9',
            image:'images/belize-tile.JPG',
            title:'Belize 2013',
            category: ['diving']
        },
        {
            link:'https://goo.gl/photos/mZJTBa7oMZfEBRL76',
            image:'images/st-gallen-tile.JPG',
            title:'St Gallen v Swansea',
            category: ['beer', 'football']
        },  
        {
            link:'https://photos.app.goo.gl/7ZbiI1Kr44xgeFHh2',
            image:'images/bristol-2013-tile.JPG',
            title:'Bristol 2013',
            category: ['beer']
        },	
        {
            link:'https://goo.gl/photos/oanjEfDW47t8vg36A',
            image:'images/kuban-tile.JPG',
            title:'F. C. Kuban v Swansea',
            category: ['football', 'travel']
        },                       
        {
            link:'https://goo.gl/photos/qLTw7mfiffp8YzGVA',
            image:'images/valencia-tile.JPG',
            title:'Valencia v Swansea',
            category: ['beer', 'football']
        },                       
        {
            link:'https://goo.gl/photos/L9x3bvhgNAvvXAiC9',
            image:'images/malmo-tile.JPG',
            title:'Malmo v Swansea',
            category: ['beer', 'football']
        },      
        {
            link:'https://goo.gl/photos/Q3aieVMQYsTDVGWv6',
            image:'images/league-cup-tile.JPG',
            title:'League Cup Final 2013',
            category: ['beer', 'football']
        },
        {
            link:'https://photos.app.goo.gl/wPygU1RyNEw8l99u2',
            image:'images/ambon-tile.JPG',
            title:'Ambon 2013',
            category: ['diving', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/GoZenheCuJJIMKbl2',
            image:'images/bonaire-2013-tile.JPG',
            title:'Bonaire 2013',
            category: ['diving', 'travel']
        },
        {
            link:'world_trip_2012/index-2012.html',
            image:'images/moalboal-tile.JPG',
            title:'2012 World Trip',
            category: ['travel']
        },
        {
            link:'https://goo.gl/photos/JA8vz1H4wBrtGWo69',
            image:'images/ukraine-tile.JPG',
            title:'Ukraine 2012',
            category: ['travel', 'football']
        },
        {
            link:'https://photos.app.goo.gl/oKJ8D5HbYNjcWMa37',
            image:'images/bulgaria-2011-tile.JPG',
            title:'Bulgaria v England',
            category: ['football']
        }, 
        {
            link:'https://goo.gl/photos/RucVzMktRi7uVmYW9',
            image:'images/munich-2012-tile.JPG',
            title:'Munich 2012',
            category: ['beer']
        },	
        {
            link:'https://goo.gl/photos/br9u2iTg3Z7XnZjKA',
            image:'images/thailand-2011-tile.JPG',
            title:'Thailand 2011',
            category: ['diving', 'travel']
        },	
        {
            link:'https://photos.app.goo.gl/SZG79tDeCtutw4ce7',
            image:'images/montenegro-2011-tile.jpg',
            title:'Montenegro 2011',
            category: ['football']
        },
        {
            link:'https://goo.gl/photos/pfXaU65Hbi42RJmv6',
            image:'images/brussels-2011-tile.JPG',
            title:'Brussels 2011',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/dvrDo9hoNNrF1MXv8',
            image:'images/egypt-tile.JPG',
            title:'Egypt 2011',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/d54N1h4YD3fV6kfP6',
            image:'images/malaysia-tile.JPG',
            title:'Malaysia 2011',
            category: ['diving', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/GhCddwJHhQbKViZw8',
            image:'images/playoff-final-tile.jpg',
            title:'2011 Play-off Final',
            category: ['football']
        },             
        {
            link:'https://goo.gl/photos/hFjBKq4tLq6s8iuz7',
            image:'images/munich-2011-tile.JPG',
            title:'Munich 2011',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/MSEoH94JjuuKhdy26',
            image:'images/bonaire-2011-tile.JPG',
            title:'Bonaire 2011',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/RJaaDSx4hWfwaagN9',
            image:'images/thailand-2010-tile.JPG',
            title:'Thailand 2010',
            category: ['diving', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/z516Q1skoIlpYqla2',
            image:'images/christmas-2010-tile.JPG',
            title:'Christmas Markets 2010',
            category: ['travel', 'beer']
        },
        {
            link:'https://goo.gl/photos/4henEyoTxXrtrhHv5',
            image:'images/egypt-2010-tile.JPG',
            title:'Egypt 2010',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/UwWxJTH6b9u4iai6A',
            image:'images/ghent-2010-tile.JPG',
            title:'Ghent 2010',
            category: ['beer']
        },
        {
            link:'south-africa.html',
            image:'images/sa2-tile.JPG',
            title:'South Africa 2010',
            category: ['football', 'diving', 'travel']
        },  
        {
            link:'https://goo.gl/photos/uhGQ4uUqhpdavyC96',
            image:'images/munich-2010-tile.JPG',
            title:'Munich 2010',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/gsxaE8LNJfr34ot6A',
            image:'images/doha-tile.jpg',
            title:'Doha 2009',
            category: ['football']
        },
        {
            link:'https://photos.app.goo.gl/uPcz3AoYWkIWxTel2',
            image:'images/barcelona-2009-tile.JPG',
            title:'Barcelona 2009',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/2fWivhKLYUFgNbmr1',
            image:'images/gozo-tile.JPG',
            title:'Gozo 2009',
            category: ['travel', 'diving']
        },
        {
            link:'https://goo.gl/photos/3PeHEodrY76AzFzH9',
            image:'images/belgium-2009-tile.JPG',
            title:'Belgium 2009',
            category: ['beer']
        },   
        {
            link:'https://goo.gl/photos/qZFEzyuGwnAQL82CA',
            image:'images/munich-2009-tile.JPG',
            title:'Munich 2009',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/PYCrZistPCzoJMTs2',
            image:'images/mexico-2008-tile.JPG',
            title:'Mexico 2008',
            category: ['diving', 'travel']
        }, 
        {
            link:'https://photos.app.goo.gl/CVRLWc3FsSCgE7jt5',
            image:'images/belgium-2008-tile.jpg',
            title:'Brussels/Ghent 2008',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/prvvHPd1Rzh7Zwi78',
            image:'images/germany-2008-tile.jpg',
            title:'Germany 2008',
            category: ['football', 'travel', 'beer']
        }, 
        {
            link:'https://goo.gl/photos/d42Rqrwu5yvF2kmd6',
            image:'images/belarus-tile.JPG',
            title:'Belarus v England',
            category: ['football', 'travel']
        }, 
        {
            link:'https://photos.app.goo.gl/nAr9nrRe5EcvV6898',
            image:'images/croatia-2008-tile.jpg',
            title:'Croatia v England',
            category: ['football']
        }, 
        {
            link:'https://photos.app.goo.gl/dyWbAHTrEZu9NoD46',
            image:'images/barcelona-2008-tile.jpg',
            title:'Barcelona 2008',
            category: ['football']
        }, 
        {
            link:'https://photos.app.goo.gl/wXy05JpojbcTLxmr2',
            image:'images/ghent-2008-tile.JPG',
            title:'Ghent 2008',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/VnwY2IfGoscmPWCr2',
            image:'images/indonesia-2008-tile.JPG',
            title:'Indonesia 2008',
            category: ['diving', 'travel']
        },
        {
            link:'https://goo.gl/photos/KRxmBPTbDaHbLbcd7',
            image:'images/munich-2008-tile.JPG',
            title:'Munich 2008',
            category: ['beer']
        },   
        {
            link:'https://photos.app.goo.gl/qKX1E0ALTjnx3m9L2',
            image:'images/brussels-2007-tile.JPG',
            title:'Brussels 2007',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/wKJd7BpZzBfu2Gd39',
            image:'images/moscow-tile.JPG',
            title:'Russia v England',
            category: ['football', 'travel']
        }, 
        {
            link:'world_trip_2006/World_Trip_Index.htm',
            image:'images/myanmar-tile.JPG',
            title:'2006 World Trip',
            category: ['travel']
        }, 
        {
            link:'https://goo.gl/photos/YVwMZc1BPu2iZhbC6',
            image:'images/germany-2006-tile.JPG',
            title:'Germany 2006',
            category: ['travel', 'football']
        },
        {
            link:'https://photos.app.goo.gl/2CqMjIHRaMFy8Kqr2',
            image:'images/belgium-dec-2005-tile.JPG',
            title:'Belgium Dec 2005',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/88FZ4ftGT56iy2st7',
            image:'images/egypt-2005-tile.JPG',
            title:'Egypt 2005',
            category: ['diving']
        },
        {
            link:'https://photos.app.goo.gl/xWdDGQNYdCamav5s6',
            image:'images/copenhagen-2005-tile.JPG',
            title:'Copenhagen 2005',
            category: ['football']
        },  
        {
            link:'https://photos.app.goo.gl/qQImXyCFhkCLcxiu2',
            image:'images/belgium-2005-tile.JPG',
            title:'Belgium July 2005',
            category: ['beer']
        },  					 
        {
            link:'https://goo.gl/photos/5dn628vTDyRb8dPA7',
            image:'images/munich-2005-tile.JPG',
            title:'Munich 2005',
            category: ['beer']
        },  					 
        {
            link:'https://photos.app.goo.gl/zq8cH5xnnY5pKBhK6',
            image:'images/usa-2005-tile.jpg',
            title:'USA 2005',
            category: ['football']
        },  					 
        {
            link:'https://photos.app.goo.gl/O1xSeaa5YQNU0HDo2',
            image:'images/hanover-2005-tile.JPG',
            title:'Hanover 2005',
            category: ['beer']
        },  					 
        {
            link:'https://photos.app.goo.gl/L3wSWGCTbzsN3XSD7',
            image:'images/maldives-2004-tile.jpg',
            title:'Maldives 2004',
            category: ['travel', 'diving']
        },  					 
        {
            link:'https://photos.app.goo.gl/SmQ1Q5Kn6EizxvXl1',
            image:'images/belgium-2004-tile.JPG',
            title:'Belgium 2004',
            category: ['beer']
        },    
        {
            link:'https://goo.gl/photos/AnVc4KBPVc29TDwK8',
            image:'images/vetch-tile.JPG',
            title:'The Vetch 2004/05',
            category: ['football']
        },
        {
            link:'https://photos.app.goo.gl/uBYz4ApsPDYkGYrc6',
            image:'images/austria-2004-tile.JPG',
            title:'Austria/Poland 2004',
            category: ['football', 'travel']
        },
        {
            link:'https://goo.gl/photos/XefCRHovogrPgnV18',
            image:'images/portugal-tile.JPG',
            title:'Portugal 2004',
            category: ['football', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/ttRZs4o8xHBgNQfL8',
            image:'images/amsterdam-2004-tile.JPG',
            title:'Amsterdam 2004',
            category: ['beer', 'football']
        },
        {
            link:'https://goo.gl/photos/ifRofQvGsShUS2hz9',
            image:'images/gower-2004-tile.JPG',
            title:'Gower 2004',
            category: ['beer']
        },  
        {
            link:'https://goo.gl/photos/dp85hsJcBL3FszQz7',
            image:'images/munich-2004-tile.JPG',
            title:'Munich 2004',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/h79Jy5FNjsgaMiJX7',
            image:'images/denmark-2004-tile.jpg',
            title:'Sweden & Denmark 2004',
            category: ['football']
        }, 
        {
            link:'https://photos.app.goo.gl/QHF3CjHaTQJDx8Fn6',
            image:'images/ludlow-2003-tile.jpg',
            title:'Ludlow 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/1KuPQnra57JE7XQ69',
            image:'images/brussels-2003-tile.JPG',
            title:'Brussels 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/MfjK0wpwCGBRGUQI3',
            image:'images/bacharach-tile.JPG',
            title:'Bacharach 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/AVSLom695ngvkJXE9',
            image:'images/italy-2003-tile.jpg',
            title:'Italy 2003',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/QsowAxjxAxjtvyRQ7',
            image:'images/malaga-2003-tile.JPG',
            title:'Malaga 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/y0TMQonzS7LPiFPt2',
            image:'images/ghent-2003-tile.JPG',
            title:'Ghent 2003',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/MZcBLMUaQ6uJY9WQ8',
            image:'images/germany-2003-tile.JPG',
            title:'Germany 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/ozQm6a1ix4VbjAvx9',
            image:'images/thailand-2003-tile.jpg',
            title:'Thailand 2003',
            category: ['travel', 'diving']
        }, 
        {
            link:'https://photos.app.goo.gl/46AVrHoLa7VmSuq46',
            image:'images/dublin-2003-tile.JPG',
            title:'Dublin 2003',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/Nxa8w888m8tVZRSn8',
            image:'images/new-york-2002-tile.jpg',
            title:'New York 2002',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/AQS70lzoq2ZFZ17C2',
            image:'images/ghent-2002-tile.JPG',
            title:'Ghent 2002',
            category: ['beer']
        }, 
        {
            link:'https://goo.gl/photos/Yp9tqcvE3SPMDLb59',
            image:'images/munich-2002-tile.JPG',
            title:'Munich 2002',
            category: ['beer']
        },
        {
            link:'https://goo.gl/photos/D93RPr3LPpCHG2sD7',
            image:'images/gower-2002-tile.JPG',
            title:'Gower 2002',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/0jUYrWLNW7v1gtKF3',
            image:'images/easter-2002-tile.JPG',
            title:'Germany/Austria 2002',
            category: ['beer', 'travel']
        },
        {
            link:'https://photos.app.goo.gl/JJZdOVAtGg8CSdbM2',
            image:'images/rothenberg-tile.JPG',
            title:'Rothenberg 2002',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/Q8hBHrKXtdwZRCMm9',
            image:'images/thailand-2002-tile.jpg',
            title:'Thailand 2002',
            category: ['travel', 'diving']
        },
        {
            link:'https://photos.app.goo.gl/AZ55VATVUXNasSR9A',
            image:'images/berlin-2001-tile.jpg',
            title:'Berlin 2001',
            category: ['beer']
        },	
        {
            link:'log-book-1.html',
            image:'images/log-book-tile.JPG',
            title:'1 - 1000',
            category: ['diving']
        },	
        {
            link:'log-book-2.html',
            image:'images/log-book-tile.JPG',
            title:'1001 - 2000',
            category: ['diving']
        },	
        {
            link:'log-book-3.html',
            image:'images/log-book-tile.JPG',
            title:'2001 - 3000',
            category: ['diving']
        }, 
        {
            link:'https://photos.app.goo.gl/MGiz8YVcXXEDAhvY6',
            image:'images/syria-2001-tile.jpg',
            title:'Syria 2001',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/XjHAjG3uw932uyY7A',
            image:'images/croatia-2001-tile.jpg',
            title:'Croatia 2001',
            category: ['travel']
        }, 
        {
            link:'world_trip_2000/index-2000.html',
            image:'images/wt2000-tile.jpg',
            title:'World Trip 2000/01',
            category: ['travel']
         }, 
        {
            link:'https://photos.app.goo.gl/W9wdJ8hQMqGh3c5E8',
            image:'images/wt2001-sessions-tile.jpg',
            title:'2000/01 - Sessions',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/6cxGDs8imFdgtC9C8',
            image:'images/1999-tile.jpg',
            title:'1999',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/D1VnoyKZDpLDW1oXA',
            image:'images/belgium-1999-tile.jpg',
            title:'Belgium 1999',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/7xquor7XAiC75vRs9',
            image:'images/spain-1999-tile.jpg',
            title:'Spain/Portugal 1999',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/ueG7hnUDbpYdRgef7',
            image:'images/nuremberg-1998-tile.jpg',
            title:'Nuremberg 1999',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/oopTX3H6nXKTPsYz7',
            image:'images/budapest-1999-tile.jpg',
            title:'Budapest 1999',
            category: ['travel', 'beer']
        }, 
        {
            link:'https://photos.app.goo.gl/GZkZjrD44zDq71rY8',
            image:'images/thailand-1999-tile.jpg',
            title:'Thailand 1999',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/G6yPi6BGjcLttXdv7',
            image:'images/1998-tile.jpg',
            title:'1998',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/ydD8QWrKXt3efqFi8',
            image:'images/belgium-1998-tile.jpg',
            title:'Belgium 1998',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/gNTEwvGSeMX6QFXJ9',
            image:'images/spain-1998-tile.jpg',
            title:'Spain 1998',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/Qw4gYiBh51vYGUiL8',
            image:'images/euro-disney-tile.jpg',
            title:'Euro Disney 1998',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/U58rKpRGz2R1Ejq38',
            image:'images/prague-1998-tile.jpg',
            title:'Prague 1998',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/WJfvTr428dS8a5br6',
            image:'images/thailand-1998-tile.jpg',
            title:'Thailand 1998',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/UUVz6rwJ13cnGDvb6',
            image:'images/1997-tile.jpg',
            title:'1997',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/MhrDZkv1zDWpCTMw8',
            image:'images/usa-1997-tile.jpg',
            title:'USA 1997',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/XZ7WbxQdhojjxMfbA',
            image:'images/wedding-tile.jpg',
            title:'Our Wedding',
            category: ['misc']
        }, 
        {
            link:'https://photos.app.goo.gl/fMcepxx446c4jsdD9',
            image:'images/germany-1997-tile.jpg',
            title:'Germany 1997',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/rf6augzz7adoFHGH8',
            image:'images/1996-tile.jpg',
            title:'1996',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/cL2t2aS6nm9FsstbA',
            image:'images/thailand-1996-tile.jpg',
            title:'Thailand 1996',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/wS7Jazf64mxpqYSC8',
            image:'images/1995-tile.jpg',
            title:'1995',
            category: ['old']
        }, 
        {
            link:'world_trip_1994/index-1994.html',
            image:'world_trip_1994/images/tiles/week04-tile.JPG',
            title:'World Trip 1994/5',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/uHBborN6VAwMfmf2A',
            image:'images/1994-tile.jpg',
            title:'1994',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/qCJVTyTmCC9jitKa7',
            image:'images/morocco-tile.jpg',
            title:'Morocco 1993',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/ESDGtxCLw4ngebUA6',
            image:'images/cyprus-1993-tile.jpg',
            title:'Cyprus 1993',
            category: ['travel', 'beer']
        }, 
        {
            link:'https://photos.app.goo.gl/syhoPpvcngKpA7iNA',
            image:'images/1993-tile.jpg',
            title:'1993',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/cXtdVHZRvgKBXgT5A',
            image:'images/turkey-1992-tile.jpg',
            title:'Turkey 1992',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/hyWc12NwhHViZ22U7',
            image:'images/tunisia-1992-tile.jpg',
            title:'Tunisia 1992',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/oJzRXG52pGAfWUGKA',
            image:'images/1992-tile.jpg',
            title:'1992',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/bJKgtJpppj6WykPK9',
            image:'images/tenerife-1991-tile.jpg',
            title:'Tenerife 1991',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/GHxAQTp6BZUo5j1X8',
            image:'images/munich-1991-tile.jpg',
            title:'Munich 1991',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/HsgdDznoy2wmaZNB8',
            image:'images/ir1991-tile.jpg',
            title:'Inter Rail 1991',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/ypxPKrbkcsxfEben7',
            image:'images/1991-tile.jpg',
            title:'1991',
            category: ['old']
        }, 
        {
            link:'https://photos.app.goo.gl/y1HjqBwUiyRAHWEq8',
            image:'images/1990-tile.jpg',
            title:'1990',
            category: ['old']
        }, 
        {
            link:'world_trip_1989/index-1989.html',
            image:'world_trip_1989/images/tiles/WT1989-tile.jpg',
            title:'World Trip 1989/90',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/a23Wf1pAtCHgXCYr9',
            image:'images/sydney-tile.jpg',
            title:'Sydney 1989',
            category: ['beer']
        }, 
        {
            link:'https://photos.app.goo.gl/CGsTgJuDy2rL2zwX6',
            image:'images/ir1988-tile.jpg',
            title:'Inter Rail 1988',
            category: ['travel']
        }, 
        {
            link:'inter_rail_1987/index-1987.html',
            image:'images/ir1987-tile.jpg',
            title:'Inter Rail 1987',
            category: ['travel']
        }, 
        {
            link:'europe_1986/index-1986.html',
            image:'images/europe86-tile.jpg',
            title:'Europe 1986',
            category: ['travel']
        }, 
        {
            link:'https://photos.app.goo.gl/BhUyWDNQx1yHTKHo6',
            image:'images/1985-1986-tile.jpg',
            title:'1985/86 - Gowerton',
            category: ['old']
        }, 
        {
            link:'inter_rail_1985/index-1985.html',
            image:'images/ir1985-tile.jpg',
            title:'Inter Rail 1985',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/7zBaHQfvBCNJYjUY8 ',
            image:'images/ireland-1984-tile.jpg',
            title:'Ireland 1984',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/47bQyQZJGj92R1aP9',
            image:'images/clyne-3rd-year-tile.jpg',
            title:'Clyne - 3rd Year',
            category: ['old']
        }, 
        {
            link:'inter_rail_1984/index-1984.html',
            image:'images/ir1984-tile.jpg',
            title:'Inter Rail 1984',
            category: ['travel']
        },
        {
            link:'https://photos.app.goo.gl/jaH1t8bVAQ81nScT6',
            image:'images/clyne-2nd-year-tile.jpg',
            title:'Clyne - 2nd Year',
            category: ['old']
        },
        // Tiles for home page. Do not delete
        {
            link:'diving.html',
            image:'images/diving-tile.JPG',
            title:'Diving',
            category: ['homepage']
        },
        {
            link:'travel.html',
            image:'images/travel-tile.JPG',
            title:'Travel',
            category: ['homepage']
        },
        {
            link:'football.html',
            image:'images/football-tile.JPG',
            title:'Football',
            category: ['homepage']
        },
        {
            link:'beer.html',
            image:'images/beer-tile.JPG',
            title:'Beer',
            category: ['homepage']
        },
        {
            link:'cycling.html',
            image:'images/cycling-tile.JPG',
            title:'Cycling',
            category: ['homepage']
        },
        {
            link:'misc.html',
            image:'images/lockdown-tile.jpg',
            title:'Miscellaneous',
            category: ['homepage']
        },
        {
            link:'archive.html',
            image:'images/archive-tile.jpg',
            title:'Archive',
            category: ['homepage']
        }
    ]
    this.trips=trips;
});
