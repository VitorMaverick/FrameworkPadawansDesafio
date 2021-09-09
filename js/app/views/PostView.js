class PostView extends View {

    constructor(elemento){
        super(elemento);
    }

    _template(posts){

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <th>Title</th>
                <th>Body</th>
            </thead>

            <tbody>
                ${posts.getPosts().map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.body}</td>
                    </tr>
                `).join('')}
            </tbody>

        </table> 
        `;
    }

}