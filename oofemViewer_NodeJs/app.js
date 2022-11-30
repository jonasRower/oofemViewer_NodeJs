

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


// settings
app.set('port', process.env.PORT || 3000);



//zatim to bude takhle, ale predelat pres moduly

//vytvori json na zaklade cehoz zobrazi/skryje jednotlive polozky v menu
//json uchovava jen data, ktera budou zobrazovana (v menu), ty co budou skryta JSON neobsahuje
import { elementyMenu } from './public/data/elementyMenu.js';

//json uchovavajici posledni nastaveni v menu, tak aby si pamatoval nastaveni do pristiho refreshnuti menu
import { nastaveniMenu } from './public/data/nastaveniMenu.js';

//vrati data do comboboxu element/node preview
//data se ulozi pod routery (get), ktere jsou ulozeny jako konstantni po cely beh aplikace
// -> neni treba data obnovovat, po cely beh aplikace bude nactena jen jedna konstrukce
import { dataPreviewMenu } from './public/data/ziskejDataPreview.js';

//vyhleda v databazi prislusna data na zaklade "menuNastaveni"
// - pak nasledne pouzije puvodni kod k ziskani souradnic na prutech
// - pak seskupi data, aby sly za sebou - vsechny cary
// - pak data vrati sem a tady je odesle na webovou sluzbu
// - tam si je nacte a zobrazi v grafice
import { dataMongoDB } from './public/grafika/dataMongoDB.js';

//spousti vlastni jadro pro dopocitani souradnic pro vykresleni
import { grafyNaPrutech } from './public/grafika/grafyNaPrutech.js';

//seskupi data do 1 jsonu, aby data dokazal vykreslovat v grafice
import { seskupJSON } from './public/grafika/seskupJSON.js';

//před startem aplikace je potřeba prohledat databázi a vrátit jména všech projektů apod.
//aby bylo možné vybrat projekt a nastavit správná data do comboboxů
import { loadDataPrev } from './public/data/loadDataPrev.js';

//dopocita meritko automaticky, jelikoz pro kazdy projekt muze byt jine
import { dopocetMeritka } from './public/grafika/dopocetMeritka.js';
import { Console } from 'console';



//nejake promenne, ktere se ukladaji na globalni urovni
let reqSubmit = ""
let menuNastaveni;
let dataCanvas;         //data pro vykresleni grafiky, budou ulozena na routeru "/dataCanvas"
let hodnotyProjektu;    //uklada data z databaze, ktere jsou nacteny hned po startu aplikace - slouzi pro aktualni vykreslovani GUI
let meritkoJSON;        //obsahuje JSON s meritkami - meritko se dopocitava automaticky
const dataPreview = dataPreviewMenu();


app.get('/', function(req, res){

    console.log("/ / / / / / / / / / / / / / / / / / / /");
    console.log(hodnotyProjektu);

    //prejde na uvodni stranku
    app.use(express.static(path.join(__dirname, 'views')));
    //test();
    res.render('profile');

});  



//sockets (pro vykreslovani hlavni grafiky)
require('./public/grafika/sockets')(io);


//--------------------------------------------------------------------------------
//zalozi webovou sluzbu, tak aby nacetl data pro vykresleni prave z webove sluzby
//zde nacita data pro vykreslovani v grafice

app.get('/dataCanvas', function(req, res){

    res.send(dataCanvas);

}); 


app.use('/dataCanvas', function(req, res, next){

    //zapise data na webovou sluzbu
    res.send(dataCanvas);
    next();

});


//meritko se jiz dopocitava automaticky - v modulu "dopocetMeritka.js"
app.get('/dataMeritko', function(req, res){

    res.send(meritkoJSON);

}); 




//data pro vykresleni menu
//pri obnoveni stranky se JQuery dotaze na router '/dataMenu', je tedy treba aby mel k dispozici data
app.use('/dataMenu', function(req, res, next){

    
    function nactiMongoData(callback) {
        let myPromise;

        setTimeout(function () { 

            myPromise = dataMongoDB(menuNastaveni);
            myPromise.then(
       
                function(jsonMongoDB) {

                    //odesle data pro vypocet souradnic do "grafyNaPrutech"
                    //ziska data, ktera je treba jeste seskupit, aby se daly vykreslovat
                    var dataKSeskupeni = grafyNaPrutech(jsonMongoDB);
                     
                    //seskupi data do JSONu
                    dataCanvas = seskupJSON(dataKSeskupeni);

                    //dopocita meritko, podle aktualnich dat "dataCanvas"
                    meritkoJSON = dopocetMeritka(dataCanvas);
            
                }
                
            );    
        }, 200);

        callback();
    }
    
      
    nactiMongoData(function () {});
     


    //aktualizuje data, na jejichz zaklade nastavuje nastaveni menu
    console.log(menuNastaveni);
    var JSONMenu = elementyMenu(reqSubmit, menuNastaveni, dataPreview);
    res.send(JSONMenu);
    next();
});

app.get('/dataMenu', function(req, res){
    //console.log(dataMenu);
});  


//vychozi data pro menunew Promise(function(
app.use('/nastaveniMenu', function(req, res){
    menuNastaveni = nastaveniMenu(reqSubmit, menuNastaveni);

    //je potreba znovu nacist data z databaze
    //aby se prekreslila grafika
    function nactiMongoData(callback) {
        let myPromise;

        setTimeout(function () { 

            myPromise = dataMongoDB(menuNastaveni);
            myPromise.then(
       
                function(jsonMongoDB) {

                    console.log('jsonMongoDB');
                    console.log(jsonMongoDB);

                    //odesle data pro vypocet souradnic do "grafyNaPrutech"
                    //ziska data, ktera je treba jeste seskupit, aby se daly vykreslovat
                    var dataKSeskupeni = grafyNaPrutech(jsonMongoDB);
                     
                    //seskupi data do JSONu
                    dataCanvas = seskupJSON(dataKSeskupeni);

                    //dopocita meritko, podle aktualnich dat "dataCanvas"
                    meritkoJSON = dopocetMeritka(dataCanvas);
            
                }
                
            );    
        }, 200);

        callback();
    }

    nactiMongoData(function () {});

    res.send(menuNastaveni);
});


app.get('/nastaveniMenu', function(req, res){
    //console.log(dataMenu);
}); 


app.post('/submitMenu', urlencodedParser, function(req, res){
    reqSubmit = req.body;

    //po submitu se presmeruje na 'http://localhost:3000/'
    //ceka 5 sekund
    setTimeout(() => {res.redirect('http://localhost:3000/')}, 2*1000);
});


// starting the server
server.listen(app.get('port'), () => {
    
    //nacte data z DB
    function nactiMongoPriSpusteni(callback) {
        let myPromise;

        setTimeout(function () { 

            myPromise = loadDataPrev();
            myPromise.then(

                function(hodnotyProjektuDB) {
                    hodnotyProjektu = hodnotyProjektuDB;
                }
                
            );    

        }, 200);

        callback();
    }

    nactiMongoPriSpusteni(function () {});
    
    
    console.log('Server on port 3000');
})

//app.listen(3000);



