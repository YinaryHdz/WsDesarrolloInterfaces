const articles = [
  {
    "id": 1,
    "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0jzxv20.jpg.webp", 
    "title": "'He was an incurable romantic': The boy who lived a secret life in World of Warcraft",
    "description": "This article explores the life of a young boy who found solace and adventure in the virtual world of World of Warcraft. It delves into his experiences, friendships, and the profound impact the game had on his life, reflecting on themes of escapism and the bonds formed in online gaming communities.",
    "date": "2024-10-25T09:30:00Z",
    "category": "Technology"
  },
  {
    "id": 2,
    "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/787f/live/89155350-911d-11ef-88b8-8b00cbc9d4aa.jpg.webp",
    "title": "Polar Bears Face Higher Risk of Disease in a Warming Arctic",
    "description": "As Arctic temperatures rise, polar bears are increasingly exposed to new pathogens and diseases, exacerbated by melting ice and shifting ecosystems. Scientists warn that these changes in the Arctic are accelerating health risks for polar bears, who already face severe threats from habitat loss. The study highlights urgent calls for climate action to safeguard Arctic wildlife and protect the species’ long-term survival.",
    "date": "2024-10-15T12:45:00Z",
    "category": "Global"
  },
  {
    "id": 3,
    "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0jjndp3.jpg.webp",
    "title": "The Superstorms from Space That Could End Modern Life",
    "description": "Experts warn of solar superstorms that could wreak havoc on modern technology and infrastructure, causing massive blackouts, disruptions in satellite communications, and widespread GPS failure. With little preparation for such events, scientists emphasize the need for increased space weather monitoring and prevention measures to mitigate potential global impacts.",
    "date": "2024-10-20T13:45:30Z",
    "category": "Global"
  },
  {
    "id": 4,
    "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0k0q461.jpg.webp",
    "title": "11 of the Best TV Shows to Watch This November",
    "description": "Get ready for November’s binge-worthy lineup, as streaming platforms roll out a mix of new releases and returning favorites. From captivating dramas to thrilling mysteries, discover this month's must-watch TV shows that promise to entertain and inspire.",
    "date": "2024-10-13T10:25:24Z",
    "category": "Culture"
  },
  {
    "id": 5,
    "image": "https://www.computerworld.com/wp-content/uploads/2024/10/3567767-0-90640600-1729160617-IDG-Germany-Intel-September-News.jpg?quality=50&strip=all&w=1024",
    "title": "Chinese cybersecurity association urges review of Intel products",
    "description": "The Cybersecurity Association of China (CSAC) has formally called for a comprehensive security review of all Intel products currently available in the Chinese market. This move stems from the association's concerns over potential threats that the US semiconductor giant may pose to China's national security and economic interests. In a statement, the CSAC articulated its apprehensions regarding the integrity and safety of Intel's hardware and software, suggesting that vulnerabilities in these products could be exploited for espionage or cyberattacks. The organization emphasized that given the heightened tensions between the United States and China in recent years, it is imperative to scrutinize the technology that is critical to national infrastructure and cybersecurity. The CSAC's appeal reflects a broader trend of increasing scrutiny of foreign technology firms operating within China, particularly those linked to the US. This scrutiny has intensified following allegations of foreign surveillance and the potential misuse of technology for political and military purposes. Intel, a leading player in the semiconductor industry, has responded to these concerns by reiterating its dedication to providing secure and reliable products. However, the CSAC's call for a review could have significant implications for Intel's operations in China, a key market for the company. As the situation unfolds, it remains to be seen how this review will affect Intel's presence in China and whether it will lead to broader implications for US-China technology relations.",
    "date": "2024-10-01T10:22:56Z",
    "category": "Technology"

  },
  {
    "id": 6,
    "image": "https://media.npr.org/assets/img/2021/11/13/gettyimages-1236538614_custom-e44f698c99e5b27f3513b65c4f43bce4afda42be.jpg",
    "title": "Global Climate Summit Tackles Urgent Environmental Issues",
    "description": "World leaders gather to discuss critical climate challenges and solutions at the Global Climate Summit in 2024.",
    "date": "2024-10-20T09:00:00Z",
    "category": "Global"
  },
  {
    "id": 7,
    "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/d486/live/f53dbff0-823f-11ef-b825-bf6174f6bf7c.jpg.webp",
    "title": "Meta must limit data for personalised ads - EU court",
    "description": "The European Court has ruled that Meta, the parent company of Facebook and Instagram, must limit its data collection practices to comply with EU regulations on personalized advertising. This decision marks a significant step towards stricter privacy controls and has implications for how tech companies handle user data in the region.",
    "date": "2024-10-29T09:30:00Z",
    "category": "Technology"
  },  
  {
    "id": 8,
    "image": "https://img.freepik.com/premium-photo/exploring-ancient-city-ruins-cultural-odyssey-historic-havens-heritage-highlight_706399-7834.jpg",
    "title": "Exploring the Cultural Heritage of Ancient Civilizations",
    "description": "A deep dive into the artifacts and traditions that shaped ancient cultures around the world.",
    "date": "2024-10-15T14:00:00Z",
    "category": "Culture"
  },
  {
    "id": 9,
    "image": "https://sploro.eu/wp-content/uploads/2024/06/Blue-Breaking-News-YouTube-Channel-Art-2-768x432.png",
    "title": "Tech Innovations Transforming the Future of Work",
    "description": "In 2024, the landscape of work is undergoing a seismic shift as technology continues to evolve at an unprecedented pace. This article explores the latest innovations, including artificial intelligence, remote collaboration tools, and automation, that are redefining how we approach our daily tasks. From AI-driven software that optimizes workflows to virtual reality environments enhancing remote meetings, we delve into how these advancements are improving productivity and employee engagement. Furthermore, we discuss the implications of these changes on job roles, the skills required in the modern workforce, and the future of hybrid work models. As companies adapt to these technologies, understanding their impact on organizational culture and employee well-being becomes crucial for success.",
    "date": "2024-10-12T16:45:00Z",
    "category": "Technology"
    
  },
  {
    "id": 10,
    "image": "https://static01.nyt.com/images/2022/11/07/world/07cop27-morning-lede-family-photo/07cop27-morning-lede-family-photo-videoSixteenByNine3000-v2.jpg",
    "title": "World Leaders Unite for Peace at the Global Summit",
    "description": "The recent Global Summit brought together heads of state and government from across the globe to discuss vital initiatives aimed at fostering peace, stability, and cooperation among nations. During the summit, leaders engaged in fruitful discussions on a range of pressing issues, including climate change, international security, economic collaboration, and human rights. Notably, several key initiatives were proposed, including a new international framework for conflict resolution, increased investment in sustainable development, and enhanced cooperation in tackling global health challenges. The summit emphasized the importance of diplomacy and dialogue as essential tools for overcoming divisions and building trust among countries. In addition, leaders expressed their commitment to addressing the root causes of conflict, such as poverty and inequality, and to promoting inclusive policies that benefit all citizens. This gathering underscored the urgent need for collaborative efforts in an increasingly interconnected world, as leaders pledged to work together towards a more peaceful and prosperous future for all. The summit concluded with a joint declaration, reaffirming the participants' dedication to collective action and unity in addressing global challenges.",
    "date": "2024-10-10T11:15:00Z",
    "category": "Global"
  },
  {
    "id": 11,
    "image": "https://assets.aws.worldathletics.org/large/62db7219246dc08c60cb72c2.jpg",
    "title": "Record-Breaking Performances at the World Athletics Championships",
    "description": "Highlights from the thrilling performances at this year's World Athletics Championships. In summary, this year's World Athletics Championships were a spectacular showcase of athletic prowess, marked by record-breaking performances, thrilling competitions, and the emergence of new talent. As the dust settles on this unforgettable event, the stories of triumph, determination, and camaraderie will linger, inspiring athletes and fans alike for years to come. The championships not only celebrated the sport but also highlighted the human spirit and the pursuit of excellence in athletics.",
    "date": "2024-10-08T09:30:00Z",
    "category": "Sports"
  },
  {
    "id": 12,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYZFf-hrA99ACg0_4f9HGKNgwtQaa1lFVBA&s",
    "title": "AI Advancements: Implications for Society and Ethics",
    "description": "Examining the ethical concerns surrounding AI technology and its impact on society.",
    "date": "2024-10-03T15:45:00Z",
    "category": "Technology"
  },
  {
    "id": 13,
    "image": "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2021/01/03/coronavirus_israel_vaccine.jpg",
    "title": "Global Health Initiatives Aiming for Universal Vaccination",
    "description": "In a concerted effort to combat global health crises, numerous initiatives are underway to ensure universal access to vaccines for all populations. These programs are driven by the recognition that equitable vaccine distribution is crucial for achieving global immunity and preventing future outbreaks. Various organizations, including the World Health Organization (WHO) and Gavi, the Vaccine Alliance, are collaborating with governments and private sectors to overcome logistical challenges in vaccine delivery, particularly in low-income countries. Efforts include scaling up production, reducing costs, and establishing cold chain logistics to maintain vaccine efficacy. Additionally, public awareness campaigns are being launched to educate communities about the importance of vaccination and dispel misinformation. Countries are also encouraged to share vaccine technology and expertise to strengthen global vaccination infrastructure. As nations strive towards the goal of universal vaccination, there is a renewed emphasis on solidarity and collective action, ensuring that no one is left behind in the fight against preventable diseases.",
    "date": "2024-10-01T10:00:00Z",
    "category": "Global"
  },
  {
    "id": 14,
    "image": "https://blog.nasm.org/hubfs/sports-nutrition-guide.jpg",
    "title": "New Strategies in Sports Nutrition for Athletes",
    "description": "This article delves into the latest trends in sports nutrition that are empowering athletes to maximize their performance and recovery. We explore how personalized nutrition plans tailored to individual needs and preferences are becoming increasingly popular, along with the rise of plant-based diets among elite athletes. Additionally, we discuss the role of supplements, such as adaptogens and protein powders, in enhancing endurance and strength.",
    "date": "2024-09-29T08:30:00Z",
    "category": "Sports"
  }, 
  {
    "id": 15,
    "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/2b49/live/169cd7d0-9573-11ef-9260-19e6a950e830.jpg.webp",
    "title": "Spain and Barcelona's Bonmati Wins Women's Ballon d'Or",
    "description": "Aitana Bonmati, star of both Spain's national team and FC Barcelona, has been awarded the prestigious Women's Ballon d'Or for her exceptional performance throughout the season. Recognized for her skill, leadership, and consistency on the field, Bonmati's award reflects a historic moment for Spanish football and a continued legacy of talent in the women's game. This achievement also marks a new chapter in her career, further solidifying her place among the elite in international football.",
    "date": "2024-10-28T15:00:00Z",
    "category": "Sports"
  }, 
  {
    "id": 16,
    "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/80c7/live/1a437360-95fc-11ef-8e2e-e71633ffe5ec.jpg.webp",
    "title": "Rodri's Ballon d'Or 'What Spanish Football Deserves'",
    "description": "Spain and Manchester City midfielder Rodri celebrates his Ballon d'Or win, which he describes as a reflection of the quality and dedication in Spanish football. The accolade marks a proud moment for Spain, as fans and players alike honor the midfielder's exceptional contributions to the sport.",
    "date": "2024-10-28T12:00:00Z",
    "category": "Sports"
},
{
  "id": 17,
  "image": "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2024/07/22/4008175-81301148-2560-1440.jpg",
  "title": "Tour de France to Take All-French Route for First Time Since 2020",
  "description": "The Tour de France will feature an all-French route for the first time since 2020, avoiding any routes through neighboring countries. This decision highlights the race's historical connection to France’s diverse regions and landscapes, offering fans a uniquely French experience in 2024.",
  "date": "2024-10-27T13:00:00Z",
  "category": "Sports"
},
{
  "id": 18,
  "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0k06l1s.jpg.webp",
  "title": "Should There Be a Ban on Teenage Popstars?",
  "description": "As the music industry increasingly highlights the pressures and challenges faced by young artists, some experts and fans are questioning whether there should be an age limit for entering the pop world. With concerns over mental health and exploitation, the debate around teenage pop stardom gains momentum.",
  "date": "2024-10-30T15:30:00Z",
  "category": "Culture"
},
{
  "id": 19,
  "image": "https://ichef.bbci.co.uk/news/480/cpsprodpb/f44e/live/6a01e680-960f-11ef-90df-3f1823a91773.jpg.webp",
  "title": "Shawn Mendes Says He's 'Just Figuring Out' Sexuality",
  "description": "In a candid interview, Shawn Mendes opened up about his journey of self-discovery regarding his sexuality. The pop star shared insights into the pressures of fame and the importance of being true to oneself, emphasizing that exploring one's identity is a natural and ongoing process.",
  "date": "2024-10-29T18:00:00Z",
  "category": "Culture"
},
{
  "id": 20,
  "image": "https://www.nit.pt/wp-content/uploads/2020/03/4fe69d7dde5ecd9dec15ffc0336974c2-754x394.jpg",
  "title": "Camila Cabello 'Surprised' by Lack of Female Headliners",
  "description": "Camila Cabello expressed her surprise and disappointment at the ongoing lack of female headliners in major music festivals. In a recent interview, she highlighted the importance of representation in the industry and called for more opportunities for female artists to take center stage, emphasizing that diverse lineups can enhance the music experience for fans.",
  "date": "2024-10-26T18:00:00Z",
  "category": "Culture"
},
{
  "id": 21,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/aead/live/a0cd6930-6f83-11ef-8c1a-df523ba43a9a.png.webp",  
  "title": "What are Harris and Trump's policies?",
  "description": "An in-depth analysis of the key policies proposed by Vice President Kamala Harris and former President Donald Trump, focusing on their impact on various issues including healthcare, economy, foreign relations, and social justice.",
  "date": "2024-10-29T12:00:00Z",  
  "category": "News"
},
{
  "id": 22,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/f9f8/live/94af0710-95e6-11ef-9607-9df2d810c28b.jpg.webp",  
  "title": "Jeff Bezos defends Washington Post's end to election endorsements",
  "description": "Jeff Bezos, the owner of the Washington Post, has publicly defended the newspaper's decision to discontinue election endorsements. In a statement, he emphasized the importance of journalistic integrity and the need for the paper to remain impartial in a highly polarized political climate.",
  "date": "2024-10-29T12:00:00Z",
  "category": "News"
},
{
  "id": 23,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/eeed/live/bc09f310-9483-11ef-b409-29c78ef3feec.jpg.webp",
  "title": "Alarm call as world's trees slide towards extinction",
  "description": "A new report reveals that a significant percentage of the world's tree species are facing the threat of extinction due to deforestation, climate change, and habitat loss. Environmentalists are calling for immediate action to protect these vital ecosystems, which play a crucial role in regulating the Earth's climate and supporting biodiversity.",
  "date": "2024-10-28T14:00:00Z",
  "category": "News"
},
{
  "id": 24,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/bdd7/live/00f542e0-9515-11ef-9cde-517ea4c35d17.jpg.webp",
  "title": "Why female entrepreneurs are key to getting more women to work",
  "description": "This article discusses the critical role female entrepreneurs play in increasing women's participation in the workforce. It explores how women-led businesses can create job opportunities and inspire the next generation of women leaders.",
  "date": "2024-10-29T12:00:00Z",
  "category": "News"
},
{
  "id": 25,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/0af1/live/da384b30-f72f-11ee-890b-ef49125d5cad.jpg.webp",  
  "title": "What's happening with children's gender care in Scotland?",
  "description": "Recent developments in Scotland regarding children's gender care have sparked significant debate and concern. The government has proposed new guidelines that impact how gender identity issues are addressed in healthcare settings for minors. Advocates argue for the necessity of affirming care, while critics raise concerns over the implications of such policies. This article explores the current state of children's gender care in Scotland and the varying perspectives on the proposed changes.",
  "date": "2024-10-28T17:00:00Z",
  "category": "News"
},
{       
  "id": 26,    
  "image": "https://assets.goal.com/images/v3/blt8effcb693170c7e5/Top_Ten_Olympic_Athletes.jpg",
  "title": "Olympics 2024: Athletes Prepare for the Greatest Show on Earth",
  "description": "As the world counts down to the 2024 Olympics, athletes from around the globe share their journeys and preparations.",
  "date": "2024-10-18T12:30:00Z",
  "category": "Sports"
},
{
  "id": 27,
    "image": "https://static.euronews.com/articles/stories/08/17/26/86/1200x675_cmsv2_0e50dff4-9a79-5f18-bd6d-ace6c721c93d-8172686.jpg",
    "title": "Global Leaders Convene to Address Escalating Climate Crisis",
    "description": "World leaders and key international organizations have gathered to discuss urgent actions to mitigate the effects of climate change. The summit, aimed at aligning nations on reducing emissions, investing in renewable energy, and bolstering global climate policies, highlights the pressing need for cooperative strategies in response to escalating environmental challenges. Advocates stress that unified action is critical to meeting targets set by the Paris Agreement and achieving sustainable development goals worldwide.",
    "date": "2024-10-18T12:30:00Z",
    "category": "Global"
},
{
  "id": 28,
  "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0k07b5k.jpg.webp",
  "title": "Disease: Why Lady Gaga's Comeback Hits the Spot",
  "description": "Lady Gaga’s latest return to the spotlight has resonated strongly with fans, addressing themes of resilience and health. The pop icon's new work sheds light on her personal battles, creating an authentic connection with audiences and showcasing the importance of mental health advocacy in modern music.",
  "date": "2024-10-29T16:00:00Z",
  "category": "Culture"
},
{
  "id": 29,
  "image": "https://ichef.bbci.co.uk/news/800/cpsprodpb/83ff/live/47d93530-9534-11ef-944d-8f6466829a27.jpg.webp", 
  "title": "Writer to be town's first non-royal female statue",
  "description": "A local writer is set to be honored with a statue, becoming the first non-royal woman to receive such recognition in the town's history. The statue will celebrate her contributions to literature and the community, highlighting the importance of female voices in history.",
  "date": "2024-10-29T16:00:00Z",
  "category": "News"
},
{
  "id": 30,
  "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0jzlb0l.jpg.webp", 
  "title": "Cod liver oil: A fishy fix that had surprisingly clear health benefits",
  "description": "Cod liver oil has been praised for its surprisingly clear health benefits, providing essential nutrients that support overall well-being. This once-overlooked supplement is making a comeback as more people recognize its advantages for heart health, cognitive function, and immune support.",
  "date": "2024-10-28T16:00:00Z",
  "category": "Technology"
}


]


