$(function(){
    $('#btn').blur(function(event){
        let screenWidth = window.innerWidth;
        if(screenWidth < 768){
            $('#collapsable-nav').collapse('hide');
        }
    });
});

(function(window) {
    let dc = {};
    let homeHTML = 'snippets/home-snippet.html';


    //convenience function for insert innerHTML for 'select'
    let insertHTML = function(selector, html){
        let targetElem = document.querySelector(selector);
        targetElem.insertHTML = html;
    };


    let showLoading = function(selector){
        let html = "<div class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    document.addEventListener('DOMContentLoaded', function(event){
        showLoading('#main-content');
        $ajaxUtils.sendGetRequest(homeHTML, function(responseText){
            document.querySelector('#main-content').innerHTML = responseText;
        }, false);
    });

    window.$dc = dc;

})(window);