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

  // news-viewer.js
class NewsViewer extends HTMLElement {
    constructor() {
      super();
      this.section = this.getAttribute('section');
    }
  
    connectedCallback() {
      this.loadProducts(this.section);
    }
  
    async loadProducts() {
      try {
        const response = await fetch(`https://products-foniuhqsba-uc.a.run.app/Drones`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const products = await response.json();
    console.log("Productos cargados desde la API:", products);

        this.renderProducts(products);

        const customSearch = document.querySelector('custom-search');
            if (customSearch) {
                customSearch.setProducts(products); // Pasar productos a custom-search
            }
      } catch (error) {
        console.error('Error:', error);
        this.innerHTML = `<p>Error al cargar los productos. Inténtelo nuevamente más tarde.</p>`;
      }
    }
  
    renderProducts(products) {
        console.log("Productos a renderizar:", products); // Verifica que los productos estén disponibles
        
        const template = document.getElementById('product-template');
        this.innerHTML = ''; // Limpiar contenido previo
        
        products.forEach(product => {
          const productContent = document.importNode(template.content, true);
          
          // Verificar si la plantilla se llena correctamente
          console.log('Producto:', product);
          
          productContent.querySelector('.image').src = product.image;
          productContent.querySelector('.title').textContent = product.title;
          productContent.querySelector('.price').textContent = product.price;
          productContent.querySelector('.description').textContent = product.short_description;
          
          // Añadir el evento para el botón de añadir a la cesta
          const addToCartButton = productContent.querySelector('.add-to-cart');
          addToCartButton.addEventListener('click', () => this.addToCart(product));

          this.appendChild(productContent);
        });   
  }

  addToCart(product) {
    // Crear un evento personalizado para enviar el producto al carrito
    const event = new CustomEvent('add-to-cart', {
        detail: product, // Información del producto
        bubbles: true,  // Permite que el evento se propague a los ancestros
        composed: true   // Permite que el evento atraviese los límites del Shadow DOM
    });

    // Despachar el evento al elemento superior (por ejemplo, el carrito)
    this.dispatchEvent(event);
}
}

// Definir el elemento personalizado
customElements.define('news-viewer', NewsViewer);
  

class ShoppingCart extends HTMLElement {
    constructor() {
        super();
        this.cart = [];  // Carrito vacío
    }

    connectedCallback() {
        this.renderCart();  // Renderiza el carrito por primera vez
        this.addEventListener('add-to-cart', this.handleAddToCart);  // Escucha el evento 'add-to-cart'
    }

    // Método para manejar el evento 'add-to-cart'
    handleAddToCart(event) {
        const product = event.detail; // Obtén el producto desde el evento
        this.addToCart(product);      // Agregar producto al carrito
    }

    // Método para agregar un producto al carrito
    addToCart(product) {
        this.cart.push(product);  // Añadir el producto al carrito
        this.renderCart();        // Actualizar la visualización del carrito
    }

    // Método para renderizar el contenido del carrito
    renderCart() {
        const cartCount = this.querySelector('#cart-count');
        const cartList = this.querySelector('#cart-list');
        cartList.innerHTML = '';  // Limpiar el contenido anterior

        // Actualizar el número de productos en el carrito
        cartCount.textContent = this.cart.length;

        // Mostrar los productos en el carrito
        this.cart.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('cart-item');
            productItem.innerHTML = `
                <p>${product.title} - ${product.price}</p>
            `;
            cartList.appendChild(productItem);
        });
    }
}

// Definir el elemento personalizado
customElements.define('shopping-cart', ShoppingCart);

