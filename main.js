
var result = [
    teste = [
        {"Idade":"10","Doces":"7"},
        {"Idade":"12","Doces":"1"},
        {"Idade":"17","Doces":"2"},
        {"Idade":"19","Doces":"5"},
        {"Idade":"22","Doces":"1"},
        {"Idade":"28","Doces":"3"}
    ],
    teste2 = [
        {"Idade":"10","Salgados":"7"},
        {"Idade":"12","Salgados":"1"},
        {"Idade":"17","Salgados":"2"},
        {"Idade":"19","Salgados":"5"},
        {"Idade":"22","Salgados":"1"},
        {"Idade":"28","Salgados":"3"}
    ]
];

function retornarValor( array, option){
    if (array == "teste" && option == "Doces"){
        var retorno = new Array();
        for (var i = 0; i < result[0].length; i++) {
            retorno[i] = result[0][i].Doces;
        }
        return retorno;
    }
    else if (array == "teste2" && option == "Idade"){
        var retorno = new Array();
        for (var i = 0; i < result[1].length; i++) {
            retorno[i] = result[1][i].Idade;
        }
        return retorno;
    }
    else{
        return "Parâmetros Inválidos";
    }
};

function retornarValores([[teste2, Idade], [teste, Doces]]){
    var retorno = new Array();
    for (var i = 0; i < result[1].length; i++) {
        retorno[i] = [result[1][i].Idade, result[0][i].Doces];
    }
    return retorno;
}

function getRetornarValor(){
    alert(retornarValor($("#param1").val(), $("#param2").val()));
}

function getRetornarValores(){
    alert(retornarValores([['teste2', 'Idade'], ['teste', 'Doces']]));
}