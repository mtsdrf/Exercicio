
var result = {
    "teste":[
        {"Idade":"10","Doces":"7"},
        {"Idade":"12","Doces":"1"},
        {"Idade":"17","Doces":"2"},
        {"Idade":"19","Doces":"5"},
        {"Idade":"22","Doces":"1"},
        {"Idade":"28","Doces":"3"}
    ],
    "teste2":[
        {"Idade":"10","Salgados":"7"},
        {"Idade":"12","Salgados":"1"},
        {"Idade":"17","Salgados":"2"},
        {"Idade":"19","Salgados":"5"},
        {"Idade":"22","Salgados":"1"},
        {"Idade":"28","Salgados":"3"}
    ]
};

function retornarValor( json, option){
    json = json.toString();
    option = option.toString();
    if(result[json]){
        var retorno = new Array();
        for (var i = 0; i < result[json].length; i++) {
            retorno[i] = result[json][i][option];
        }
        return retorno;
    }else{
        return "Parâmetros Inválidos";
    }
};

function getRetornarValor(){
    alert(retornarValor($("#param1").val(), $("#param2").val()));
}