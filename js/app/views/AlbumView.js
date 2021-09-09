class AlbumView extends View {

    constructor(elemento){
        super(elemento);
    }

    _template(albums){

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <th>Title</th>
                
            </thead>

            <tbody>
                ${albums.getAlbums().map(item => `
                    <tr>
                        <td>${item.title}</td>
                       
                    </tr>
                `).join('')}
            </tbody>

        </table> 
        `;
    }

}