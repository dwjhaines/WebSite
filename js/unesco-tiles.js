var app = angular.module('tripApp',[]);
app.controller('tileController', function() {
    var trips=[ 
        {
            link:'https://photos.app.goo.gl/TtfNzxGiN7a2MHhr5',
            image:'images/unesco/bath-tile.jpg',
            title:'3. Bath',
            category: ['unesco']
        },
				{
            link:'https://www.visitblaenavon.co.uk/',
            image:'',
            title:'Blaenavon',
            category: ['unesco']
        },
				{
            link:'https://www.blenheimpalace.com/',
            image:'',
            title:'Blenheim Palace',
            category: ['unesco']
        },
				{
            link:'https://www.canterbury-cathedral.org/',
            image:'',
            title:'Canterbury Cathedral',
            category: ['unesco']
        },
				{
            link:'https://www.visitwales.com/things-do/attractions/castles-heritage/trail-majestic-castles',
            image:'',
            title:'Castles of King Edward',
            category: ['unesco']
        },
				{
            link:'https://whc.unesco.org/en/list/1215/',
            image:'',
            title:'Cornwall Mining',
            category: ['unesco']
        },
				{
            link:'https://www.derwentvalleymills.org/',
            image:'',
            title:'Derwent Valley Mills',
            category: ['unesco']
        },
				{
            link:'https://jurassiccoast.org/',
            image:'',
            title:'Dorset Jurassic Coast',
            category: ['unesco']
        },
				{
            link:'https://photos.app.goo.gl/fYiAGRdP5NRMGpdd9',
            image:'images/unesco/durham-cathedral-tile.jpg',
            title:'5. Durham Cathedral',
            category: ['unesco']
        },
				{
            link:'https://edinburgh.org/',
            image:'',
            title:'Edinburgh',
            category: ['unesco']
        },
				{
            link:'https://www.lakedistrict.gov.uk/',
            image:'',
            title:'English Lake District',
            category: ['unesco']
        },
				{
            link:'https://theflowcountry.org.uk/',
            image:'',
            title:'Flow Country - Peat Bogs',
            category: ['unesco']
        },
				{
            link:'https://www.theforthbridges.org/',
            image:'',
            title:'Forth Bridge',
            category: ['unesco']
        },
				{
            link:'https://www.nationaltrust.org.uk/visit/yorkshire/fountains-abbey-and-studley-royal-water-garden',
            image:'',
            title:'Fountains Abbey',
            category: ['unesco']
        },
				{
            link:'https://www.antoninewall.org/',
            image:'',
            title:'Frontiers - Antonine Wall',
            category: ['unesco']
        },
				{
            link:'https://www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/history/',
            image:'',
            title:'Frontiers - Hadrians Wall',
            category: ['unesco']
        },
				{
            link:'https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway',
            image:'',
            title:'Giants Causeway',
            category: ['unesco']
        },
				{
            link:'https://gracehillvillage.org/',
            image:'',
            title:'Gracehill',
            category: ['unesco']
        },
				{
            link:'https://www.visitgreenwich.org.uk/',
            image:'',
            title:'Greenwich',
            category: ['unesco']
        },
				{
            link:'https://www.ironbridge.org.uk/',
            image:'',
            title:'Ironbridge Gorge',
            category: ['unesco']
        },
				{
            link:'https://www.jodrellbank.net/',
            image:'',
            title:'Jodrell Bank',
            category: ['unesco']
        },
				{
            link:'https://www.kew.org/',
            image:'',
            title:'Kew Gardens',
            category: ['unesco']
        },
				{
            link:'https://www.historicenvironment.scot/visit-a-place/places/skara-brae/overview/',
            image:'',
            title:'Neolithic Orkney (Skara Brae)',
            category: ['unesco']
        },
				{
            link:'https://newlanark.org/',
            image:'',
            title:'New Lanark Mill',
            category: ['unesco']
        },
				{
            link:'https://www.pontcysyllte-aqueduct.co.uk/',
            image:'',
            title:'Pontcysyllte Aquaduct',
            category: ['unesco']
        },
				{
            link:'https://saltairevillage.info/',
            image:'',
            title:'Saltaire',
            category: ['unesco']
        },
				{
            link:'https://www.visitwales.com/destinations/north-wales/eryri-snowdonia-mountains-and-coast/six-areas-unesco-awarded-slate',
            image:'',
            title:'Slate Landscape',
            category: ['unesco']
        },
				{
            link:'https://www.nts.org.uk/visit/places/st-kilda',
            image:'',
            title:'St Kilda',
            category: ['unesco']
        },
				{
            link:'https://photos.app.goo.gl/3eA8ai3AGc2EWBq28',
            image:'images/unesco/stonehenge-tile.jpg',
            title:'2. Stonehenge',
            category: ['unesco']
        },
				{
            link:'https://photos.app.goo.gl/LRAwDRf4RFKyQWHT7',
            image:'images/unesco/tower-of-london-tile.jpg',
            title:'4. Tower of London',
            category: ['unesco']
        },
				{
            link:'https://photos.app.goo.gl/WrfTCRPnbsWSyM1HA',
            image:'images/unesco/westminster-abbey-tile.jpg',
            title:'1. Westminster Abbey',
            category: ['unesco']
        }
        
    ]
    this.trips=trips;
});
