
// sem se posle menuNastaveni a zjistuje se o jaky se jedna case (kejz)
// v kazdem case jsou podminky, ktere, kdyz budo splneny, tan dany case se odesle
// a tim se obnovi (prekresli) menu


//obsahuje pouzer data - jednotlive podminky, za kterych se prepinaji jednotlive case
//po prepnuti na dany case se odeslou data na frontend a prekresli se menu
class moznostiData{

    static moznosti = {
        cases: [
                    {
                        //nikdy se nevybere
                        case: "case0",
                        conditions: {
                            selectPrePostSubmit: 'xxx',
                        }
                    },
                    {
                        case: "case1",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'Specify DOF',
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case2",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'All DOF',
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case3",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: 'TemperatureLoad',
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case4",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: 'TemperatureLoad',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case5",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'All DOF',
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case6",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'Specify DOF',
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case7",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'Specify DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case8",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'All DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case9",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'All DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case10",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'Specify DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case11",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'All DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case12",
                        conditions: {
                            selectPrePostSubmit: 'inputs',
                            selectLoadSubmit: ['ElementLoads', 'NodalLoads', 'ForcedDisplacement'],
                            specifyDOFSubmit: 'Specify DOF',
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case13",
                        conditions: {
                            selectPrePostSubmit: 'outputs',
                            selectResultsSubmit: ['LocalDisplacements', 'GlobalDisplacements', 'LocalForces', 'Reactions', 'NodalDisplacement'],
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case14",
                        conditions: {
                            selectPrePostSubmit: 'outputs',
                            selectResultsSubmit: ['LocalDisplacements', 'GlobalDisplacements', 'LocalForces', 'Reactions', 'NodalDisplacement'],
                            filterBySubmit: 'Element -> Node',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case15",
                        conditions: {
                            selectPrePostSubmit: 'outputs',
                            selectResultsSubmit: ['LocalDisplacements', 'GlobalDisplacements', 'LocalForces', 'Reactions', 'NodalDisplacement'],
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '-1'
                        }
                    },
                    {
                        case: "case16",
                        conditions: {
                            selectPrePostSubmit: 'outputs',
                            selectResultsSubmit: ['LocalDisplacements', 'GlobalDisplacements', 'LocalForces', 'Reactions', 'NodalDisplacement'],
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1'
                        }
                    },
                    {
                        case: "case17",
                        conditions: {
                            selectPrePostSubmit: 'outputs',
                            selectResultsSubmit: ['LocalDisplacements', 'GlobalDisplacements', 'LocalForces', 'Reactions', 'NodalDisplacement'],
                            filterBySubmit: 'Node -> Element',
                            selectNodePreviewSubmit: '<>-1',
                            selectElementPreviewSubmit: '<>-1'
                        }
                    }
                ]
    }
}



//moznost = 1:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "Specify DOF"
//4) "Element->Node"
//5) Element Previev = -1

//moznost = 2:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "All DOF"
//4) "Element->Node"
//5) Element Previev = -1

//moznost = 3:
//1) "inputs"
//2) "TemperatureLoads"
//3) "All DOF"
//4) "Element->Node"
//5) Element Previev = -1

//moznost = 4:
//1) "inputs"
//2) "TemperatureLoads"
//3) "Node -> Element"
//4) Node Previev = -1

//moznost = 5:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "All DOF"
//4) "Element->Node"
//5) Element Previev > -1

//moznost = 6:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "Specify DOF"
//4) "Element->Node"
//5) Element Previev > -1

//----------------------------

//moznost = 7:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "Specify DOF"
//4) "Node -> Element"
//5) Node Previev = -1

//moznost = 8:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "All DOF"
//4) "Node -> Element"
//5) Node Previev = -1

//moznost = 9:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "All DOF"
//4) "Node -> Element"
//5) Node Previev > -1

//moznost = 10:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "Specify DOF"
//4) "Node -> Element"
//5) Node Previev > -1

//moznost = 11:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "All DOF"
//4) "Node -> Element"
//5) Node Previev > -1
//6) Element Previev > -1

//moznost = 12:
//1) "inputs"
//2) "ElementLoads" nebo "NodalLoads" nebo "ForcedDisplacement"
//3) "Specify DOF"
//4) "Node -> Element"
//5) Node Previev > -1
//6) Element Previev > -1

//----------------------------

//moznost = 13:
//1) "outputs"
//2) "LocalDisplacements", "GlobalDisplacements", "LocalForces", "Reactions"
//3) "Element->Node"
//4) Element Previev = -1

//moznost = 14:
//1) "outputs"
//2) "LocalDisplacements", "GlobalDisplacements", "LocalForces", "Reactions"
//3) "Element->Node"
//4) Element Previev > -1

//moznost = 15:
//1) "outputs"
//2) "LocalDisplacements", "GlobalDisplacements", "LocalForces", "Reactions"
//3) "Element->Node"
//4) Node Previev = -1

//moznost = 16:
//1) "outputs"
//2) "LocalDisplacements", "GlobalDisplacements", "LocalForces", "Reactions"
//3) "Element->Node"
//4) Node Previev > -1


class JsonMenuData{

    constructor(moznost){

        var JSONMenu;
    
        switch (moznost) {
            case 0:
                JSONMenu = {
                    pocetElementu:  18,
                    elementP: [
                            {
                                        poradiElementu: 0,
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                            },
                            {
                                        poradiElementu: 2,
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                            },
                            {
                                        poradiElementu: 5,
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "inputsDOF"
                            },
                            {
                                        poradiElementu: 7,
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                            },
                            {
                                        poradiElementu: 9,
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                            },
                            {
                                        poradiElementu: 11,
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                            },
                            {
                                        poradiElementu: 13,
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: 15,
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: 17,
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                            }
                                                            
                                                            
                    ],
                                                            
                    elementSelect: [
                            {
                                        poradiElementu: 1,
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                "inputs",
                                                "outputs"
                                        ]
                            },
                            {
                                        poradiElementu: 3,
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "ElementLoads",
                                                "NodalLoads",
                                                "ForcedDisplacement",
                                                "TemperatureLoad"
                                        ]
                            },
                            {
                                        poradiElementu: 6,
                                        selectId: "selectDOFinputs",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "1",
                                                "3",
                                                "5"
                                        ]
                            },
                            {
                                        poradiElementu: 8,
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                "LocalDisplacements",
                                                "GlobalDisplacements",
                                                "LocalForces",
                                                "Reactions",
                                                "NodalDisplacement"
                                        ]
                            },
                            {
                                        poradiElementu: 10,
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                "1",
                                                "3",
                                                "5"
                                        ]
                            },
                            {
                                        poradiElementu: 12,
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                "1.00000000e+00",
                                                "2.00000000e+00",
                                                "3.00000000e+00"
                                        ]
                            },
                            {
                                        poradiElementu: 16,
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                            "-1",
                                            "0"
                                        ]
                            }
                                                            
                    ],
                                                            
                    elementForm: [
                            {
                                        poradiElementu: 4,
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                "All DOF",
                                                "Specify DOF"
                                        ]
                            },
                            {
                                        poradiElementu: 14,
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Element -> Node",
                                                "Node -> Element"
                                        ]
                            },
                            {
                                        poradiElementu: 18,
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                "Old algorithm",
                                                "New algorithm"
                                        ]
                            }
                    ]
                }
                break;
                
            //inputs-All-ElNo 
            case 1:
                JSONMenu = {				
                    pocetElementu:  18,			
                    elementP: [			
                        {		
                            poradiElementu:	"0",
                            pDescription:	"Preprocessor/Postprocessor",
                            pId:	"",
                            pClass:	""
                        },		
                        {		
                            poradiElementu:	"2",
                            pDescription:	"Type of Loads",
                            pId:	"",
                            pClass:	"inputs"
                        },		
                        {		
                            poradiElementu:	"5",
                            pDescription:	"Select DOF",
                            pId:	"",
                            pClass:	"inputsDOF"
                        },		
                        {		
                            poradiElementu:	"7",
                            pDescription:	"Filter by",
                            pId:	"",
                            pClass:	"elementPreview"
                        },		
                        {		
                            poradiElementu:	"9",
                            pDescription:	"Element Preview",
                            pId:	"",
                            pClass:	"elementPreview"
                        },		
                        {		
                            poradiElementu:	"11",
                            pDescription:	"Move Text",
                            pId:	"",
                            pClass:	"moveText"
                        }		
                    ],			
                                
                    elementSelect: [			
                        {		
                            poradiElementu:	"1",
                            selectId:	"selectPrePost",
                            selectClass:	"PrePost",
                            radkyOption:[	
                                "inputs",
                                "outputs"
                            ]	
                        },		
                        {		
                            poradiElementu:	"3",
                            selectId:	"selectLoad",
                            selectClass:	"inputs",
                            radkyOption: [
                                            "ElementLoads",
                                            "NodalLoads",
                                            "ForcedDisplacement",
                                            "TemperatureLoad"
                            ]
                        },		
                        {		
                            poradiElementu:	"6",
                            selectId:	"selectDOFinputs",
                            selectClass:	"inputs",
                            radkyOption:[	
                                "1",
                                "3",
                                "5"
                            ]	
                        },		
                        {		
                            poradiElementu:	"10",
                            selectId:	"selectElementPreview",
                            selectClass:	"elementPreview",
                            radkyOption:[	
                                "-1",
                                "0"
                            ]	
                        }		
                    ],			
                                
                    elementForm: [			
                        {		
                            poradiElementu:	"4",
                            formId:	"specifyDOF",
                            formClass:	"inputs",
                            radkyInput:[	
                                "All DOF",
                                "Specify DOF"
                            ]	
                        },		
                        {		
                            poradiElementu:	"8",
                            formId:	"filterBy",
                            formClass:	"elementPreview",
                            radkyInput:[	
                                "Element -> Node",
                                "Node -> Element"
                            ]	
                        },		
                        {		
                            poradiElementu:	"12",
                            formId:	"moveText",
                            formClass:	"moveText",
                            radkyInput:[	
                                "Old algorithm",
                                "New algorithm"
                            ]	
                        }		
                    ]			
                }				
                break;
    
    
            //inputs-specifyDOF-ElNo 
            case 2:    
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                            {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                            },
                            {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                            },
                            {
                                        poradiElementu: "5",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "7",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "9",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                            }
                    ],
                                                            
                    elementSelect:  [
                            {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                "inputs",
                                                "outputs"
                                        ]
                            },
                            {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                            "ElementLoads",
                                            "NodalLoads",
                                            "ForcedDisplacement",
                                            "TemperatureLoad"
                                        ]
                            },
                            {
                                        poradiElementu: "8",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                            "-1",
                                            "0"
                                        ]
                            }
                    ],
                                                            
                    elementForm:  [
                            {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                "All DOF",
                                                "Specify DOF"
                                        ]
                            },
                            {
                                        poradiElementu: "6",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Element -> Node",
                                                "Node -> Element"
                                        ]
                            },
                            {
                                        poradiElementu: "10",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                "Old algorithm",
                                                "New algorithm"
                                        ]
                            }
                    ]
                }
                break;
    
    
            //inputs(Temperature Loads)-specifyDOF-ElNo 
            case 3:    
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                            {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                            },
                            {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                            },
                            {
                                        poradiElementu: "4",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "6",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "8",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                            }
                    ],
                                                            
                    elementSelect:  [
                            {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                "inputs",
                                                "outputs"
                                        ]
                            },
                            {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "ElementLoads",
                                                "NodalLoads",
                                                "ForcedDisplacement",
                                                "TemperatureLoad"
                                        ]
                            },
                            {
                                        poradiElementu: "7",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                            "-1",
                                            "0"
                                        ]
                            }
                    ],
                                                            
                    elementForm:  [
                            {
                                        poradiElementu: "5",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Element -> Node",
                                                "Node -> Element"
                                        ]
                            },
                            {
                                        poradiElementu: "9",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                "Old algorithm",
                                                "New algorithm"
                                        ]
                            }
                    ]
                }
                break;
    
    
            case 4:    
            JSONMenu = {
                pocetElementu:   18,
                elementP:  [
                          {
                                    poradiElementu: "0",
                                    pDescription: "Preprocessor/Postprocessor",
                                    pId: "",
                                    pClass: ""
                          },
                          {
                                    poradiElementu: "2",
                                    pDescription: "Type of Loads",
                                    pId: "",
                                    pClass: "inputs"
                          },
                          {
                                    poradiElementu: "4",
                                    pDescription: "Filter by",
                                    pId: "",
                                    pClass: "elementPreview"
                          },
                          {
                                    poradiElementu: "6",
                                    pDescription: "Node Preview",
                                    pId: "",
                                    pClass: "elementPreview"
                          },
                          {
                                    poradiElementu: "8",
                                    pDescription: "Move Text",
                                    pId: "",
                                    pClass: "moveText"
                          }
                ],
                                                        
                elementSelect:  [
                          {
                                    poradiElementu: "1",
                                    selectId: "selectPrePost",
                                    selectClass: "PrePost",
                                    radkyOption: [
                                              "inputs",
                                              "outputs"
                                    ]
                          },
                          {
                                    poradiElementu: "3",
                                    selectId: "selectLoad",
                                    selectClass: "inputs",
                                    radkyOption: [
                                              "ElementLoads",
                                              "NodalLoads",
                                              "ForcedDisplacement",
                                              "TemperatureLoad"
                                    ]
                          },
                          {
                                    poradiElementu: "7",
                                    selectId: "selectNodePreview",
                                    selectClass: "elementPreview",
                                    radkyOption: [
                                              "-1",
                                              "0"
                                    ]
                          }
                ],
                                                        
                elementForm:  [
                                {
                                    poradiElementu: "5",
                                    formId: "filterBy",
                                    formClass: "elementPreview",
                                    radkyInput: [
                                              "Element -> Node",
                                              "Node -> Element"
                                    ]
                                },
                                {
                                    poradiElementu: "9",
                                    formId: "moveText",
                                    formClass: "moveText",
                                    radkyInput: [
                                              "Old algorithm",
                                              "New algorithm"
                                    ]
                                }
                            ]
                }
                break;
    
            case 5:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "5",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "7",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "8",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "6",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "9",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 6:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "5",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "inputsDOF"
                              },
                              {
                                        poradiElementu: "7",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "9",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "14",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "6",
                                        selectId: "selectDOFinputs",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "10",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "8",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "15",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 7:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                            {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                            },
                            {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                            },
                            {
                                        poradiElementu: "5",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "inputsDOF"
                            },
                            {
                                        poradiElementu: "7",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "9",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "11",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                            }
                    ],
                                                            
                    elementSelect:  [
                            {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                "inputs",
                                                "outputs"
                                        ]
                            },
                            {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "ElementLoads",
                                                "NodalLoads",
                                                "ForcedDisplacement",
                                                "TemperatureLoad"
                                        ]
                            },
                            {
                                        poradiElementu: "6",
                                        selectId: "selectDOFinputs",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "1",
                                                "3",
                                                "5"
                                        ]
                            },
                            {
                                        poradiElementu: "10",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                "-1",
                                                "0"
                                        ]
                            }
                    ],
                                                            
                    elementForm:  [
                            {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                "All DOF",
                                                "Specify DOF"
                                        ]
                            },
                            {
                                        poradiElementu: "8",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Element -> Node",
                                                "Node -> Element"
                                        ]
                            },
                            {
                                        poradiElementu: "12",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                "Old algorithm",
                                                "New algorithm"
                                        ]
                            }
                    ]
                }
                break;
    
            case 8:    
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "5",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "7",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "9",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "8",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "6",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "10",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 9:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "5",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "7",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "9",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "11",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "8",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "10",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "6",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "12",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 10:                                                 
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                            {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                            },
                            {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                            },
                            {
                                        poradiElementu: "6",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "8",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "10",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                            },
                            {
                                        poradiElementu: "13",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                            }
                    ],
                                                            
                    elementSelect:  [
                            {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                "inputs",
                                                "outputs"
                                        ]
                            },
                            {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "ElementLoads",
                                                "NodalLoads",
                                                "ForcedDisplacement",
                                                "TemperatureLoad"
                                        ]
                            },
                            {
                                        poradiElementu: "5",
                                        selectId: "selectDOFinputs",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                "1",
                                                "3",
                                                "5"
                                        ]
                            },
                            {
                                        poradiElementu: "9",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                "-1",
                                                "0"
                                        ]
                            },
                            {
                                        poradiElementu: "11",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                "-1",
                                                "0"
                                        ]
                            }
                    ],
                                                            
                    elementForm:  [
                            {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                "All DOF",
                                                "Specify DOF"
                                        ]
                            },
                            {
                                        poradiElementu: "7",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Element -> Node",
                                                "Node -> Element"
                                        ]
                            },
                            {
                                        poradiElementu: "12",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                "Number of nodes",
                                                "Values"
                                        ]
                            },
                            {
                                        poradiElementu: "14",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                "Old algorithm",
                                                "New algorithm"
                                        ]
                                }
                    ]
                }
                break;
    
            case 11:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "5",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "7",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "9",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "8",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "10",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "6",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 12:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Loads",
                                        pId: "",
                                        pClass: "inputs"
                              },
                              {
                                        poradiElementu: "6",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "8",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "13",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectLoad",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "ElementLoads",
                                                  "NodalLoads",
                                                  "ForcedDisplacement",
                                                  "TemperatureLoad"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOFinputs",
                                        selectClass: "inputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "9",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "4",
                                        formId: "specifyDOF",
                                        formClass: "inputs",
                                        radkyInput: [
                                                  "All DOF",
                                                  "Specify DOF"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "12",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "14",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 13:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                                    {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                                    },
                                    {     
                                        poradiElementu: "2",
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                                    },
                                    {
                                        poradiElementu: "4",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                                    },
                                    {
                                        poradiElementu: "6",
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                                    },
                                    {
                                        poradiElementu: "8",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                                    },
                                    {
                                        poradiElementu: "10",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                                    },
                                    {
                                        poradiElementu: "13",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                                    }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "LocalDisplacements",
                                                  "GlobalDisplacements",
                                                  "LocalForces",
                                                  "Reactions",
                                                  "NodalDisplacement"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1.00000000e+00",
                                                  "2.00000000e+00",
                                                  "3.00000000e+00"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "9",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "12",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "14",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 14:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "4",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "6",
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "8",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "13",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "15",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "LocalDisplacements",
                                                  "GlobalDisplacements",
                                                  "LocalForces",
                                                  "Reactions",
                                                  "NodalDisplacement"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1.00000000e+00",
                                                  "2.00000000e+00",
                                                  "3.00000000e+00"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "14",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "9",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "12",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "16",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                } 
                break;
                
            case 15:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "4",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "6",
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "8",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "LocalDisplacements",
                                                  "GlobalDisplacements",
                                                  "LocalForces",
                                                  "Reactions",
                                                  "NodalDisplacement"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1.00000000e+00",
                                                  "2.00000000e+00",
                                                  "3.00000000e+00"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "9",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
    
            case 16:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "4",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "6",
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "8",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "9",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "LocalDisplacements",
                                                  "GlobalDisplacements",
                                                  "LocalForces",
                                                  "Reactions",
                                                  "NodalDisplacement"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1.00000000e+00",
                                                  "2.00000000e+00",
                                                  "3.00000000e+00"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "10",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "9",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
          
            case 17:
                JSONMenu = {
                    pocetElementu:   18,
                    elementP:  [
                              {
                                        poradiElementu: "0",
                                        pDescription: "Preprocessor/Postprocessor",
                                        pId: "",
                                        pClass: ""
                              },
                              {
                                        poradiElementu: "2",
                                        pDescription: "Type of Results",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "4",
                                        pDescription: "Select DOF",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "6",
                                        pDescription: "Select OFT",
                                        pId: "",
                                        pClass: "outputs"
                              },
                              {
                                        poradiElementu: "8",
                                        pDescription: "Filter by",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "10",
                                        pDescription: "Node Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "12",
                                        pDescription: "Element Preview",
                                        pId: "",
                                        pClass: "elementPreview"
                              },
                              {
                                        poradiElementu: "15",
                                        pDescription: "Move Text",
                                        pId: "",
                                        pClass: "moveText"
                              }
                    ],
                                                            
                    elementSelect:  [
                              {
                                        poradiElementu: "1",
                                        selectId: "selectPrePost",
                                        selectClass: "PrePost",
                                        radkyOption: [
                                                  "inputs",
                                                  "outputs"
                                        ]
                              },
                              {
                                        poradiElementu: "3",
                                        selectId: "selectResults",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "LocalDisplacements",
                                                  "GlobalDisplacements",
                                                  "LocalForces",
                                                  "Reactions",
                                                  "NodalDisplacement"
                                        ]
                              },
                              {
                                        poradiElementu: "5",
                                        selectId: "selectDOF",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1",
                                                  "3",
                                                  "5"
                                        ]
                              },
                              {
                                        poradiElementu: "7",
                                        selectId: "selectOFT",
                                        selectClass: "outputs",
                                        radkyOption: [
                                                  "1.00000000e+00",
                                                  "2.00000000e+00",
                                                  "3.00000000e+00"
                                        ]
                              },
                              {
                                        poradiElementu: "11",
                                        selectId: "selectNodePreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              },
                              {
                                        poradiElementu: "13",
                                        selectId: "selectElementPreview",
                                        selectClass: "elementPreview",
                                        radkyOption: [
                                                  "-1",
                                                  "0"
                                        ]
                              }
                    ],
                                                            
                    elementForm:  [
                              {
                                        poradiElementu: "9",
                                        formId: "filterBy",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Element -> Node",
                                                  "Node -> Element"
                                        ]
                              },
                              {
                                        poradiElementu: "14",
                                        formId: "numberValues",
                                        formClass: "elementPreview",
                                        radkyInput: [
                                                  "Number of nodes",
                                                  "Values"
                                        ]
                              },
                              {
                                        poradiElementu: "16",
                                        formId: "moveText",
                                        formClass: "moveText",
                                        radkyInput: [
                                                  "Old algorithm",
                                                  "New algorithm"
                                        ]
                              }
                    ]
                }
                break;
            }
            
            this.JSONMenu = JSONMenu;
    }


    getJSONMenu(){
        return(this.JSONMenu);
    }

}




