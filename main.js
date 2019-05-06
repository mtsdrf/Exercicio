
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

function retornarValor(json, option){
    //Converte parametros para string
    json = json.toString();
    option = option.toString();
    //Verifica se existe o objeto passado como parâmetro 
    if(result[json]){
        //Cria o array retorno
        let retorno = new Array();
        //Laço para preencher o array com os resultados da busca
        for (let i = 0; i < result[json].length; i++) {
            retorno[i] = result[json][i][option];
        }
        //Retorno
        return retorno;
    }
    //Retorno caso os parâmetros sejam invalidos
    else{
        return "Parâmetros Inválidos";
    }
};

function retornarValores(json1){
    //Trata o parâmetro transformando em string, removendo os espaços em branco e o dividindo pelos ";". Atribiu eles ao array params
    let params = json1.toString().replace(/\s/g, '').split(";");
    //Verifica se os parâmetros estão vazios ou são nulos
    if(params != '' && params != null){
        //Cria o array retorno
        let retorno = new Array();
        //Laço que percorre o array com os parâmetros 
        for(let i = 0; i < params.length; i++){
            //Quebra o parametro na virgula, separando o nome do objeto da opção 
            let param = params[i].split(",");
            //Chama a função que busca os valores no json
            let result = retornarValor(param[0], param[1]);
            if (result == "Parâmetros Inválidos"){
                return "Parâmetros Inválidos";
            }else{
                //Verifica se o array de retorno é vazio
                if(retorno.length == 0){
                    //Preenche o array de retorno vazio
                    for(let n = 0 ; n < result.length ; n++){
                        retorno[n] = result[n];
                    }
                //Caso o array de rotorno ja esteja populado
                }else{
                    //Preenche o array de retorno quando ja populado
                    for (let n = 0; n < result.length; n++) {
                        retorno[n] = [retorno[n], result[n]];
                    }
                }
            }
        }
        //Retorno
        return retorno;
    }
    //Retorno caso os parâmetros sejam invalidos
    else {
        return "Parâmetros Inválidos";
    }
}

function getRetornarValor(){
    alert(retornarValor($("#param1").val(), $("#param2").val()));
}

function getRetornarValores(){
    alert(retornarValores($("#param3").val()));
}