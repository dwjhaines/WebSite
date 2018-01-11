var app = angular.module('tripApp',[]);
app.controller('tileController', function() {
    var trips=[
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
            link:'https://goo.gl/photos/JA8vz1H4wBrtGWo69',
            image:'images/ukraine-tile.JPG',
            title:'Ukraine 2012',
            category: ['travel', 'football']
        }, 
        {
            link:'https://goo.gl/photos/RucVzMktRi7uVmYW9',
            image:'images/munich-2012-tile.JPG',
            title:'Munich 2012',
            category: ['beer']
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
            link:'https://goo.gl/photos/br9u2iTg3Z7XnZjKA',
            image:'images/thailand-2011-tile.JPG',
            title:'Thailand 2011',
            category: ['diving', 'travel']
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
            link:'https://goo.gl/photos/d42Rqrwu5yvF2kmd6',
            image:'images/belarus-tile.JPG',
            title:'Belarus v England',
            category: ['football', 'travel']
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
            link:'world_trip_2006/index.html',
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
            link:'https://photos.app.goo.gl/O1xSeaa5YQNU0HDo2',
            image:'images/hanover-2005-tile.JPG',
            title:'Hanover 2005',
            category: ['beer']
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
            link:'https://goo.gl/photos/XefCRHovogrPgnV18',
            image:'images/portugal-tile.JPG',
            title:'Portugal 2004',
            category: ['football', 'travel']
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
            link:'https://photos.app.goo.gl/MfjK0wpwCGBRGUQI3',
            image:'images/bacharach-tile.JPG',
            title:'Bacharach 2003',
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
            title:'Easter 2002',
            category: ['beer']
        },
        {
            link:'https://photos.app.goo.gl/JJZdOVAtGg8CSdbM2',
            image:'images/rothenberg-tile.JPG',
            title:'Rothenberg 2002',
            category: ['beer']
        },	
        {
            link:'log-book.html',
            image:'images/log-book-tile.JPG',
            title:'Log Book',
            category: ['diving']
        }
    ]
    this.trips=trips;
});