//zde je kod, ktery detekuje ktery case ma byt vybrán
class rozpoznejMoznost{

    constructor(menuNastaveni){
        this.indexCase = this.vratIndexCase(menuNastaveni);
    }


    getIndexCase(){
        return(this.indexCase);
    }


    vratIndexCase(menuNastaveni){

        var indexCaseNalezen;
        var pocetCases = 17;
        var indexCaseNalezeny;

        for (var indexCase = 0; indexCase < pocetCases; indexCase++) {
            indexCaseNalezen = this.detekujZdaIndexCaseObsahujeKlicHodnotu(indexCase, menuNastaveni)
            if(indexCaseNalezen == true){
                indexCaseNalezeny = indexCase;

                break;
            }
        }

        return(indexCaseNalezeny);
    }


    proverZdaKlicHodnotaJeVmenuNastaveni(klicHodnotaStr, menuNastaveni){

        var objektObsahujeKlicHodnotu;
        var menuNastaveniStr;
        var indInStr;
        
        menuNastaveniStr = JSON.stringify(menuNastaveni); 
        indInStr = menuNastaveniStr.indexOf(klicHodnotaStr);

        if(indInStr > -1){
            objektObsahujeKlicHodnotu = true
        }
        else {
            objektObsahujeKlicHodnotu = false
        }

        return(objektObsahujeKlicHodnotu);

    }


