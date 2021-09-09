class AlbumsController {
    constructor(){
        let $ = document.querySelector.bind(document);


        this._albums = new AlbumList();

        this._albumView = new AlbumView($('#js-listView'));

        this._albumView.update(this._albums);


    }

    _buscaAlbums(event) {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(r => r.json())
            .then(jsonBody => {
                //const album = new Album(jsonBody[0].title, jsonBody[0].body);
                //this._adiciona(album);

                jsonBody.map(item => {
                    const album = new Album(item.title);
                    this._adiciona(album)
                })
                console.log(jsonBody);
            });
    }

    _adiciona(album){

        this._albums.adiciona(album);
        this._albumView.update(this._albums);

    }


}