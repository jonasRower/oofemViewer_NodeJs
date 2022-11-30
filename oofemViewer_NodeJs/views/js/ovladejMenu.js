
//#############################################################################################    
//               Metody (bez trid) pro zobrazovani dat v Canvasu


// odesleDataPresSocket

class socketData {

    constructor(){

        //zvoleneJSONInputs se pridavaji do pole
        //jakmile dosahne delka pole poctu indexu v poli (pole se naplni)
        //odeslou se data pomoci socketu

         
        this.JSONInputs = [];

    }

    
    pridejJSONInputDoPole(zvolenyJSONInputs, delkaPoleExp){

        this.JSONInputs.push(zvolenyJSONInputs);

        var delkaPole = this.JSONInputs.length;
        if(delkaPole == delkaPoleExp){

            //console.log("odeslani pres socket");
            //console.log(this.JSONInputs);

            var socket = io();
            console.log(io());
            
            socket.emit('zvolenyJSON', this.JSONInputs);
            console.log("this.socket.emit");

        }

    }


}


class vstupyZMenu {

    constructor(){

        //uklada posleden nastaveny "zvolenyJSON"
        var zvolenyJSON;
    }


    //-------------------------------
    //vraci obsah comboboxu
    //-------------------------------

    vratObsahComboboxu(comboboxId){

        var options = $( comboboxId + ' option');
        var hodnotyComboboxu = [];

        var values = $.map(options ,function(option) {
            hodnotyComboboxu.push(option.value);
        });

        return(hodnotyComboboxu)

    }


    //-------------------------------
    //vykresluje inputs
    //-------------------------------