    detekujZdaIndexCaseObsahujeKlicHodnotu(indexCase, menuNastaveni){

        var moznostiObj;
        var moznostCase;
        var klic;
        var hodnota;
        var hodnota1;
        var klicHodnotaStr;
        var objektObsahujeKlicHodnotu;
        var indexCaseNalezen;
        var ocekavanaShoda = true;
        var jeToPole;
        var i;

        moznostiObj = moznostiData.moznosti;
        moznostCase = moznostiObj.cases[indexCase].conditions;
        indexCaseNalezen = true;


        i = 0;
        for(var key in moznostCase){
            klic = key;
            hodnota = this.vratMensiVetsiHodnotu(klic, moznostCase[key], menuNastaveni);
            hodnota1 = moznostCase[key];
            jeToPole = Array.isArray(hodnota);

            if(jeToPole == true){
                objektObsahujeKlicHodnotu = this.testujHodnotuJakoPole(klic, hodnota, menuNastaveni)
            
            }
            else{
                klicHodnotaStr = '"' + klic + '":"' + hodnota + '"';
                objektObsahujeKlicHodnotu = this.proverZdaKlicHodnotaJeVmenuNastaveni(klicHodnotaStr, menuNastaveni)    
           
           
            }


            if(objektObsahujeKlicHodnotu != ocekavanaShoda){
                indexCaseNalezen = false;
                break;
            }
            i = i + 1;

        }

        return(indexCaseNalezen);

    }


