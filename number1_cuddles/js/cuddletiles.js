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
        },
        {
            image:'images/odell.jpg',
            title:'17/1 - Odell',
            category: ['cuddle']
        },
        {
            image:'images/nelly.jpg',
            title:'18/1 - Nelly',
            category: ['cuddle']
        },
        {
            image:'images/twiggy.jpg',
            title:'19/1 - Twiggy',
            category: ['cuddle']
        },
        {
            image:'images/nutmeg.jpg',
            title:'20/1 - Nutmeg',
            category: ['cuddle']
        },
        {
            image:'images/coco.jpg',
            title:'21/1 - Coco',
            category: ['cuddle']
        },
        {
            image:'images/roz.jpg',
            title:'22/1 - Roz',
            category: ['cuddle']
        },
        {
            image:'images/paddy.jpg',
            title:'23/1 - Paddy',
            category: ['cuddle']
        },
        {
            image:'images/tropic.jpg',
            title:'24/1 - Tropic',
            category: ['cuddle']
        },
        {
            image:'images/jock.jpg',
            title:'25/1 - Jock',
            category: ['cuddle']
        },
        {
            image:'images/patty.jpg',
            title:'26/1 - Patty',
            category: ['cuddle']
        },
        {
            image:'images/daves_teddy.jpg',
            title:"27/1 - Dave's Teddy",
            category: ['cuddle']
        },
        {
            image:'images/daves_teddy.jpg',
            title:"28/1 - Dave's Teddy",
            category: ['cuddle']
        },
        {
            image:'images/thomas.jpg',
            title:"29/1 - Thomas",
            category: ['cuddle']
        },
        {
            image:'images/lee.jpg',
            title:"30/1 - Lee",
            category: ['cuddle']
        },
        {
            image:'images/hoggy.jpg',
            title:"31/1 - Hoggy",
            category: ['cuddle']
        },
        {
            image:'images/pout.jpg',
            title:"1/2 - Pout",
            category: ['cuddle']
        },
        {
            image:'images/bertie.jpg',
            title:"2/2 - Bertie",
            category: ['cuddle']
        },
        {
            image:'images/newbear.jpg',
            title:"3/2 - New Bear",
            category: ['cuddle']
        },
        {
            image:'images/paddy.jpg',
            title:"4/2 - Paddy",
            category: ['cuddle']
        },
        {
            image:'images/odell.jpg',
            title:"5/2 - Odell",
            category: ['cuddle']
        },
        {
            image:'images/seb.jpg',
            title:"6/2 - Seb",
            category: ['cuddle']
        },
        {
            image:'images/roz.jpg',
            title:"7/2 - Roz",
            category: ['cuddle']
        },
        {
            image:'images/oceanshelly.jpg',
            title:'8/2 - Ocean & Shelly',
            category: ['cuddle']
        },
        {
            image:'images/oceanshelly.jpg',
            title:'9/2 - Ocean & Shelly',
            category: ['cuddle']
        },
        {
            image:'images/addo.jpg',
            title:'10/2 - Addo',
            category: ['cuddle']
        },
        {
            image:'images/tamzin.jpg',
            title:'11/2 - Tamzin',
            category: ['cuddle']
        },
        {
            image:'images/thomas.jpg',
            title:'12/2 - Thomas',
            category: ['cuddle']
        },
        {
            image:'images/thomas.jpg',
            title:'13/2 - Thomas',
            category: ['cuddle']
        },
        {
            image:'images/rosy.jpg',
            title:'14/2 - Rosy',
            category: ['cuddle']
        },
        {
            image:'images/bertie.jpg',
            title:"15/2 - Bertie",
            category: ['cuddle']
        },
        {
            image:'images/michelle.jpg',
            title:'16/2 - Michelle',
            category: ['cuddle']
        },
        {
            image:'images/flappy.jpg',
            title:'17/2 - Flappy',
            category: ['cuddle']
        },
        {
            image:'images/flippy.jpg',
            title:'18/2 - Flippy',
            category: ['cuddle']
        },
        {
            image:'images/floppy.jpg',
            title:'19/2 - Floppy',
            category: ['cuddle']
        },
        {
            image:'images/sid.jpg',
            title:'20/2 - Sid',
            category: ['cuddle']
        },
        {
            image:'images/rozs_teddy.jpg',
            title:"21/2 - Roz's Teddy",
            category: ['cuddle']
        },
        {
            image:'images/eddy.jpg',
            title:"22/2 - Eddy",
            category: ['cuddle']
        },
        {
            image:'images/andy.jpg',
            title:"23/2 - Andy",
            category: ['cuddle']
        },
        {
            image:'images/fff.jpg',
            title:"24/2 - Fat Furry Franky",
            category: ['cuddle']
        },
        {
            image:'images/casey.jpg',
            title:"25/2 - Casey",
            category: ['cuddle']
        },
        {
            image:'images/hoggy.jpg',
            title:"26/2 - Hoggy",
            category: ['cuddle']
        },
        {
            image:'images/beaky.jpg',
            title:"27/2 - Beaky",
            category: ['cuddle']
        },
        {
            image:'images/ruffles.jpg',
            title:"28/2 - Ruffles",
            category: ['cuddle']
        },
        {
            image:'images/mikey.jpg',
            title:"1/3 - Mikey",
            category: ['cuddle']
        },
        {
            image:'images/spikey.jpg',
            title:"2/3 - Spikey",
            category: ['cuddle']
        },
        {
            image:'images/melly.jpg',
            title:"3/3 - Melly",
            category: ['cuddle']
        },
        {
            image:'images/sydney.jpg',
            title:"4/3 - Sydney",
            category: ['cuddle']
        },
        {
            image:'images/roz.jpg',
            title:"5/3 - Roz",
            category: ['cuddle']
        },
        {
            image:'images/paddy.jpg',
            title:"6/3 - Paddy",
            category: ['cuddle']
        },
        {
            image:'images/moo.jpg',
            title:"7/3 - Moo",
            category: ['cuddle']
        },
        {
            image:'images/odell.jpg',
            title:"8/3 - Odell",
            category: ['cuddle']
        },
        {
            image:'images/splash.jpg',
            title:"9/3 - Splash",
            category: ['cuddle']
        }
    ]
    this.weeks=weeks;
});

