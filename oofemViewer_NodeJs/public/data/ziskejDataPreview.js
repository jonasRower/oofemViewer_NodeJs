
class nactiPreview{

    constructor(){

        //ziska JSONy pro preview elemenu a nodes
        this.previewElementy = this.ziskejElementyPreview();
        this.previewNodes = this.ziskejNodePreview();

        //slouci JSON pro predani dat
        this.previewJSOn = this.ziskejPreviewJSON(this.previewElementy, this.previewNodes)

    }

    getPreview(){
        return(this.previewJSOn);
    }


    //ziska JSON pro predani dat
    ziskejPreviewJSON(previewElementy, previewNodes){

        var previewJSOn = {

            previewElementy: previewElementy,
            previewNodes: previewNodes

        }

        return(previewJSOn);

    }



    //zatim ma nastavene na tvrdo, pozdeji bude ziskavat z dat pro vykreslovani
    ziskejElementyPreview(){

        var previewElementy = {

            elementPreview:[ 
                        {
                            cisloNode: 10,
                            cislaElementu: [1, 3, 5]      
                        },
                        {
                            cisloNode: 20,
                            cislaElementu: [7, 2, 4]   
                        },
                        {
                            cisloNode: 30,
                            cislaElementu: [6, 2]   
                        },
                        {
                            cisloNode: 50,
                            cislaElementu: [8, 5, 11, 7]   
                        },
                        {
                            cisloNode: 70,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 20,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 40,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 60,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 80,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 110,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        },
                        {
                            cisloNode: 90,
                            cislaElementu: [3, 6, 7, 8, 9]   
                        }
                    ]
            }   


        return(previewElementy);

    }


    ziskejNodePreview(){

        var previewNodes = {

            nodePreview:[ 
                        {
                            cisloElement: 1,
                            cislaNode: [10, 30, 50]      
                        },
                        {
                            cisloElement: 2,
                            cislaNode: [70, 20, 40]   
                        },
                        {
                            cisloElement: 3,
                            cislaNode: [60, 20]   
                        },
                        {
                            cisloNode: 5,
                            cislaElementu: [80, 50, 110, 70]   
                        },
                        {
                            cisloNode: 7,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        },
                        {
                            cisloNode: 4,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        },
                        {
                            cisloNode: 6,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        },
                        {
                            cisloNode: 8,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        },
                        {
                            cisloNode: 11,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        },
                        {
                            cisloNode: 9,
                            cislaElementu: [30, 60, 70, 80, 90]   
                        }

                    ]
            }

        return(previewNodes);

    }
}



//exportuje preview s elementy
export const dataPreviewMenu = ((db) => {

    //inicializujhe tridu
    var previewElementyClass = new nactiPreview();

    var preview = previewElementyClass.getPreview();
    return(preview);

});