    //vraci true/false pokud hodnota je napr. [ElementLoads, NodalLoads, ForcedDisplacement]
    testujHodnotuJakoPole(klic, hodnotaPole, menuNastaveni){

        var hodnotaPoleNalezena;
        var hodnotaNalezena;
        var klicHodnotaStr;
        var hodnota;
        var i;

        hodnotaNalezena = false;

        for (var i = 0; i < hodnotaPole.length; i++) {
            hodnota = hodnotaPole[i];
            klicHodnotaStr = '"' + klic + '":"' + hodnota + '"';
            hodnotaPoleNalezena = this.proverZdaKlicHodnotaJeVmenuNastaveni(klicHodnotaStr, menuNastaveni);
            if(hodnotaPoleNalezena == true){
                hodnotaNalezena = true;
                break;
            }
        }

        return(hodnotaNalezena);

    }


    //pokud hodnota = "<>-1", pak vraci skutecne nalezenou hodnotu, ktera je <>-1
    //cimz dojde pravdepodobne do shody
    vratMensiVetsiHodnotu(klic, hodnota, menuNastaveni){

        var indMensiVetsi;
        var hodnotaSkut;
        var hodnotaNavrat;
        var hodnotaBezVetsiMensi;

        hodnotaNavrat = hodnota;


        indMensiVetsi = hodnota.indexOf("<>");
        if(indMensiVetsi > -1) {
            hodnotaSkut = menuNastaveni[klic];
            hodnotaBezVetsiMensi = hodnota.replace("<>", "");
            if(hodnotaSkut != hodnotaBezVetsiMensi){
                hodnotaNavrat = hodnotaSkut;
            }
        }


        return(hodnotaNavrat);
    }

}


