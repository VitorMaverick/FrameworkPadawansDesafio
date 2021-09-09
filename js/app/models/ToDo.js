class ToDo {
    constructor(title, body){
        this._title = title;
        this._completed = body;

        Object.freeze(this );
    }

    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }
    get completed(){
        return this._completed;
    }
    set completed(completed){
        this._completed = completed;
    }

}