//Leitura completa do nosso documento HTML
$(document).ready(function(){

    //Monitorar todos os cliques em cima do elemento "a" do nosso documento HTML

    $('a').click(function(e){
        e.preventDefault()

        //Criar uma variável local que receba o atributo href do link
        let page = $(this).attr('href')

        $('.modal-title').empty()
        $('.modal-body').empty()

        //Verificar qual conteúdo eu devo carregar
        switch(page){
            //Se for para abrir a página sobre mim....
            case 'about':
                $('.modal-title').append('Sobre mim')
                $('.modal-body').append(`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, porro animi neque beatae autem quia unde! Molestias quae necessitatibus velit incidunt voluptatem blanditiis earum consequatur perferendis labore eum, quidem eaque.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati ipsa excepturi enim magni laboriosam, saepe nam facere quas quis possimus, quos esse optio? Facilis assumenda quo sint officia amet!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis perferendis minima modi repudiandae nulla quaerat repellendus architecto ut animi nostrum odio, alias sapiente error enim deleniti ipsum. Minima, debitis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima est officia, voluptatum modi quidem explicabo consequatur commodi mollitia laboriosam et, ipsam optio voluptates sed ullam eum perferendis sint id quod.</p>`)
                $('#modal-info').modal('show')
                break
            //Se for para abrir a página trabalhos....
            case 'work':
                $('.modal-title').append('Meus trabalhos')
                $('.modal-body').append('Aqui será carregado meus trabalhos realizados')
                $('#modal-info').modal('show')
                break
            //Se for para abrir a página clientes....
            case 'client':
                $('.modal-title').append('Meus clientes')
                $('.modal-body').append('Aqui será carregado meus clientes')
                $('#modal-info').modal('show')
                break
            //Se for para abrir a página contatos....
            case 'contact':
                $('.modal-title').append('Meus contatos')
                $('.modal-body').append('Aqui será carregado meus contatos')
                $('#modal-info').modal('show')
                break
            default: alert('Link não encontrado')
        }

    })

})