class vyhledejPrislusnaData{

    constructor(dataPreviewMenu, ElementNode, cisloExp){

        this.dataPreviewMenu = dataPreviewMenu;
        this.obsahCombo = this.vratObsahCombo(ElementNode, cisloExp);


        this.obsahCombo = this.vratObsahCombo(ElementNode, cisloExp);
    }


    //vrati obsah comboboxu
    getObsahCombo(){
        return(this.obsahCombo);
    }


    vratObsahCombo(ElementNode, cisloExp){

        var obsahCombo;

        var vyhledavejVDatech = this.detekujZdaHledatNodeNeboElement(ElementNode);
        
        //pokud je "cisloExp = -1" , pak vraci vsechny polozky
        if(cisloExp == -1){
            obsahCombo = this.vratVsechnyPolozky(vyhledavejVDatech);
        }

        else {  //jinak vraci prislusna data
            console.log("cisloExp");
            console.log(cisloExp);

            var indexPole = this.vratIndexPole(vyhledavejVDatech, cisloExp);

            if(ElementNode == "cisloNode"){
                obsahCombo = vyhledavejVDatech[indexPole].cislaElementu;
            }

            if(ElementNode == "cisloElement"){
                console.log("cisloElement");
                console.log(indexPole);
                console.log(vyhledavejVDatech);
                obsahCombo = vyhledavejVDatech[indexPole].cislaNode;
            }

        }
        
        return(obsahCombo);

    }


