class ToDoList{
    constructor(){
        this._todos = [];

    }

    adiciona (todo){
        this._todos.push(todo);
    }
    getPosts(){
        return this._todos;
        //return [].concact(this._todos);
    }

}