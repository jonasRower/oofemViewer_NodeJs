
class prenastavJSON{

    constructor(dataMenu, klic, hodnota){

        this.dataMenuJSON = dataMenu;
        this.klic = klic;
        this.hodnota = hodnota;

        //zmeni nastaveni Jsonu
        console.log("21");
        console.log(this.hodnota);
        this.dataMenuJSON = this.zmenHodnotuVJSONuDleKlice(this.dataMenuJSON, this.klic, this.hodnota);

    }

    getDataMenuJSON(){
        return(this.dataMenuJSON);
    }

    //zmeni nastaveni JSONu
    zmenHodnotuVJSONuDleKlice(dataMenuJSON, klicExp, hodnota){

        //zmeni jen tu hodnotu, toho klice, ktery nalezne
        for (var klic in dataMenuJSON) {

            if(klic == klicExp){
                dataMenuJSON[klic] = hodnota;
                console.log(dataMenuJSON[klic])
                console.log(hodnota)
            }

        }

        return(dataMenuJSON);

    }

}


export const prenastavMenu = ((dataMenu, klic, hodnota) => { 

    var noveNastaveni = new prenastavJSON(dataMenu, klic, hodnota);
    var dataMenuNew = noveNastaveni.getDataMenuJSON();

    return(dataMenuNew);

});