const getId = () => {
  const searchParams = new URLSearchParams(location.search.slice(1));
  return Number(searchParams.get('id'));
}


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




class CustomSearch extends HTMLElement {
  constructor() {
    super();
    this.articles = articles; // Asegúrate de que `articles` está definido
  }

  connectedCallback() {
    const dialogBtn = this.querySelector('.dialog-search');
    const closeBtn = this.querySelector('.close-btn');
    const dialog = this.querySelector('dialog');

    // Evento para abrir el diálogo
    dialogBtn.addEventListener('click', () => {
      dialog.showModal();
    });

    // Evento para cerrar el diálogo
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });

    // Manejo de la entrada de búsqueda
    const siteSearch = this.querySelector('#site-search');
    siteSearch.addEventListener('input', (event) => this.search(event));

    // Renderiza resultados iniciales
    this.renderResults('');
  }

  search(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado
    const siteSearch = this.querySelector('#site-search');
    const term = siteSearch.value;

    this.renderResults(term); // Renderiza los resultados de búsqueda
  }

  renderResults(term = '') {
    const searchResults = this.querySelector('#search-results');
    searchResults.innerHTML = ''; // Limpiar resultados previos

    // Filtrar artículos que coincidan con el término de búsqueda
    const filteredArticles = this.articles.filter(article => 
      article.title.toLowerCase().includes(term.toLowerCase())
    );

    // Obtener el template para los resultados
    const template = this.querySelector('template').content;

    // Iterar sobre los artículos filtrados
    filteredArticles.forEach(article => {
      const li = template.querySelector('li').cloneNode(true);
      li.querySelector('.card .item-image').src = article.image;
      li.querySelector('.card .item-description').textContent = article.description;
      li.querySelector('relative-time').setAttribute('time', article.date);
      li.querySelector('.card .item-title a').textContent = article.title;

      // Actualizar el href del enlace
      const enlace = li.querySelector('.card .item-title a');
      const href = enlace.href;
      enlace.href = href.replace('{id}', article.id);

      // Agregar el nuevo artículo a los resultados
      searchResults.appendChild(li);
    });
  }
}

