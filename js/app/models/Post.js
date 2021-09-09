class Post {
    constructor(title, body){
        this._title = title;
        this._body = body;

        Object.freeze(this );
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }
    get body(){
        return this._body;
    }
    set body(body){
        this._body = body;
    }

}