    vratVsechnyPolozky(vyhledavejVDatech){

        var vsechnyComba = [];

        for (var i in vyhledavejVDatech) {

            var dvojiceRadek = vyhledavejVDatech[i];
            var obsahCombo = Object.values(dvojiceRadek)[1];

            vsechnyComba = vsechnyComba.concat(obsahCombo);
            
        }

        // jedinecne polozky:
        var vsechnypolozky = this.toUniqueArray(vsechnyComba);

        //setridi polozky dle velikosti
        vsechnypolozky = this.sortArray(vsechnypolozky);
        

        //vrati data
        return(vsechnypolozky);

    }



    vratIndexPole(vyhledavejVDatech, cisloExp){

        var indexPole = -1;
        
        for (var i in vyhledavejVDatech) {

            var dvojiceRadek = vyhledavejVDatech[i];
            var cislo = Object.values(dvojiceRadek)[0];

            if(cislo == cisloExp){
                indexPole = i;
                break;
            }
            
        }

        return(indexPole);

    }


    detekujZdaHledatNodeNeboElement(ElementNode){

        var vyhledvajVDatech; 


        if(ElementNode == "cisloNode"){
            vyhledvajVDatech = this.dataPreviewMenu.previewElementy.elementPreview;
        }
        
        if(ElementNode == "cisloElement"){
            vyhledvajVDatech = this.dataPreviewMenu.previewNodes.nodePreview;
        }

        //console.log("!!!!!!!!!!!");
        //vyhledvajVDatech = this.dataPreviewMenu.previewElementy.nodePreview;
        //console.log(vyhledvajVDatech);

        return(vyhledvajVDatech);

    }


    toUniqueArray(a){
        var newArr = [];
        for (var i = 0; i < a.length; i++) {
            if (newArr.indexOf(a[i]) === -1) {
                newArr.push(a[i]);
            }
        }
      return newArr;
    }


    sortArray(pole){
        pole.sort(function(a, b) {
            return a - b;
        });
        return(pole);
    }
      
}


//ziskava data ohledne comboboxu
class comboboxyMenu{