// Definición del nuevo elemento
customElements.define('custom-search', CustomSearch);


class CustomArticle extends HTMLElement {
  constructor() {
    super();
    this.articleId = getId();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    const article = articles.find(article => article.id === this.articleId)
    if (article) {
      // reemplazos de los contenidos del article
      const h1 = this.querySelector('h1');
      h1.textContent = article.title;

      // reemplazar image
      const img = this.querySelector('img');
      img.src = article.image;

      //Reemplazar descripcion
      const p = this.querySelector('p');
      p.textContent = article.description;
    }
  }
}
customElements.define('custom-article', CustomArticle);

class DropdownMenu extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      // Agregar el evento para mostrar y ocultar el menú
      this.querySelector('#btn').addEventListener('click', this.toggleMenu.bind(this));
      
      // Cerrar el menú si se hace clic fuera de él
      window.addEventListener('click', this.closeMenu.bind(this));
  }

  disconnectedCallback() {
      // Limpiar el evento para evitar fugas de memoria
      window.removeEventListener('click', this.closeMenu.bind(this));
  }

  toggleMenu() {
      const dropdownMenu = this.querySelector('#dropdown');
      dropdownMenu.classList.toggle('active');
  }

  closeMenu(event) {
      const dropdownMenu = this.querySelector('#dropdown');
      const menuToggle = this.querySelector('#btn');

      if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('active'); // Cerrar el menú
      }
  }
}

// Definir el nuevo elemento
customElements.define('dropdown-menu', DropdownMenu);


//Funcionalidad para el select de la barra de navegacion
// Selecciona todos los enlaces dentro del <nav>
const navLinks = document.querySelectorAll("nav a");

// Agrega la clase 'active' al enlace que coincide con la URL actual
navLinks.forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});




