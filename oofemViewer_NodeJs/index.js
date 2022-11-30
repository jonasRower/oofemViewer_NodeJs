
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// initialization
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



//importuje data od jinud
//import { dataMenuDefault } from './nastavParametryMenu.js';
import { dataMenuDoplnene } from './nastavParametryMenu.js';
import { elementyMenu } from './elementyMenu.js';
import { prenastavMenu } from './prenastavParametryMenu.js';
import { dataPreviewMenu } from './ziskejDataPreview.js';
import { dataPreviewCombo } from './ziskejComboPreview.js';


let dataMenu = {
    selectPrePostSubmit: 'outputs',
    selectLoadSubmit: 'ElementLoads',
    specifyDOFSubmit: 'Specify DOF',
    selectDOFinputsSubmit: '1',
    selectResultsSubmit: 'LocalDisplacements',
    selectDOFoutputsSubmit: '1',
    selectOFTSubmit: '1.00000000e+00',
    filterBySubmit: 'Element -> Node',
    selectElementPreviewSubmit: '-1',
    numberValuesSubmit: 'Number of nodes',
    selectNodePreviewSubmit: '-1',
    moveTextSubmit: 'false',
    polozkyElementyPreviewSubmit: [ 1, 2, 3, 4 ],
    polozkyNodePreviewSubmit: [
      1, 2, 3, 4, 5,
      6, 7, 8, 9
    ]
  }







//ziska vychozi nastaveni do menu
//var dataMenu = dataMenuDefault();

//var dataPreview = dataPreviewMenu();
var zmenenaPolozka;
zmenenaPolozka = "outputs";


// static files
app.use(express.static(path.join(__dirname, 'views')));

// settings
app.set('port', process.env.PORT || 3000);


//--------------------------------------------------

function vlozAppGet(router, resSend, req, res){

    app.get(router, function(req, res){

        console.log(router);
        console.log(resSend);
        res.send(resSend);

    });

}


function vlozVsechnyRoutery(vsechnyData, elementNode){
    
    var obsahCombo;
    var rout;

    if(elementNode == "cisloNode"){
        rout = '/preview/numbersElementsForNode/';
    }
    if(elementNode == "cisloElement"){
        rout = '/preview/numbersNodesForElement/';
    }

    //postupne vlozi vsechny routery - uzly
    for (var i = 0; i < vsechnyData.length; i++) {
        var cisloPolozky = vsechnyData[i];
        var router;

        obsahCombo = dataPreviewCombo(dataPreview, "cisloNode", cisloPolozky);
        router = rout + cisloPolozky + '/';

        //vlozi router
        vlozAppGet(router, obsahCombo);
        console.log(router);
        console.log(obsahCombo);

    }


}


//ziska data
var dataPreview = dataPreviewMenu();

var vsechnyElementy = dataPreviewCombo(dataPreview, "cisloNode", -1);
var vsechnyUzly = dataPreviewCombo(dataPreview, "cisloElement", -1);


//vlozi vsechny routery pro jednotlive uzly
vlozVsechnyRoutery(vsechnyUzly, "cisloNode");




//--------------------------------------------------

//uvodni stranka
app.get('/', function(req, res){

    //var dataMenu = dataMenuDefault;
    console.log(dataMenu);

    //prejde na uvodni stranku
    res.render('index');

});  

//data pro vykresleni menu
app.get('/dataMenu', function(req, res){

    var JSONMenu = elementyMenu();
    res.send(JSONMenu);

});  


//-------------------------------------------

//vychozi data pro menu
app.use('/nastaveniMenu', function(req, res, next){
    res.send(dataMenu);
    next();
});

app.get('/nastaveniMenu', function(req, res){
    var idMenuItem = "selectPrePostSubmit";
    var item = zmenenaPolozka;

    dataMenu = prenastavMenu(dataMenu, idMenuItem, item);

});  


var indexVolani = 0;


//submit na strance
app.post('/dataMenu', urlencodedParser, function(req, res){

    var idMenuItem = req.body.inputId;
    var item = req.body.inputValue;
    console.log(req.body)

    //chyba je ta, ze nepocka, dokud se toto nezmeni
    zmenenaPolozka = req.body.inputValue;

    //zmeni data
    dataMenu = prenastavMenu(dataMenu, idMenuItem, item);

    /*
    dataMenu = {
        selectPrePostSubmit: 'inputs',
        selectLoadSubmit: 'ElementLoads',
        specifyDOFSubmit: 'Specify DOF',
        selectDOFinputsSubmit: '1',
        selectResultsSubmit: 'LocalDisplacements',
        selectDOFoutputsSubmit: '1',
        selectOFTSubmit: '1.00000000e+00',
        filterBySubmit: 'Element -> Node',
        selectElementPreviewSubmit: '-1',
        numberValuesSubmit: 'Number of nodes',
        selectNodePreviewSubmit: '-1',
        moveTextSubmit: 'false',
        polozkyElementyPreviewSubmit: [ 1, 2, 3, 4 ],
        polozkyNodePreviewSubmit: [
          1, 2, 3, 4, 5,
          6, 7, 8, 9
        ]
      }
    
    
    //pokud zmeni data menu a rendruje index, pak by to melo behat
    console.log(dataMenu)

    res.render('index', {dataMenu: dataMenu});
    */

    setTimeout(() => {res.redirect('http://localhost:3000/')}, 5*1000);

});





// middlewares


//sockets
require('./sockets')(io);


// static files
//app.use(express.static(path.join(__dirname, 'views')));


// starting the server
server.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
