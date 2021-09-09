class ToDoView extends View {

    constructor(elemento){
        super(elemento);
    }

    _template(todo){

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <th>Title</th>
                <th>Status</th>
            </thead>

            <tbody>
                ${todo.getPosts().map(item => `
                    <tr>
                        <td>${item.title}</td>
                        <td>${item.completed}</td>
                    </tr>
                `).join('')}
            </tbody>

        </table> 
        `;
    }

}