//nastavi menu dle prijatych dat ze serveru

class nastavMenu {

    constructor(){

        alert("")
        //this.nastavujMenu();
        this.nastavujMenu();
        
    }


    nastavujMenu(){

        var selectPrePost = $("#selectPrePostZeServeru").val();
        $("#selectPrePost").val(selectPrePost);

        var selectLoad = $("#selectLoadZeServeru").val();
        $("#selectLoad").val(selectLoad);

        var specifyDOF = $("#specifyDOFZeServeru").val();
        $("#specifyDOF").val(specifyDOF);

        //do ejs se nedostavaji uplna data, zde se doplnuji
        if(specifyDOF == "Specify"){
            specifyDOF = "Specify DOF";
        }
        if(specifyDOF == "All"){
            specifyDOF = "All DOF";
        }

        alert(specifyDOF);
        //prenastavi se radiobutton
        document.getElementById("Specify DOF").checked = true;


        var selectDOFinputs = $("#selectDOFinputsZeServeru").val();
        $("#selectDOFinputs").val(selectDOFinputs);

        var selectResults = $("#selectResultsZeServeru").val();
        $("#selectResults").val(selectResults);

        var selectDOFoutput = $("#selectDOFoutputsZeServeru").val();
        $("#selectDOF").val(selectDOFoutput);

        var selectOFT = $("#selectOFTZeServeru").val();
        $("#selectOFT").val(selectOFT);

        var filterBy = $("#filterByZeServeru").val();
  
        //do ejs se nedostavaji uplna data, zde se doplnuji
        if(filterBy == "Element"){
            filterBy = "Element -> Node";
        }
        if(filterBy == "Node"){
            filterBy = "Node -> Element";
        }

        //prenastavi se radiobutton
        document.getElementById(filterBy).checked = true;


        $("#filterBy").val(filterBy);

        var selectElementPreview = $("#selectElementPreviewZeServeru").val();
        $("#selectElementPreview").val(selectElementPreview);

        var numberValues = $("#numberValuesZeServeru").val();

        //do ejs se nedostavaji uplna data, zde se doplnuji
        if(numberValues == "Number"){
            numberValues = "Number of nodes";
        }
        if(numberValues == "Values"){
            numberValues = "Values";
        }

        //prenastavi se radiobutton
        document.getElementById(numberValues).checked = true;

        var selectNode = $("#selectNodePreviewZeServeru").val();
        $("#selectNode").val(selectNode);

        var moveText = $("#moveTextZeServeru").val();

        if(moveText == "false"){
            moveText = "Old algorithm";
        }
        if(moveText == "true"){
            moveText = "New algorithm";
        }

        //prenastavi se radiobutton
        document.getElementById(moveText).checked = true;


    }


    //jelikoz comboboxu je vic (pruty a uzly), comba se nastavuji v teto metode
    vytvorCombobox(idComboboxu, polozkyComboboxu){

        //odstrani stavajici polozky z Combo
        $(idComboboxu)
            .find('option')
            .remove()
            .end()
            .append('<option>-1</option>')

        console.log("polozkyComboboxu.length");

        
        //vlozi nove polozky
        for (var i = 0; i < polozkyComboboxu.length; i++) {
            var polozkaCombo = polozkyComboboxu[i] 
            $(idComboboxu).append("<option>" + polozkaCombo + "</option>");
        }
        

    }


}


//reaguje na klikani do menu
$( 'document' ).ready(function(){

    var nastavujMenu = new nastavMenu();

});