    constructor(menuNastaveni, dataPreview, JSONMenu){

        //nastavi vychozi Element Preview
        console.log("menuNastaveni");
        console.log(menuNastaveni);

        var poradiElementNode = this.vratPoradiElementNodePreview(JSONMenu);
        console.log(poradiElementNode);



        //urcuje, zda se jedna o defaultni nastaveni
        var jednaSeOdefaultniNastaveni = this.detekujZdaSeednaODefaultniNastaveni(poradiElementNode);
       
        if(menuNastaveni != undefined){
            var aktualniNastaveniProZmenuComba = this.vratAktualniNastaveniProZmenuComba(menuNastaveni);
            console.log(aktualniNastaveniProZmenuComba);
        }    

        //nastavuje defaultni nastaveni comboboxu , tj. stav, kdy jeden combobox je skryt
        if(jednaSeOdefaultniNastaveni == true) {
            if(poradiElementNode.poradiElementPreview > -1){
                var elementNode = "cisloElement";
                var selectPreview = "selectElementPreview";

                console.log("AAAA");

                var radkyKNahrazeni = this.vratVychoziNastaveniComboboxu(dataPreview, elementNode);
                this.vratSpravnyElementForm(JSONMenu, selectPreview, radkyKNahrazeni);
            }
            
            if(poradiElementNode.poradiNodePreview > -1){    
                var elementNode = "cisloNode";
                var selectPreview = "selectNodePreview";

                console.log("BBB");

                var radkyKNahrazeni = this.vratVychoziNastaveniComboboxu(dataPreview, elementNode);
                this.vratSpravnyElementForm(JSONMenu, selectPreview, radkyKNahrazeni);
            }
        }
        
        else {
            var aktualniNastaveniProZmenuComba = this.vratAktualniNastaveniProZmenuComba(menuNastaveni);
            
            console.log(aktualniNastaveniProZmenuComba);
            var cislo;
            var elementNode;
            var selectPreview;
            var radkyKNahrazeni;

            //standartni combo - tj. combo, jehoz moznosti se zobrazuji na zaklade 2. comba
            cislo = aktualniNastaveniProZmenuComba.vybranaPolozkaCombo;
            elementNode = aktualniNastaveniProZmenuComba.elementNodeStandart;       //vybrana polozka node/element
            selectPreview = aktualniNastaveniProZmenuComba.selectPreviewStandart;   //data, ktera se maji menit
           
            radkyKNahrazeni = this.vratStandartniNastaveniComboboxu(dataPreview, elementNode, cislo)
            this.vratSpravnyElementForm(JSONMenu, selectPreview, radkyKNahrazeni);
        
            //defaultni combo - t. combo, kde se zobrazuji vsechny moznosti
            elementNode = aktualniNastaveniProZmenuComba.elementNodeDefault;
            selectPreview = aktualniNastaveniProZmenuComba.selectPreviewDefault;

            radkyKNahrazeni = this.vratVychoziNastaveniComboboxu(dataPreview, elementNode, -1)
            this.vratSpravnyElementForm(JSONMenu, selectPreview, radkyKNahrazeni);

        }

        //pokud se o defaltni nastaveni nejedna,
        //vratStandartniNastaveniComboboxu

    }

    vratAktualniNastaveniProZmenuComba(menuNastaveni){

        var filterBySubmit = menuNastaveni.filterBySubmit;
        var vybranaPolozkaCombo;
        var elementNodeStandart;
        var selectPreviewStandart;
        var elementNodeDefault;
        var selectPreviewDefault;


        if(filterBySubmit == "Node -> Element"){
            vybranaPolozkaCombo = menuNastaveni.selectNodePreviewSubmit;
            elementNodeStandart = "cisloElement";
            selectPreviewStandart = "selectElementPreview";
            elementNodeDefault = "cisloNode";
            selectPreviewDefault = "selectNodePreview";
        }
        if(filterBySubmit == "Element -> Node"){
            vybranaPolozkaCombo = menuNastaveni.selectElementPreviewSubmit;
            elementNodeStandart = "cisloNode";
            selectPreviewStandart = "selectNodePreview";
            elementNodeDefault = "cisloElement";
            selectPreviewDefault = "selectElementPreview";
        }    

        var aktualniNastaveniProZmenuComba = {
            vybranaPolozkaCombo: vybranaPolozkaCombo,
            elementNodeStandart: elementNodeStandart,
            selectPreviewStandart: selectPreviewStandart,
            elementNodeDefault: elementNodeDefault,
            selectPreviewDefault: selectPreviewDefault
        }

        return(aktualniNastaveniProZmenuComba);

    }



    //pokud je ElementPreview nebo NodePreview skryt, pak se vyvolava defaultni nastaveni
    detekujZdaSeednaODefaultniNastaveni(poradiElementNode){

        var jednaSeOdefaultniNastaveni = false;

        if(poradiElementNode.poradiNodePreview == -1){
            jednaSeOdefaultniNastaveni = true;
        }
        if(poradiElementNode.poradiElementPreview == -1){
            jednaSeOdefaultniNastaveni = true;
        }

        return(jednaSeOdefaultniNastaveni);

    }


