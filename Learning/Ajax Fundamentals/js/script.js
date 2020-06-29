//espera o html ser carregado (não depende de css ou imagens, etc. exclusivamente do html) e aplica uma função quando o evento ocorrer.
document.addEventListener('DOMContentLoaded', 
    function(event){ //função a ser aplicada quando o conteúdo html for carregado
        document.querySelector('button') //seleciona o elemento button e adiciona a ele um listener
                .addEventListener('click', 
                    function(){          //endereço da função a ser executanda quando o evento ocorrer
                        $ajaxUtils.sendGetRequest('/data/names.txt', //chama o método passando a url
                            function(request){// e também o endereço da função a ser aplicada
                                let name = request.responseText; //recebe o conteúdo do requerimento
                                document.querySelector('#content')
                                        .innerHTML = `<h2>hello ${name}!</h2>`;
                            }
                        );

                    }
                );
    }

);