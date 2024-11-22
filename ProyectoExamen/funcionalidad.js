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
          productContent.querySelector('.rating').textContent = product.rating;
          productContent.querySelector('.description').textContent = product.short_description;
          
          // Añadir el evento para el botón de añadir a la cesta
          const addToCartButton = productContent.querySelector('.add-to-cart');
          addToCartButton.addEventListener('click', () => this.addToCart(product));

          const productLink = productContent.querySelector('.product-link');
          productLink.href = `/product.html?id=${product.id}`;  // Redirige al producto específico
      
          this.appendChild(productContent);
        });   
  }

  redirectToProductPage(productId) {
    // Redirigir a la página de detalles con el ID del producto
    window.location.href = `/product.html?id=${productId}`;
  }

  addToCart(product) {
    // Crear un evento personalizado para enviar el producto al carrito
    const event = new CustomEvent('add-to-cart', {
        detail: product, 
        bubbles: true,  
        composed: true   
    });

    this.dispatchEvent(event);
}
}

// Definir el elemento personalizado
customElements.define('news-viewer', NewsViewer);
  

class ShoppingCart extends HTMLElement {
  constructor() {
      super();
      this.cart = []; // Lista de productos
  }

  connectedCallback() {
      this.renderCart();
      document.addEventListener('add-to-cart', this.handleAddToCart.bind(this));

      const cartIcon = document.getElementById('cart-icon');
      if (cartIcon) {
          cartIcon.addEventListener('click', this.toggleCartList.bind(this));
      } else {
          console.error("El elemento #cart-icon no existe.");
      }
  }

  handleAddToCart(event) {
      const product = event.detail;
      this.addToCart(product);
  }

  addToCart(product) {
      this.cart.push(product);
      this.updateCartCount();
  }

  updateCartCount() {
      const cartCount = document.getElementById('cart-count');
      if (!cartCount) {
          console.error("El elemento #cart-count no existe en el DOM.");
          return;
      }
      cartCount.textContent = this.cart.length;
  }

  toggleCartList() {
      const cartList = document.querySelector('#cart-list');
      if (!cartList) {
          console.error("El elemento #cart-list no existe en el DOM.");
          return;
      }
      cartList.classList.toggle('hidden');
      this.renderCart();
  }

  renderCart() {
    const cartList = this.querySelector('#cart-list');
    const cartEmptyMessage = this.querySelector('#cart-empty-message'); 

    cartList.innerHTML = ''; 

    if (this.cart.length === 0) {
        
        if (cartEmptyMessage) {
            cartEmptyMessage.style.display = 'block';  
        }
        cartList.style.display = 'none';  
    } else {
        if (cartEmptyMessage) {
            cartEmptyMessage.style.display = 'none';
        }
        cartList.style.display = 'block';  

        // Renderizar los productos en el carrito
        const template = document.getElementById('cart-item-template');
        this.cart.forEach((product, index) => {
            const cartItem = document.importNode(template.content, true);

            // Mostrar la imagen
            const imageElement = cartItem.querySelector('.cart-item-image');
            imageElement.src = product.image; 

            // Mostrar el título y el precio
            cartItem.querySelector('.cart-item-info').textContent = `${product.title} - ${product.price}`;

            // Eliminar producto del carrito
            cartItem.querySelector('.remove-item').addEventListener('click', () => this.removeFromCart(index));

            cartList.appendChild(cartItem);
        });
    }
}

  removeFromCart(index) {
      this.cart.splice(index, 1);
      this.updateCartCount();
      this.renderCart();
  }
}

// Define el elemento personalizado
customElements.define('shopping-cart', ShoppingCart);

class ProductDetails extends HTMLElement {
  constructor() {
    super();
    this.productID = new URLSearchParams(window.location.search).get('id');  // Obtener el ID del producto desde la URL
    this.product = {};  // Guardar los detalles del producto
  }

  connectedCallback() {
    if (this.productID) {
      this.loadProductDetails(this.productID);  // Cargar detalles si hay un ID
    } else {
      this.innerHTML = '<p>No se encontró el producto.</p>';
    }
  }

  async loadProductDetails(productID) {
    try {
      const response = await fetch(`https://products-foniuhqsba-uc.a.run.app/Drones/${productID}`);
      if (!response.ok) {
        throw new Error('Producto no encontrado');
      }
      const product = await response.json();
      this.product = product;  // Guardar el producto
      this.renderProductDetails();  // Renderizar los detalles
    } catch (error) {
      console.error('Error al cargar el producto:', error);
      this.innerHTML = '<p>Error al cargar el producto. Inténtalo nuevamente más tarde.</p>';
    }
  }

  renderProductDetails() {
    if (this.product && this.product.title) {
      this.innerHTML = `
        <div class="product-details">
          <img class="image" src="${this.product.image}" alt="${this.product.title}">
          <h1 class="title">${this.product.title}</h1>
          <p class="price">Precio: $${this.product.price}</p>
          <p class="rating">Rating: ${this.product.rating}</p>
          <p class="description">${this.product.description}</p>
        </div>
      `;
    } else {
      this.innerHTML = '<p>No se encontró el producto.</p>';
    }
  }
}
customElements.define('product-details', ProductDetails);

