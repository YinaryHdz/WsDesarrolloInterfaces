class  RelativeTime extends HTMLElement{
    constructor() {
        super();
      }
      connectedCallback() {
        this.render();
        // setInterval(() => {
        //   this.render();
        // }, 1000);
      }
      render() {
        const time = new Date(this.getAttribute('time')).getTime();
        const now = Date.now();
  
        console.log({
          time,
          now,
          seconds: (now - time) / 1000,
          minutes: (now - time) / (1000 * 60),
          hours: Math.floor((now - time) / (1000 * 60 * 60))
        })
  
        const diff = now - time;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(diff / (1000 * 60));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
  
        let aux = '...';
        if (months >= 12) {
          aux = `Hace ${years} año${years > 1 ? 's' : ''}`
        } else if (days > 30 && months >= 1) {
          aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
        } else if (days >= 1) {
          aux = `Hace ${days} día${days > 1 ? 's' : ''}`
        } else if (hours >= 1) {
          aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
        } else if (minutes >= 1) {
          aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
        } else if (seconds >= 1) {
          aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`
        }
  
        this.textContent = aux;
      } 
    }
    customElements.define('relative-time', RelativeTime);


const articles = [
  {
    "image": "https://cdn.kqed.org/wp-content/uploads/sites/35/2024/10/GettyImages-1347890261-1020x680.jpg",
    "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
    "description": "Grassroots climate activists argue a tax on gas use in large buildings will help all of Berkeley kick fossil fuels. But many politicians, businesses, and nonprofits, even those that work on climate, don’t think Measure GG is the policy to get there.",
    "date": "2023-10-17T11:00:16Z",
    "category": "Climate"
  },
  {
    "image": "https://fortune.com/img-assets/wp-content/uploads/2024/10/GettyImages-2170862982_413c33-e1729160290535.jpg?resize=1200,600",
    "title": "Musk’s empire risks being targeted by EU for potential X fines",
    "description": "The EU may target Elon Musk’s broader business empire for X fines, potentially including revenue from SpaceX and Neuralink to increase penalties.",
    "date": "2024-09-17T10:32:45Z",
    "category": "Business"
  },
  {
    "image": "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1729160267/autoexpress/2024/10/Omode E5 first UK drive.jpg",
    "title": "Omoda E5 in Noble trim - pictures",
    "description": "Pictures of the electric Omode E5 SUV being driven on UK roads. Pictures taken by Auto Express senior photographer Pete Gibson",
    "date": "2024-10-15T10:30:56Z",
    "category": "Automobile"
  },
  {
    "image": "https://cdn.mos.cms.futurecdn.net/6xqynicLzH6sSskfiNyWoT-1200-80.jpg",
    "title": "Renault, Alpine and Citroën help the 2024 Paris Motor Show return to form",
    "description": "Explore the most delectable debuts at the Paris Motor Show 2024 – or Mondial de l'Auto – including designs from France's big car makers and niche machines from around the world",
    "date": "2024-10-13T10:25:24Z",
    "category": "Automobile"
  },
  {
    "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg?quality=50&strip=all&w=1024",
    "title": "Chinese cybersecurity association urges review of Intel products",
    "description": "The Cybersecurity Association of China (CSAC) has urged a security review of Intel products sold in the country, claiming the US semiconductor firm poses ongoing threats to China’s national security and interests.",
    "date": "2024-10-01T10:22:56Z",
    "category": "Technology"
  },

  {
    "image": "https://media.npr.org/assets/img/2021/11/13/gettyimages-1236538614_custom-e44f698c99e5b27f3513b65c4f43bce4afda42be.jpg",
    "title": "Global Climate Summit Tackles Urgent Environmental Issues",
    "description": "World leaders gather to discuss critical climate challenges and solutions at the Global Climate Summit in 2024.",
    "date": "2024-10-20T09:00:00Z",
    "category": "global"
  },
  {
    "image": "https://assets.goal.com/images/v3/blt8effcb693170c7e5/Top_Ten_Olympic_Athletes.jpg",
    "title": "Olympics 2024: Athletes Prepare for the Greatest Show on Earth",
    "description": "As the world counts down to the 2024 Olympics, athletes from around the globe share their journeys and preparations.",
    "date": "2024-10-18T12:30:00Z",
    "category": "sport"
  },
  {
    "image": "https://img.freepik.com/premium-photo/exploring-ancient-city-ruins-cultural-odyssey-historic-havens-heritage-highlight_706399-7834.jpg",
    "title": "Exploring the Cultural Heritage of Ancient Civilizations",
    "description": "A deep dive into the artifacts and traditions that shaped ancient cultures around the world.",
    "date": "2024-10-15T14:00:00Z",
    "category": "culture"
  },
  {
    
    "image": "https://sploro.eu/wp-content/uploads/2024/06/Blue-Breaking-News-YouTube-Channel-Art-2-768x432.png",
    "title": "Tech Innovations Transforming the Future of Work",
    "description": "In 2024, the landscape of work is undergoing a seismic shift as technology continues to evolve at an unprecedented pace. This article explores the latest innovations, including artificial intelligence, remote collaboration tools, and automation, that are redefining how we approach our daily tasks. From AI-driven software that optimizes workflows to virtual reality environments enhancing remote meetings, we delve into how these advancements are improving productivity and employee engagement. Furthermore, we discuss the implications of these changes on job roles, the skills required in the modern workforce, and the future of hybrid work models. As companies adapt to these technologies, understanding their impact on organizational culture and employee well-being becomes crucial for success.",
    "date": "2024-10-12T16:45:00Z",
    "category": "technology"
    
  },

  {
    "image": "https://static01.nyt.com/images/2022/11/07/world/07cop27-morning-lede-family-photo/07cop27-morning-lede-family-photo-videoSixteenByNine3000-v2.jpg",
    "title": "World Leaders Unite for Peace at the Global Summit",
    "description": "An overview of the initiatives discussed to promote peace and cooperation among nations.",
    "date": "2024-10-10T11:15:00Z",
    "category": "global"
  },
  {
    "image": "https://assets.aws.worldathletics.org/large/62db7219246dc08c60cb72c2.jpg",
    "title": "Record-Breaking Performances at the World Athletics Championships",
    "description": "Highlights from the thrilling performances at this year's World Athletics Championships.",
    "date": "2024-10-08T09:30:00Z",
    "category": "sport"
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYZFf-hrA99ACg0_4f9HGKNgwtQaa1lFVBA&s",
    "title": "AI Advancements: Implications for Society and Ethics",
    "description": "Examining the ethical concerns surrounding AI technology and its impact on society.",
    "date": "2024-10-03T15:45:00Z",
    "category": "technology"
  },
  {
    "image": "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/01/03/coronavirus_israel_vaccine.jpg",
    "title": "Global Health Initiatives Aiming for Universal Vaccination",
    "description": "Updates on worldwide efforts to ensure access to vaccines for all populations.",
    "date": "2024-10-01T10:00:00Z",
    "category": "global"
  },
  {
    "image": "https://blog.nasm.org/hubfs/sports-nutrition-guide.jpg",
    "title": "New Strategies in Sports Nutrition for Athletes",
    "description": "This article delves into the latest trends in sports nutrition that are empowering athletes to maximize their performance and recovery. We explore how personalized nutrition plans tailored to individual needs and preferences are becoming increasingly popular, along with the rise of plant-based diets among elite athletes. Additionally, we discuss the role of supplements, such as adaptogens and protein powders, in enhancing endurance and strength.",
    "date": "2024-09-29T08:30:00Z",
    "category": "sport"
  }, 

]

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
        const botonDialogo = this.querySelector('.dialog-search');
        const botonCerrar = this.querySelector('.boton-cerrar');
        //Este "dialog" es un selector de tipo elemento
        const dialogo = this.querySelector('dialog');

        if (!botonDialogo || !botonCerrar || !dialogo) {
          console.error('Elementos necesarios no encontrados en el DOM');
          return; // Detener la ejecución si los elementos no están presentes
      }

        botonDialogo.addEventListener('click', () => {
            //El metodo "showModal" stá diseñado específicamente para ser utilizado 
            //con el elemento <dialog> en HTML. Su función principal es mostrar diálogos modales,.
            //un dialogo modal hace que el usuario tenga que interactuar con el, es decir, bloquea
            //cualquier accion subyacenta hasta que el dialogo se cierre
            console.log('Boton clickado')
            dialogo.showModal();
          });
        
        botonCerrar.addEventListener('click', () =>{
            //Cierra el dialogo 
            dialogo.close();
        })

        const buscador = this.querySelector('#buscador');
        //"addEventListener('input', ...)":  Este método se utiliza para añadir un manejador de eventos
        //al elemento siteSearch. El evento input se dispara cada vez que el usuario escribe o modifica 
        //el valor en el campo.
        //"(event) => this.search(event)": Este es un callback (función de retorno) que se ejecuta cada 
        //vez que se produce el evento input. La función "search(event)" hace referencia a un metodo del codigo
        buscador.addEventListener('input', (event) => this.search(event)) 
    } 

    search(event){
        //es una función en JavaScript que se utiliza para prevenir el comportamiento predeterminado de un evento.
         event.preventDefault();   
         const buscador = this.querySelector('#buscador');
         //Obtiene el valor actual del campo de búsqueda.
         const term = buscador.value
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

        const buscarResultados = this.querySelector('#search-results');
        //Se asigna una cadena vacia a innerHTML
        buscarResultados.innerHTML = '';
        //Busca dentro del array de articulos (ya creado), el termino que coincida con el titulo de algun
        //elemento del array
        const _articles  =this.articles.filter(article => article.title.toLowerCase().includes(term.toLowerCase()))
        
        //Este es el selector que busca un elemento <template> en el DOM.
        const template = this.querySelector('template').content ;

        console.log({_articles})
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
            /**
             * appendChild(): Este método del DOM se utiliza para añadir un nodo (en este caso, 
             * un elemento <li>) como el último hijo del nodo que lo invoca (en este caso, searchResults).
             */
            buscarResultados.appendChild(li);
        })      
    }
}
customElements.define('custom-search', CustomSearch);

/**ARTICLE*/

const getId = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return Number(searchParams.get('id'));
}

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

      // reemplazos de los contenidos del article
      const h1 = this.querySelector('h1');
      h1.textContent = article.title;
      //   descripción
      const description = this.querySelector('p');
      description.textContent = article.description;
      //   imagen
      const img = this.querySelector('img');
      img.src = article.image;
      // relative time
      const relativeTime = this.querySelector('relative-time');
      //  relativeTime.setAttribute('time',article.date); --forma más nueva de hacer el relativeTime
      const newRelativeTime = `<relative-time time="${article.date}"/>`//forma más simple pero antigua
      relativeTime.outerHTML = newRelativeTime;
  }
}
customElements.define('custom-article', CustomArticle);

//Funcionalidad para el menu 
document.getElementById('btn').addEventListener('click', function() {
  const dropdownMenu = document.getElementById('dropdown');
  // Alternar la visibilidad del menú
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
  const dropdownMenu = document.getElementById('dropdown');
  const menuToggle = document.getElementById('btn');

  if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none'; // Cerrar el menú
  }
});




