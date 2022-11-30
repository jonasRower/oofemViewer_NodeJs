
// tento modul nacita data z html a zapisuje je do skrytych inputboxu na formulari
// tim se po stisku submit odeslou vsechny data najednou

class dataFormular {

    constructor(){

        this.prepisDataDoFormulare();

    }


    // dohleda prislusna data k odeslani a vepise je do inputboxu
    prepisDataDoFormulare(){

        //($('input[name=radioName]:checked', '#specifyDOF').val());

        var selectPrePost = $( '#selectPrePost :selected' ).text();
        $("#selectPrePostSubmit").val(selectPrePost);
         
        var selectLoad = $( '#selectLoad :selected' ).text();
        $("#selectLoadSubmit").val(selectLoad);

        var specifyDOF = $('input[name=radioName]:checked', '#specifyDOF').val(); 
        $("#specifyDOFSubmit").val(specifyDOF);

        var selectDOFinputs = $( '#selectDOFinputs :selected' ).text();
        $("#selectDOFinputsSubmit").val(selectDOFinputs);

        var selectResults = $( '#selectResults :selected' ).text();
        $("#selectResultsSubmit").val(selectResults);
      
        var selectDOFoutputs = $( '#selectDOF :selected' ).text();
        $("#selectDOFoutputsSubmit").val(selectDOFoutputs);
        
        var selectOFT = $( '#selectOFT :selected' ).text();
        $("#selectOFTSubmit").val(selectOFT);

        var filterBy = $('input[name=radioName]:checked', '#filterBy').val(); 
        $("#filterBySubmit").val(filterBy);

        var selectElementPreview = $( '#selectElementPreview :selected' ).text();
        $("#selectElementPreviewSubmit").val(selectElementPreview);

        var numberValues = $('input[name=radioName]:checked', '#numberValues').val(); 
        $("#numberValuesSubmit").val(numberValues);

        var selectNodePreview = $( '#selectNode :selected' ).text();
        $("#selectNodePreviewSubmit").val(selectNodePreview);

        var moveText = $('input[name=radioName]:checked', '#moveText').val(); 
        $("#moveTextSubmit").val(moveText);


    }

}


//reaguje na klikani do menu
$( 'document' ).ready(function(){

    console.log("odes")
    var odesliDataNaBackend = new dataFormular();

});


