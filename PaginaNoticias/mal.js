class CustomSearch extends HTMLElement{
    constructor() {
        super();
        this.articles = articles;
      }
      
    connectedCallback() {
        //Este método "querySelector" se utiliza para seleccionar el primer elemento que 
        //coincida con el selector CSS proporcionado. 
        //En este caso, ".dialog-search" es un selector de clase CSS. El punto (.) 
        //indica que se está buscando un elemento que tenga la clase dialog-search.
        const dialogBtn = this.querySelector('.dialog-search');
        const closeBtn = this.querySelector('.close-btn');
        //Este "dialog" es un selector de tipo elemento
        const dialog = this.querySelector('dialog');

        dialogBtn.addEventListener('click', () => {
            //El metodo "showModal" stá diseñado específicamente para ser utilizado 
            //con el elemento <dialog> en HTML. Su función principal es mostrar diálogos modales,.
            //un dialogo modal hace que el usuario tenga que interactuar con el, es decir, bloquea
            //cualquier accion subyacenta hasta que el dialogo se cierre
            dialog.showModal();
          });
        
        closeBtn.addEventListener('click', () =>{
            //Cierra el dialogo 
            dialog.close();
        })

        const siteSearch = this.querySelector('#site-search');
        //"addEventListener('input', ...)":  Este método se utiliza para añadir un manejador de eventos
        //al elemento siteSearch. El evento input se dispara cada vez que el usuario escribe o modifica 
        //el valor en el campo.
        //"(event) => this.search(event)": Este es un callback (función de retorno) que se ejecuta cada 
        //vez que se produce el evento input. La función "search(event)" hace referencia a un metodo del codigo
        siteSearch.addEventListener('input', (event) => this.search(event))
        this.renderResults('')
    } 

    search(event){
        //es una función en JavaScript que se utiliza para prevenir el comportamiento predeterminado de un evento.
         event.preventDefault();   
         const siteSearch = this.querySelector('#site-search');
         //Obtiene el valor actual del campo de búsqueda.
         const term = siteSearch.value
         //Llama a un método llamado renderResults, pasando el término de búsqueda como argumento.
         //filtra y muestra los resultados de búsqueda basados en el término proporcionado.
         this.renderResults(term)
    } 
    
    renderResults(term = ''){
        /**
         * es una propiedad de los elementos del DOM que permite acceder o establecer el 
         * contenido HTML interno de un elemento. Cuando asignas un valor a innerHTML, estás 
         * reemplazando todo el contenido del elemento con el nuevo contenido especificado.
         */
        //En este caso el selector buscara el elemento con el id correspondiente
        //"search-results."

        const searchResults = this.querySelector('#search-results');
        //Se asigna una cadena vacia a innerHTML
        searchResults.innerHTML = '';
        //Busca dentro del array de articulos (ya creado), el termino que coincida con el titulo de algun
        //elemento del array
        const _articles  =this.articles.filter(article => article.title.toLowerCase().includes(term.toLowerCase()))
        
        //Este es el selector que busca un elemento <template> en el DOM.
        const template = this.querySelector('template').content ;

        _articles.map(article =>{
            /**
             * querySelector('li'): Este método selecciona el primer elemento <li> dentro del contenido 
             * del <template>. Asume que dentro del <template> hay un elemento <li> que se desea clonar.
             */
            /**
             * cloneNode(true): Este método crea una copia del nodo seleccionado. El argumento true 
             * significa que se desea clonar el nodo y todos sus hijos. Si se pasara false, se clonaría 
             * solo el nodo en sí sin su contenido.
             */
            /**
             * a variable li contendrá la copia del elemento <li> que puede ser modificado y añadido a 
             * otra parte del DOM sin afectar el original.
             */
            const li = template.querySelector('li').cloneNode(true);
            li.querySelector('.card .item-image').src = article.image;
            li.querySelector('.card .item-title').textContent = article.title;
            li.querySelector('.card .item-description').textContent = article.description;

            /**
             * Este método establece un atributo en el elemento seleccionado. En este caso, 
             * se establece el atributo time con el valor de article.date.
             */
            /**
             * article.date: Se asume que article es un objeto que representa un artículo y que 
             * contiene una propiedad date, que es la fecha asociada al artículo.
             */
            li.querySelector('relative-time').setAttribute('time', article.date)
            li.querySelector('.card .item-title a').textContent = article.title;
            
            const enlace = li.querySelector('.card .item-title a')
            const href = enlace.href
            enlace.href = href.replace('{id}', article.id)
            /**
             * appendChild(): Este método del DOM se utiliza para añadir un nodo (en este caso, 
             * un elemento <li>) como el último hijo del nodo que lo invoca (en este caso, searchResults).
             */
            searchResults.appendChild(li);
        })      
    }
}
customElements.define('custom-search', CustomSearch);

/**ARTICLE*/

class CustomArticle extends HTMLElement {
  constructor() {
      super();
      this.articleId = getId();
  }
  connectedCallback() {
      this.render();
  }

  render() {
      const article = articles.find(article => article.id == this.articleId)
      if(article){
         // reemplazos de los contenidos del article
        const h1 = this.querySelector('h1');
        h1.textContent = article.title;
        //   descripción
      const description = this.querySelector('p');
      description.textContent = article.description;
      //   imagen
      const img = this.querySelector('img');
      img.src = article.image;
      }
  }
}
customElements.define('custom-article', CustomArticle);