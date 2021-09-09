class ToDoController{
    constructor(){
        let $ = document.querySelector.bind(document);


        this._todos = new ToDoList();

        this._todoView = new ToDoView($('#js-listView'));

        this._todoView.update(this._todos);


    }

    _buscaToDos(event) {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(r => r.json())
            .then(jsonBody => {
                //const post = new Post(jsonBody[0].title, jsonBody[0].body);
                //this._adiciona(post)

                jsonBody.map(item => {
                    const todo = new ToDo(item.title, item.completed);
                    this._adiciona(todo)
                })
                console.log(jsonBody);
            });
    }

    _adiciona(todo){

        this._todos.adiciona(todo);
        this._todoView.update(this._todos);

    }


}