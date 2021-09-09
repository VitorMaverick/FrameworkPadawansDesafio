class AlbumsController {
    constructor(){
        let $ = document.querySelector.bind(document);


        this._albums = new AlbumList();

        this._albumView = new AlbumView($('#js-albumsView'));

        this._albumView.update(this._albums);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#js-mensagem-view') );
        this._mensagemView.update(this._mensagem );

    }

    _buscaAlbums(event) {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(r => r.json())
            .then(jsonBody => {
                const album = new Album(jsonBody[0].title, jsonBody[0].body);
                this._adiciona(album)
                console.log(jsonBody);
            });
    }

    _adiciona(album){

        this._albums.adiciona(album);
        this._albumView.update(this._albums);

    }


}