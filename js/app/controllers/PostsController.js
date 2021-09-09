class PostsController{
    constructor(){
        let $ = document.querySelector.bind(document);


        this._posts = new PostList();

        this._postView = new PostView($('#js-listView'));

        this._postView.update(this._posts);


    }

    _buscaPosts(event) {
        event.preventDefault();
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(r => r.json())
            .then(jsonBody => {
                //const post = new Post(jsonBody[0].title, jsonBody[0].body);
                //this._adiciona(post)

                jsonBody.map(item => {
                    const post = new Post(item.title, item.body);
                    this._adiciona(post)
                })
                console.log(jsonBody);
            });
    }

    _adiciona(post){

        this._posts.adiciona(post);
        this._postView.update(this._posts);

    }


}