    //vraci "true" pokud je vybran Element -> Node
    //vraci "false" pokud je vybran Node -> Element
    //pokud je menuNastaveni == undefined, pak vraci true (jelikoz se nastavi Element -> Node)
    detekujZdaJeVybranElementNode(menuNastaveni){

        var vyber;
        if(menuNastaveni == undefined){
            vyber = true;
        }
        else {
            if(menuNastaveni.filterBySubmit == "Element -> Node"){
                vyber = true;
            }
            else {
                vyber = false;
            }
        }

        return(vyber);

    }


    vratVychoziNastaveniComboboxu(dataPreview, elementNode){

        var vsechnyData = new vyhledejPrislusnaData(dataPreview, elementNode, -1);
        //var vsechnyData = new vyhledejPrislusnaData(dataPreview, elementNode, 110);
        var dataKNahrazeni = vsechnyData.getObsahCombo();
        dataKNahrazeni = this.vratDopisDoComboboxuMinusJedna(dataKNahrazeni);
        console.log("dataKNahrazeni");
        console.log(dataKNahrazeni);

        return(dataKNahrazeni);

    }


    vratStandartniNastaveniComboboxu(dataPreview, elementNode, cislo){
        var dataDleCisla = new vyhledejPrislusnaData(dataPreview, elementNode, cislo);
        var dataKNahrazeni = dataDleCisla.getObsahCombo();
        dataKNahrazeni = this.vratDopisDoComboboxuMinusJedna(dataKNahrazeni);

        return(dataKNahrazeni);
    }


    vratDopisDoComboboxuMinusJedna(dataComboboxuOrig){

        var i;
        var polozka;
        var dataComboboxuNew = [];

        //vlozi prvni hodnotu (-1)
        dataComboboxuNew.push(-1);
        
        for (var i = 0; i < dataComboboxuOrig.length; i++) {
            polozka = dataComboboxuOrig[i];
            dataComboboxuNew.push(polozka);
        }


        return(dataComboboxuNew);

    }


    vratComboNodeNeboElement(elementNode, menuNastaveni, dataPreview){

        var cislo;
        if(elementNode == "cisloNode"){
            cislo = menuNastaveni.selectNodePreviewSubmit;
        }
        if(elementNode == "cisloElement"){
            cislo = menuNastaveni.selectElementPreviewSubmit;
        }

        var vyhledavej = new vyhledejPrislusnaData(dataPreview, elementNode, cislo);
        var obsahCombo = vyhledavej.getObsahCombo();

        return(obsahCombo);

    }


    //vrati poradi jak Element tak Node Preview
    vratPoradiElementNodePreview(JSONMenu){

        var poradiElementPreview;
        var poradiNodePreview;
        var poradiElementNode;

        poradiElementPreview = this.vratPoradiPodleSelectId(JSONMenu, "selectElementPreview");
        poradiNodePreview = this.vratPoradiPodleSelectId(JSONMenu, "selectNodePreview");

        poradiElementNode = {
            poradiElementPreview: poradiElementPreview,
            poradiNodePreview: poradiNodePreview
        }

        return(poradiElementNode);

    }



    vratSpravnyElementForm(JSONMenu, selectIdExp, radkyKNahrazeni){

        var poradi = this.vratPoradiPodleSelectId(JSONMenu, selectIdExp);
     
        if(poradi > -1){
            var elementSelect = JSONMenu.elementSelect[poradi];

            //nahradi radky radkami novymi
            this.nahradRadkyOption(elementSelect, radkyKNahrazeni);
    
            //prepise data nalezeneho poradi
            JSONMenu.elementSelect[poradi] = elementSelect;
        }    

        return(JSONMenu);

    }

  
    vratPoradiPodleSelectId(JSONMenu, selectIdExp){

        var poradi = -1;
        
        for (var i = 0; i < JSONMenu.elementSelect.length; i++) {
            var selectId = JSONMenu.elementSelect[i].selectId;
            //console.log(JSONMenu.elementSelect[i]);
            if(selectId == selectIdExp){
                poradi = i
                break;
            }
        }

        return(poradi);

    }

    //nahradi radky option
    nahradRadkyOption(elementSelect, radkyKNahrazeni){

        elementSelect.radkyOption = radkyKNahrazeni;

    }

}



export const elementyMenu = ((reqSubmit, menuNastaveni, dataPreview) => {

    let JSONMenu;
    let moznost;

    console.log("menuNastaveni");

    //predelat pres moduly, je to prasarna
    //ono se to jiz meni v "nastaveniMenu.js", ale pravdepodobne "menuNastaveni" obsahuji data pred zmenou
    if(typeof reqSubmit === 'object'){
        
        //zmeni hodnotu klice
        var klic = reqSubmit.inputId + "Submit";

        //prepise hodnotu
        menuNastaveni[klic] = reqSubmit.inputValue;

        var rozpoznejNastaveni = new rozpoznejMoznost(menuNastaveni)
        moznost = rozpoznejNastaveni.getIndexCase();

    }    
   

    if(moznost == undefined){
        moznost = 1;
    }
    
    //zjisti JSONMoznost v jine tride
    var JSONMenuCl = new JsonMenuData(moznost);
    JSONMenu = JSONMenuCl.getJSONMenu();

    //ziska a zmeni obsah comboboxu
    var comboboxyPreview = new comboboxyMenu(menuNastaveni, dataPreview, JSONMenu);



    return(JSONMenu);

});