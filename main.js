
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

function retornarValores(json1, option1, json2, option2){
    json1 = json1.toString();
    json2 = json2.toString();
    option1 = option1.toString();
    option2 = option2.toString();
    if (result[json1] && result[json2]) {
        var retorno = new Array();
        for (var i = 0; i < result[json1].length; i++) {
            retorno[i] = [result[json1][i][option1], result[json2][i][option2]];
        }
        return retorno;
    } else {
        return "Parâmetros Inválidos";
    }
}

function getRetornarValor(){
    alert(retornarValor($("#param1").val(), $("#param2").val()));
}

function getRetornarValores(){
    alert(retornarValores($("#param3").val(), $("#param4").val(), $("#param5").val(), $("#param6").val()));
}

