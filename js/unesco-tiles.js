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
            link:'',
            image:'',
            title:'Blaenavon',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Blenheim Palace',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Canterbury Cathedral',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Castles of King Edward',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Cornwall Mining',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Derwent Valley Mills',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Dorset Jurassic Coast',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Durham Cathedral',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Edinburgh',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'English Lake District',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Flow Country - Peat Bogs',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Forth Bridge',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Fountains Abbey',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Frontiers - Antonine Wall',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Frontiers - Hadrians Wall',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Giants Causeway',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Gracehill',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Greenwich',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Ironbridge Gauge',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Jodrell Bank',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Kew Gardens',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Neolithic Orkney (Skara Brae)',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'New Lanark Mill',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Pontcysyllte Aquaduct',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Saltaire',
            category: ['unesco']
        },
				{
            link:'',
            image:'',
            title:'Slate Landscape',
            category: ['unesco']
        },
				{
            link:'',
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
            link:'',
            image:'',
            title:'Tower of London',
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
