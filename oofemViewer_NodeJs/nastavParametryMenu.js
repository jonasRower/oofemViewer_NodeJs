
//ziska data pro zobrazeni comboboxu Element a Node Preview
class ziskejNastaveniMenuDefault {

    constructor(){

        this.menuNastaveni = this.vytvorDefaultniNastaveni();

    };

    //vrati data pro nastaveni menu
    getMenuNastaveni(){

        return(this.menuNastaveni);

    }


    //vytvori defaultni nastaveni, pri prvnim zobrazeni stranky
    vytvorDefaultniNastaveni(){

        var pocetElemntu = 5;
        var pocetNode = 10;

        var selectPrePost = 'outputs';
        var selectLoad = 'ElementLoads';
        var specifyDOF = 'Specify DOF';
        var selectDOFinputs = '1';
        var selectResults = 'LocalDisplacements';
        var selectDOFoutputs = '1';
        var selectOFT = '1.00000000e+00';
        var filterBy = 'Element -> Node';
        var selectElementPreview = '-1';
        var numberValues = 'Number of nodes';
        var selectNodePreview = '-1';
        var moveText = 'false';

        var polozkyElementy = this.ziskejPoleComboBoxu(pocetElemntu);
        var polozkyNode = this.ziskejPoleComboBoxu(pocetNode);


        //vytvori JSON
        var menuNastaveni = {
                                "selectPrePostSubmit": selectPrePost,
                                "selectLoadSubmit": selectLoad,
                                "specifyDOFSubmit": specifyDOF,
                                "selectDOFinputsSubmit": selectDOFinputs,
                                "selectResultsSubmit": selectResults,
                                "selectDOFoutputsSubmit": selectDOFoutputs,
                                "selectOFTSubmit": selectOFT,
                                "filterBySubmit": filterBy,
                                "selectElementPreviewSubmit": selectElementPreview,
                                "numberValuesSubmit": numberValues,
                                "selectNodePreviewSubmit": selectNodePreview,
                                "moveTextSubmit": moveText,
                                "polozkyElementyPreviewSubmit": polozkyElementy,
                                "polozkyNodePreviewSubmit": polozkyNode
                            }

        return( menuNastaveni )

    }


    //na zaklade this.pocetEleemntu, nebo this.pocetNode vrati pole s daty do comboboxu
    ziskejPoleComboBoxu(pocetPolozek){

        var poleSPolozkami = [];

        for(var i=1; i<pocetPolozek; i++){
        
            poleSPolozkami.push(i);
        
        }

        return(poleSPolozkami);

    };

}


class dataZFrontenduRozsirONodeElementPreview{

    constructor(dataZFrontendu, dataDefault){

        //ziska pridavek z originalnich dat
        var JSONadded = this.ziskejJSONPreview(dataDefault);

        //pripoji pridavek k datum z frontendu
        this.JSONSlouceny = this.slucJSON(dataZFrontendu, JSONadded);

    }


    //vrati data pres geter
    getJSONSlouceny(){
        return(this.JSONSlouceny);
    }


    ziskejJSONPreview(dataDefault){

        var polozkyElementy = dataDefault.polozkyElementyPreviewSubmit;
        var polozkyNode = dataDefault.polozkyNodePreviewSubmit;

        console.log(polozkyElementy);
        console.log(polozkyNode);

        var JSONadded = {
                        "polozkyElementyPreviewSubmit": polozkyElementy,
                        "polozkyNodePreviewSubmit": polozkyNode
                    }

        return(JSONadded);
        
    }

    //vytvori json z frontendu rozsireny o originalni data
    slucJSON(dataZFrontendu, JSONadded){

        //ziska data z frontendu
        var selectPrePost = dataZFrontendu.selectPrePostSubmit;
        var selectLoad = dataZFrontendu.selectLoadSubmit;
        var specifyDOF = dataZFrontendu.specifyDOFSubmit;
        var selectDOFinputs = dataZFrontendu.selectDOFinputsSubmit;
        var selectResults = dataZFrontendu.selectResultsSubmit;
        var selectDOFoutputs = dataZFrontendu.selectDOFoutputsSubmit;
        var selectOFT = dataZFrontendu.selectOFTSubmit;
        var filterBy = dataZFrontendu.filterBySubmit;
        var selectElementPreview = dataZFrontendu.selectElementPreviewSubmit;
        var numberValues = dataZFrontendu.numberValuesSubmit;
        var selectNodePreview = dataZFrontendu.selectNodePreviewSubmit;
        var moveText = dataZFrontendu.moveTextSubmit;

        //ziska vychozi data
        var polozkyElementy = JSONadded.polozkyElementyPreviewSubmit;
        var polozkyNode = JSONadded.polozkyNodePreviewSubmit;

    
        var JSONSlouceny = {
                                "selectPrePostSubmit": selectPrePost,
                                "selectLoadSubmit": selectLoad,
                                "specifyDOFSubmit": specifyDOF,
                                "selectDOFinputsSubmit": selectDOFinputs,
                                "selectResultsSubmit": selectResults,
                                "selectDOFoutputsSubmit": selectDOFoutputs,
                                "selectOFTSubmit": selectOFT,
                                "filterBySubmit": filterBy,
                                "selectElementPreviewSubmit": selectElementPreview,
                                "numberValuesSubmit": numberValues,
                                "selectNodePreviewSubmit": selectNodePreview,
                                "moveTextSubmit": moveText,
                                "polozkyElementyPreviewSubmit": polozkyElementy,
                                "polozkyNodePreviewSubmit": polozkyNode
        }
        

        return(JSONSlouceny);

    }

}


export const dataMenuDefault = ((db) => {

    var dataDoMenu = new ziskejNastaveniMenuDefault();
    var menuNastaveni = dataDoMenu.getMenuNastaveni();

    return(menuNastaveni);

});

//export const dataMenuDoplnene = ((db) => { 
export const dataMenuDoplnene = ((dataZFrontendu, dataDefault) => { 

    console.log("dataMenuDoplnene");
    console.log(dataZFrontendu);
    console.log(dataDefault);

    var doplnDataDoMenu = new dataZFrontenduRozsirONodeElementPreview(dataZFrontendu, dataDefault);
    var JSONSlouceny = doplnDataDoMenu.getJSONSlouceny();

    return(JSONSlouceny);

});

