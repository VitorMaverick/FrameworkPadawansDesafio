class PostList{
    constructor(){
        this._posts = [];

    }

    adiciona (post){
        this._posts.push(post);
    }
    getPosts(){
        return this._posts;
        //return [].concact(this._posts);
    }

}