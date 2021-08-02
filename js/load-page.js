//Leitura completa do nosso documento HTML
$(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

    $('a').click(function(e){
        e.preventDefault()

        $('#modal-info').modal('show')
    })

})