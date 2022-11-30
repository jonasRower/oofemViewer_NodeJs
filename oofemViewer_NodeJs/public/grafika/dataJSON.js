//zde ziskava data z databaze



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("database");
  dbo.collection("mydb").find(
                              {"header": {
                              "nazevProjektu": "beam2D_1",
                              "domain": "2dBeam",
                              "typDat": "ElementLoad",
                              "DOF": "1",
                              "typJSON": "GrafyKceInput",
                              "OFT": "0"
                                    } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



var ElementLoads_1 = '{"grafyKCE": [' +
'  {"data": [' +
'     {"prut": {' +
'           "kce": {"Ax":0.0,"Ay":0.0,"Bx":120.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"1", "uzelEnd":"2"},' +
'           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
'       }},' +
'     {"prut": {' +
'           "kce": {"Ax":120.0,"Ay":0.0,"Bx":190.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"2", "uzelEnd":"3"},' +
'           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
'       }},' +
'     {"prut": {' +
'           "kce": {"Ax":190.0,"Ay":0.0,"Bx":290.0,"By":75.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"3", "uzelEnd":"4"},' +
'           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
'       }},' +
'     {"prut": {' +
'           "kce": {"Ax":290.0,"Ay":75.0,"Bx":390.0,"By":150.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"4", "uzelEnd":"5"},' +
'           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
'       }},' +
'     {"prut": {' +
'           "kce": {"Ax":120.0,"Ay":150.0,"Bx":120.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"6", "uzelEnd":"2"},' +
'           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}' +
'       }},' +
'       {"Ox":50},' +
'       {"Oy":100},' +
'       {"meritkoGraf":0.0},' +
'       {"id":"test"},' +
'       {"class":""}' +
'   ]}' +
'   ]}';


/*
var ElementLoads_1 = {"grafyKCE": [
  {"data": [
     {"prut": {
           "kce": {"Ax":0.0,"Ay":0.0,"Bx":120.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"1", "uzelEnd":"2"},
           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}
       }},
     {"prut": {
           "kce": {"Ax":120.0,"Ay":0.0,"Bx":190.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"2", "uzelEnd":"3"},
           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}
       }},
     {"prut": {
          "kce": {"Ax":190.0,"Ay":0.0,"Bx":290.0,"By":75.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"3", "uzelEnd":"4"},
           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}
       }},
     {"prut": {
           "kce": {"Ax":290.0,"Ay":75.0,"Bx":390.0,"By":150.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"4", "uzelEnd":"5"},
           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}
       }},
     {"prut": {
           "kce": {"Ax":120.0,"Ay":150.0,"Bx":120.0,"By":0.0,"graf":true,"vykreslitPrut":true,"barvaCary":"darkBlue", "tloustkaCary":"3", "uzelStart":"6", "uzelEnd":"2"},
           "graf": {"delkaKrokuPriblizne":10,"nasobkyMocnin":[[0, 1], [0.0, 0.0]],"vykreslitGraf":true,"vykreslitSrafu":true,"barvaCarySrafy":"#000000","tloustkaCarySrafa":"0.5","barvaCaryGraf":"#000000","tloustkaCaryGraf":"1"}
       }},
       {"Ox":50},
       {"Oy":100},
       {"meritkoGraf":0.0},
       {"id":"test"},
       {"class":""}
   ]}
   ]}
*/

module.exports.ElementLoads_1 = ElementLoads_1;


//-----------------------------



