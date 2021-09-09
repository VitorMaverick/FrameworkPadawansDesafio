class Album {
    constructor(title, body){
        this._title = title;

        Object.freeze(this );
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }


}