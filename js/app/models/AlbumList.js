class AlbumList{
    constructor(){
        this._albums = [];

    }

    adiciona (album){
        this._albums.push(album);
    }
    getAlbums(){
        return this._albums;
        //return [].concact(this._albums);
    }

}