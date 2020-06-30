$(function(){
    $('#btn').blur(function(event){
        let screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $('#collapsable-nav').collapse('hide');
        }
    });
});

(function(window) {
    //site object
    let dc = {};

    //url do snippet da tela principal
    let homeHTML = 'snippets/home-snippet.html';

    //url do local onde está localizado o JSON das categorias
    let allCategoriesUrl ="https://davids-restaurant.herokuapp.com/categories.json";

    //url do snippet com o título da página
    let categoriesTitleHtml = "snippets/categories-title-snippet.html";

    //url do snippet com o html para inserir as imagens e legendas
    let categoryHtml = "snippets/category-snippet.html";


    //insere o html recebido dentro do elemento recebido
    let insertHTML = function(selector, html){
        let targetElem = document.querySelector(selector);
        targetElem.innerHTML= html;
    };

    //carrega um gif de loading no elemento passado
    let showLoading = function(selector){
        let html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    //refatora a string recebida substituindo o valor desejado pelo valor passado
    let insertProperty = function (string, propName, propValue) {
        let propToReplace = "{{" + propName + "}}";
        let result = string.replace(new RegExp(propToReplace, "g"), propValue);
        return result;
    }

    //mostra a tela de loading e faz a requisição do conteúdo da tela principal assim que o site carrega pela primeira vez
    document.addEventListener('DOMContentLoaded', function(event){
        showLoading('#main-content');
        $ajaxUtils.sendGetRequest(homeHTML, function(responseText){
            document.querySelector('#main-content').innerHTML = responseText;
        }, false);
    });

    //método inicial para carregar o conteúdo das categorias
    dc.loadMenuCategories = function(){
        showLoading("#main-content");
        //requisição pelo JSON
        $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
    };

    //método que diretriza todos os recebimentos de requisições
    function buildAndShowCategoriesHTML (categories) {
        //requisição pelo conteúdo do título
        $ajaxUtils.sendGetRequest(categoriesTitleHtml,function (categoriesTitleHtml) {
            //requisição pelo conteúdo de cada div da categoria
            $ajaxUtils.sendGetRequest(categoryHtml,function (categoryHtml) {
                let categoriesViewHtml =
                buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml);
                insertHTML("#main-content", categoriesViewHtml);
                
            },false);
        },false);
    };
  
    //método que organiza a string que será interpretada como html posteriormente
    function buildCategoriesViewHtml(categories,categoriesTitleHtml,categoryHtml) {
  
        var finalHtml = categoriesTitleHtml;
        finalHtml += "<section class='row'>";
    
        //Loop over categories
        for (var i = 0; i < categories.length; i++) {
            var html = categoryHtml;
            var name = "" + categories[i].name;
            var short_name = categories[i].short_name;
            
            html = insertProperty(html, "name", name);
            html = insertProperty(html,"short_name",short_name);

            finalHtml += html;
        }
    
        finalHtml += "</section>";
        return finalHtml;
    }
  
    window.$dc = dc;

})(window);