    vykresliInputs(){

        var selectedLoad;
        var selectedElementPreview;
        var zvolenyJSONInputs;
        var selectedDOF;
        var specifyDOF;

        var zvolenyJSONInputs1;
        var zvolenyJSONInputs3;
        var zvolenyJSONInputs5;

        var zvyrazniCisloUzlu;
        var posouvatText;

        var dataKOdeslani = new socketData();

        selectedLoad = $( '#selectLoad :selected' ).text();
        selectedDOF = $( '#selectDOFinputs :selected' ).text();
        specifyDOF = ($('input[name=radioName]:checked', '#specifyDOF').val()); 
        selectedElementPreview = $( '#selectElementPreview :selected' ).text();
        zvyrazniCisloUzlu = $( '#selectNode :selected' ).text();

        //zjisti, zda ma posouvat text, ci nikoliv
        posouvatText =  $('input[name=radioName]:checked', '#moveText').val(); 


        if(selectedLoad == "TemperatureLoad"){

            $("#specifyDOF").hide();
            zvolenyJSONInputs = "TemperatureHorni_3"
            var grafika = new vykresliKonstrukci(zvolenyJSONInputs, true, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
            zvolenyJSONInputs = "TemperatureDolni_3"
            var grafika = new vykresliKonstrukci(zvolenyJSONInputs, false, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);

        }
        else {
            
            $("#specifyDOF").show();

        }

        if(selectedLoad == "ElementLoads"){

            $("#specifyDOF").show();
            if(specifyDOF == "All DOF"){
                zvolenyJSONInputs1 = selectedLoad + "_1";
                zvolenyJSONInputs3 = selectedLoad + "_3";
                zvolenyJSONInputs5 = selectedLoad + "_5";  

                //prida data k odeslani a pak je odesle
                dataKOdeslani.pridejJSONInputDoPole(zvolenyJSONInputs1, 3);
                dataKOdeslani.pridejJSONInputDoPole(zvolenyJSONInputs3, 3);
                dataKOdeslani.pridejJSONInputDoPole(zvolenyJSONInputs5, 3);

                /*
                console.log("vykresliInputs");
                console.log(zvolenyJSONInputs1);
                console.log(zvolenyJSONInputs3);
                console.log(zvolenyJSONInputs5);

                
                var grafika = new vykresliKonstrukci(zvolenyJSONInputs1, true, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
                var grafika = new vykresliKonstrukci(zvolenyJSONInputs3, false, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
                var grafika = new vykresliKonstrukci(zvolenyJSONInputs5, false, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
                */
            }
            else {
                zvolenyJSONInputs = selectedLoad + "_" + selectedDOF;
                var grafika = new vykresliKonstrukci(zvolenyJSONInputs, true, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
            }
        }

        //kdyz je vybrano "Nodal Loads" je potreba zobrazit take kontrukci, jelikoz
        //v JSONu obsahujici sipky konstrukce neni
        if(selectedLoad == "NodalLoads"){
            zvolenyJSONInputs = "ElementLoads_1";
            var grafika = new vykresliKonstrukci(zvolenyJSONInputs, true, false, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
        } 

        //to same plati i pro "ForcedDisplacement"
        if(selectedLoad == "ForcedDisplacement"){
            zvolenyJSONInputs = "ElementLoads_1";
            var grafika = new vykresliKonstrukci(zvolenyJSONInputs, true, false, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
        }

        //neni-li nic definovano (pri refresh), pak se nastavi vychozi hodnoty
        if(selectedLoad == "ElementLoads"){
            selectedLoad = "ElementLoads_1";
        }

        return(selectedLoad);

    }

    //-------------------------------
    //vykresluje outputs
    //-------------------------------

    vykresliOutputs(){

        var zvolenyJSONOutput;

        var selectedElementPreview;
        var selectedTypeResults;
        var selectedDOF;
        var selectedOFT;

        var zvyrazniCisloUzlu;
        var posouvatText;

        
        var dataKOdeslani = new socketData();

        selectedTypeResults = $( '#selectResults :selected' ).text();
        selectedDOF = $( '#selectDOF :selected' ).text();
        selectedOFT = $( '#selectOFT :selected' ).text();
        selectedElementPreview = $( '#selectElementPreview :selected' ).text();
        zvyrazniCisloUzlu = $( '#selectNode :selected' ).text();

        //zjisti, zda ma posouvat text, ci nikoliv
        posouvatText =  $('input[name=radioName]:checked', '#moveText').val(); 

        // jelikoz se zobrazuji sily, je potreba jeste vykreslit konstrukci, ale bez zatizeni
        if(selectedTypeResults == "Reactions"){
            zvolenyJSONInputs = "ElementLoads_1";
            var grafika = new vykresliKonstrukci(zvolenyJSONInputs, true, false, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
        }
        else {  //zde se zobrazuji ostatni moznosti
            zvolenyJSONOutput = selectedTypeResults + "_" + selectedDOF + "_" + selectedOFT;

            zvolenyJSONOutput = zvolenyJSONOutput.replace("+", "p");
            zvolenyJSONOutput = zvolenyJSONOutput.replace("-", "m");
            zvolenyJSONOutput = zvolenyJSONOutput.replace(".", "_");


            //odesle data do socketu
            dataKOdeslani.pridejJSONInputDoPole(zvolenyJSONOutput, 1);

            //var grafika = new vykresliKonstrukci(zvolenyJSONOutput, true, true, "test", -1, selectedElementPreview, false, zvyrazniCisloUzlu, posouvatText);
        }

        return(zvolenyJSONOutput);

    }


    //-------------------------------
    //vykresluje nahled (Preview)
    //-------------------------------


    //vycisti nahled - canvas (Preview)
    vycistiPreview(){

        var c = document.getElementById("vodorovnyRez");
        try {
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, c.width, c.height);   
        }
        catch(err) {
            console.log("vodorovnyRez nenalezen");
        }

    }

    //vykresli nahled
    vykresliPreview(aktualizujInputsOutputs){

        var zobrazGraf;
        var numberValues;
        var selectedElementPreview;

        var posouvatText;

        //zjisti dany prut, ktery ma zvyraznit
        selectedElementPreview = $( '#selectElementPreview :selected' ).text();

        //zjisti, zda ma posouvat text, ci nikoliv
        posouvatText =  $('input[name=radioName]:checked', '#moveText').val(); 

        //vykresli náhled jen v pripade, ze je vybran cislo prutu > -1
        if(selectedElementPreview > -1){
            numberValues = ($('input[name=radioName]:checked', '#numberValues').val()); 

            if(numberValues == "Values"){
                zobrazGraf = true;
            }
            if(numberValues == "Number of nodes"){
                zobrazGraf = false;
            }

            //je-li "zvolenyJSON == NodalLoads, pak nelze zobrazovat prubeh na prutu a je treba prenastavit aby nedochazelo k chybe"
            if(zvolenyJSON == "NodalLoads"){
                zvolenyJSON = "ElementLoads_1";
            }
            if(zvolenyJSON == "ForcedDisplacement"){
                zvolenyJSON = "ElementLoads_1";
            }
            if(zvolenyJSON == "TemperatureLoad"){
                zvolenyJSON = "ElementLoads_1";
            }


            

            //vykresli Element Preview
            //var grafika = new vykresliKonstrukci(zvolenyJSON, true, zobrazGraf, "vodorovnyRez", selectedElementPreview, selectedElementPreview, true, -1, posouvatText);

        }

        //aktualizuje inputs/outputs pokud "aktualizujInputsOutputs == true"
        if(aktualizujInputsOutputs == true){

            //vykresli jiz nastaveny inputs/outputs
            var selectedPrePost = $( '#selectPrePost :selected' ).text();
            var pripravDataZMenu = new vstupyZMenu();

            if(selectedPrePost == "inputs"){
                pripravDataZMenu.vykresliInputs();
            }
            if(selectedPrePost == "outputs"){
                pripravDataZMenu.vykresliOutputs();
            }

        }


        else {  //neni-li vybran zadny prut, vymaze nahled (vycisti platno)
            
            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vycistiPreview();

        }

    }

}



//reaguje na klikani do menu
$( 'document' ).ready(function(){

    //-------------------------------
    //pomoci JQuery nastavuje comboboxy
    //-------------------------------


    //jelikoz comboboxu je vic (pruty a uzly), comba se nastavuji v teto metode
    function nastavDaneComboPodleId(idComboboxu, polozkyComboboxu){

        //odstrani stavajici polozky z Combo
        $(idComboboxu)
            .find('option')
            .remove()
            .end()
            .append('<option>-1</option>')

        console.log("polozkyComboboxu.length");

        /*
        //vlozi nove polozky
        for (var i = 0; i < polozkyComboboxu.length; i++) {
            var polozkaCombo = polozkyComboboxu[i] 
            $(idComboboxu).append("<option>" + polozkaCombo + "</option>");
        }
        */

    }


    //zde prenastavuje jednotliva comba v zavislosti na vzajemnem vyberu
    function nastavComboboxPreview(aktualizujUzly, aktualizujPruty, nastavVychoziHodnotu){

        var selectedElementPreview;
        var selectedNode;
        var polozkyComboUzly

        
        //trida zjistiCislaUzluKPrutum se inicializuje jen v pripade, ze je to nutne (kdyz se nenastavuje vychozi hodnota)
        if(nastavVychoziHodnotu == false){
            selectedElementPreview = $( '#selectElementPreview :selected' ).text();
            selectedNode = $( '#selectNode :selected' ).text();

            console.log("new zjistiCislaUzluKPrutum");
            console.log(zvolenyJSON);

            //var cislaUzluAPrutu = new zjistiCislaUzluKPrutum(zvolenyJSON, selectedElementPreview, selectedNode);
        }

        //dojde-li ke zmene vyberu v prutech aktualizuji se uzly
        if(aktualizujUzly == true){   //musi byt nastaveno "aktualizujPruty == false" jinak nedava smysl

            //je-li pozadovano nastavit pouze vychozi hodnotu, pak se nastavi pouze -1
            if(nastavVychoziHodnotu == true){
                polozkyComboUzly = [-1];
            }
            else {
                //ziska obsah comboboxu pro uzly
                console.log("polozkyComboUzly = cislaUzluAPrutu.getCislaUzlu();")
                //polozkyComboUzly = cislaUzluAPrutu.getCislaUzlu();
            }

            //nastavi comobox pro uzly
            nastavDaneComboPodleId("#selectNode", polozkyComboUzly);
        }

        //- - - - - - - - - - - - - - - - - - 

        //dojde-li ke zmene vyberu v uzlech aktualizuji se pruty
        if(aktualizujPruty == true){   //musi byt nastaveno "aktualizujUzly == false" jinak nedava smysl

            //je-li pozadovano nastavit pouze vychozi hodnotu, pak se nastavi pouze -1
            if(nastavVychoziHodnotu == true){
                polozkyComboPruty = [-1];
            }
            else {
                //ziska obsah comboboxu pro uzly
                console.log("polozkyComboUzly = cislaUzluAPrutu.getCislaUzlu();")
                //polozkyComboPruty = cislaUzluAPrutu.getCislaPrutu();
            }

            //nastavi comobox pro pruty
            console.log("polozkyComboPruty")
            //nastavDaneComboPodleId("#selectElementPreview", polozkyComboPruty);
        }

    }

    
    //skryva nebo zobrazuje DOF
    $('#specifyDOF input').on('change', function() {
        specifyDOF = ($('input[name=radioName]:checked', '#specifyDOF').val()); 

        if(specifyDOF == "All DOF"){
            $(".inputsDOF").hide()
            $("#selectDOFinputs").hide()
        }
        else{
            $(".inputsDOF").show()
            $("#selectDOFinputs").show()
        }
    });


    //skryva/zobrazuje jednotliva nastaveni
    $( "#selectPrePost" )
        .change(function () {
            selectedPrePost = $( '#selectPrePost :selected' ).text();

            if(selectedPrePost == "inputs"){
                $(".inputsDOF").hide();
                $(".outputs").hide();
                $(".inputs").show();
                $("#selectDOFinputs").hide();
            }
            if(selectedPrePost == "outputs"){
                $(".selectDOFinputs").hide();
                $(".inputsDOF").hide();
                $(".outputs").show();
                $(".inputs").hide();
            }


            //obnovi nahled
            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vykresliPreview(true);

        });


    //vybira data podle comboboxu - inputs
    $( ".inputs" )
        .change(function () {
        
            //vykreslovani inputs probiha v samostatne funkci
            //ulozi posledne zvoleny JSON
            var pripravDataZMenu = new vstupyZMenu();
            zvolenyJSON = pripravDataZMenu.vykresliInputs();
            
            //obnovi nahled
            pripravDataZMenu.vykresliPreview(true);
        
        })
        .change();


    //vybira data podle comboboxu - outputs
    $( ".outputs" )
        .change(function () {
        
            //vykreslovani outputs probiha v samostatne funkci
            //ulozi posledne zvoleny JSON
            var pripravDataZMenu = new vstupyZMenu();
            zvolenyJSON = pripravDataZMenu.vykresliOutputs();
        
            //obnovi nahled
            pripravDataZMenu.vykresliPreview(true);

        })
        .change();


    //pri zmene comboboxu s pruty dochazi k update comboboxu s uzly
    $( "#selectElementPreview" )
    .change(function () {

        var filterBy;
        var selectedElementPreview;
        var selectedNode;

        filterBy = ($('input[name=radioName]:checked', '#filterBy').val());
        selectedElementPreview = $( '#selectElementPreview :selected' ).text();
        selectedNode = $( '#selectNode :selected' ).text();

        if(filterBy == "Element -> Node"){
            nastavComboboxPreview(true, false, false);
        }

        //pri prvnim nacteni stranky
        if(selectedElementPreview == -1){

            //neni-li vybran zadny prut, pak vycisti nahled
            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vycistiPreview();

            if(selectedNode == -1){
                if(filterBy == "Node -> Element"){
                    nastavComboboxPreview(true, false, false);
                    nastavComboboxPreview(false, true, true);
                }
            }
        }

        //pri kazde zmene vyberu prutu se prekresli platno
        var pripravDataZMenu = new vstupyZMenu();
        pripravDataZMenu.vykresliPreview(true);

    })
    .change();


    //pri zmene comboboxu s uzly dochazi k update comboboxu s pruty
    $( "#selectNode" )
    .change(function () {

        var filterBy;
        var selectedElementPreview;
        var selectedNode;

        //var obsahComboboxu;
        filterBy = ($('input[name=radioName]:checked', '#filterBy').val());
        selectedElementPreview = $( '#selectElementPreview :selected' ).text();
        selectedNode = $( '#selectNode :selected' ).text();

        if(filterBy == "Node -> Element"){
            nastavComboboxPreview(false, true, false);
        }    
        
        //pri prvnim nacteni stranky
        if(selectedElementPreview == -1){
            if(selectedNode == -1){
                if(filterBy == "Element -> Node"){
                    nastavComboboxPreview(false, true, false);
                    nastavComboboxPreview(true, false, true);
                }
            }
        }
        
        //pri kazde zmene vyberu uzlu je potreba dany uzel zvyrazni
        var pripravDataZMenu = new vstupyZMenu();
        pripravDataZMenu.vykresliPreview(true);

    })
    .change();


    //pri zmene "filter by" se updatuji comboboxy
    $( "#filterBy" )
        .change(function () {

            var filterBy;
            filterBy = ($('input[name=radioName]:checked', '#filterBy').val());

            //zmeni combobox
            if(filterBy == "Element -> Node"){
                nastavComboboxPreview(true, false, true);
                nastavComboboxPreview(false, true, false);
            }

            //zmeni combobox
            if(filterBy == "Node -> Element"){
                nastavComboboxPreview(false, true, true);
                nastavComboboxPreview(true, false, false);
            }

            //vycislti platno (nahled)
            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vycistiPreview();
            
        })
        .change();


    //pri zmene comboboxu s uzly dochazi k update comboboxu s pruty
    $( "#numberValues" )
        .change(function () {

            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vykresliPreview(true);

        })
        .change();


    //reaguje na nastaveni, zda posouvat text, ci nikoliv
    $( "#moveText" )
        .change(function () {

            var pripravDataZMenu = new vstupyZMenu();
            pripravDataZMenu.vykresliPreview(true);

        })
        .change();
   
    
    $(".inputsDOF").hide();
    $(".outputs").hide();
    $(".inputs").show();
    $("#selectDOFinputs").hide();

});





