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

    class NewsViewer extends HTMLElement {
      constructor() {
        super();
        // Inicialización de los tags, si se pasan como atributo
        this.tags = this.getAttribute('tags') ? this.getAttribute('tags').split(',').map(tag => tag.trim().toLowerCase()) : [];
        console.log('Tags:', this.tags);
      }
    
      async connectedCallback() {
        try {
            // Cargar los productos cuando el componente se conecta al DOM
            const products = await this.loadProducts(this.tags);  // Esperar a que se resuelvan los productos
            this.renderProducts(products); // Luego renderizar los productos
    
            // Otros elementos como el cambio de vista, etc.
            const productContainer = this.querySelector('#product-container');
            if (productContainer) {
                productContainer.classList.add('grid-view');
            }
    
            const changeViewButton = document.getElementById('change-view');
            if (changeViewButton) {
                changeViewButton.addEventListener('click', () => {
                    this.toggleView();
                });
            }
        } catch (error) {
            console.error('Error en connectedCallback:', error);
        }
        const changeViewButton = document.getElementById('change-view');
if (changeViewButton) {
    changeViewButton.addEventListener('click', () => {
        this.toggleView();
    });
} else {
    console.error('El botón de cambio de vista no se encuentra en el DOM.');
}
    }
    
      // Alternar entre las vistas (grid y flex)
      toggleView() {
        const productContainer = this.querySelector('#product-container');
        if (productContainer) {
          if (productContainer.classList.contains('grid-view')) {
            productContainer.classList.remove('grid-view');
            productContainer.classList.add('flex-view');
          } else {
            productContainer.classList.remove('flex-view');
            productContainer.classList.add('grid-view');
          }
        }
      }
    
      async loadProducts(tags = []) {
        try {
            const response = await fetch(`https://products-foniuhqsba-uc.a.run.app/Drones`);
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const products = await response.json();
            console.log("Productos cargados desde la API:", products);
    
            // Filtramos los productos por los tags
            const filteredProducts = this.filterProductsByTags(products, tags);
    
            return filteredProducts; // Retornar los productos filtrados
        } catch (error) {
            console.error('Error:', error);
            this.innerHTML = `<p>Error al cargar los productos. Inténtelo nuevamente más tarde.</p>`;
            return []; // Retornar un array vacío en caso de error
        }
    }
    
    
      // Función para filtrar los productos por los tags
      filterProductsByTags(products, tags) {
        if (tags.length === 0) return products; // Si no hay tags, devolver todos los productos
    
        return products.filter(product => {
          // Si no tiene tags, devolverlo como "no filtrado"
          return product.tags.some(tag => {
            return tags.some(tagFilter => tag.toLowerCase().includes(tagFilter.toLowerCase()));
          });
        });
      }
    
      renderProducts(products) {
        console.log("Productos a renderizar:", products); // Verifica que los productos estén disponibles
    
        const template = document.getElementById('product-template');
        const productContainer = this.querySelector('#product-container');
        if (!productContainer) return; // Asegurarse de que el contenedor esté presente
    
        productContainer.innerHTML = ''; // Limpiar contenido previo
    
        products.forEach(product => {
          const productContent = document.importNode(template.content, true);
    
          productContent.querySelector('.image').src = product.image;
          productContent.querySelector('.title').textContent = product.title;
          productContent.querySelector('.price').textContent = product.price;
          productContent.querySelector('.rating').textContent = product.rating;
          productContent.querySelector('.description').textContent = product.short_description;
    
          const productLink = productContent.querySelector('.product-link');
          productLink.href = `product-details.html?id=${product.id}`;
    
          const addToCartButton = productContent.querySelector('.add-to-cart');
          addToCartButton.addEventListener('click', (event) => {
            event.stopPropagation();
            this.addToCart(product);
          });
    
          productLink.addEventListener('click', (event) => {
            event.preventDefault();
            this.showProductDetails(product.id);
          });
    
          productContainer.appendChild(productContent);
        });
      }
    
      showProductDetails(productId) {
        window.location.href = `product-details.html?id=${productId}`;
      }
    
      addToCart(product) {
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
    this.cart = this.getCartFromLocalStorage(); // Cargar carrito desde localStorage
  }

  connectedCallback() {
    this.renderCart();
    this.updateCartCount(); // Asegurarnos de actualizar el contador cuando se carga la página
    document.addEventListener('add-to-cart', this.handleAddToCart.bind(this));

    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
      cartIcon.addEventListener('click', this.toggleCartList.bind(this));
    } else {
      console.error("El elemento #cart-icon no existe.");
    }

    // Crear el diálogo para la confirmación de compra
    this.createPurchaseDialog();
  }

  // Obtener carrito desde localStorage
  getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : []; // Si no hay carrito, devolvemos un array vacío
  }

  // Guardar el carrito en localStorage
  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Guardar carrito como JSON
  }

  handleAddToCart(event) {
    const product = event.detail;
    this.addToCart(product);
  }

  addToCart(product) {
    this.cart.push(product); // Añadir producto al carrito
    this.saveCartToLocalStorage(); // Guardar carrito actualizado en localStorage
    this.updateCartCount();
  }

  // Actualizar el contador de productos en el carrito
  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (!cartCount) {
      console.error("El elemento #cart-count no existe en el DOM.");
      return;
    }
    cartCount.textContent = this.cart.length; // Actualizar el contador de productos en el carrito
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

    cartList.innerHTML = ''; // Limpiar el carrito

    if (this.cart.length === 0) {
      if (cartEmptyMessage) {
        cartEmptyMessage.style.display = 'block'; // Mostrar mensaje de carrito vacío
      }
      cartList.style.display = 'none'; // Ocultar lista de productos en el carrito
    } else {
      if (cartEmptyMessage) {
        cartEmptyMessage.style.display = 'none'; // Ocultar mensaje de carrito vacío
      }
      cartList.style.display = 'block'; // Mostrar lista de productos en el carrito

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

      // Renderizar el total y botón de compra
      this.renderCartFooter(cartList);
    }
  }

  renderCartFooter(cartList) {
    const total = this.cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

    const footer = document.createElement('div');
    footer.className = 'cart-footer';
    footer.style.padding = '10px 0';
    footer.style.borderTop = '1px solid #ddd';

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    totalElement.style.fontWeight = 'bold';
    totalElement.style.marginBottom = '10px';

    const purchaseButton = document.createElement('button');
    purchaseButton.textContent = 'Proceder al pago';
    purchaseButton.style.backgroundColor = '#00B0FF';
    purchaseButton.style.color = '#fff';
    purchaseButton.style.padding = '10px';
    purchaseButton.style.border = 'none';
    purchaseButton.style.borderRadius = '5px';
    purchaseButton.style.cursor = 'pointer';

    purchaseButton.addEventListener('click', this.handlePurchase.bind(this));

    footer.appendChild(totalElement);
    footer.appendChild(purchaseButton);

    cartList.appendChild(footer);
  }

  handlePurchase() {
    // Mostrar el diálogo de confirmación de compra
    const purchaseDialog = document.getElementById('purchase-dialog');
    purchaseDialog.showModal();

    // Vaciar el carrito después de la compra
    this.cart = [];
    this.saveCartToLocalStorage();
    this.updateCartCount();
    this.renderCart();
  }

  createPurchaseDialog() {
    const dialog = document.createElement('dialog');
    dialog.id = 'purchase-dialog';
    dialog.style.padding = '20px';
    dialog.style.borderRadius = '8px';
    dialog.style.textAlign = 'center';

    const message = document.createElement('p');
    message.textContent = 'Gracias por tu compra. Tu pedido ha sido confirmado.';
    message.style.marginBottom = '20px';

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar';
    closeButton.style.backgroundColor = '#007bff';
    closeButton.style.color = '#fff';
    closeButton.style.padding = '10px';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', () => dialog.close());

    dialog.appendChild(message);
    dialog.appendChild(closeButton);

    document.body.appendChild(dialog);
  }

  removeFromCart(index) {
    this.cart.splice(index, 1); // Eliminar producto del carrito
    this.saveCartToLocalStorage(); // Guardar carrito actualizado en localStorage
    this.updateCartCount(); // Actualizar el contador
    this.renderCart();
  }
}

// Definir el componente personalizado
customElements.define('shopping-cart', ShoppingCart);



class ProductDetails extends HTMLElement {
  constructor() {
      super();
      this.productId = null;
  }

  connectedCallback() {
      // Obtener el id del producto desde la URL
      const urlParams = new URLSearchParams(window.location.search);
      this.productId = urlParams.get('id');

      if (this.productId) {
          this.loadProductDetails(this.productId);
      } else {
          this.innerHTML = `<p>Producto no encontrado.</p>`;
      }
  }

  async loadProductDetails(productId) {
      try {
          const response = await fetch(`https://products-foniuhqsba-uc.a.run.app/Drones/${productId}`);
          if (!response.ok) {
              throw new Error('Producto no encontrado');
          }

          const product = await response.json();
          this.renderProductDetails(product);
      } catch (error) {
          console.error('Error:', error);
          this.innerHTML = `<p>Error al cargar los detalles del producto. Inténtelo nuevamente más tarde.</p>`;
      }
  }

  renderProductDetails(product) {
      console.log("Detalles del producto:", product);

      if (!product) {
          this.innerHTML = `<p>Producto no encontrado.</p>`;
          return;
      }

      this.innerHTML = `
          <h1>${product.title}</h1>
          <img src="${product.image}" alt="${product.title}" style="width: 300px;">
          <p><strong>Precio:</strong> ${product.price}</p>
          <p><strong>Descripción:</strong> ${product.description}</p>
          <p><strong>Valoración:</strong> ${product.rating}</p>
          <p><strong>Fecha</strong> ${product.date}</p>
          <p><strong>Categoría:</strong> ${product.category}</p> <!-- Mostrar categoría -->
        
          <!-- Mostrar los tags del producto -->
          <p><strong>Tags:</strong> ${product.tags.join(', ')}</p> <!-- Mostrar tags como lista separada por coma -->
              <!-- Mostrar las características del producto -->
          <h3>Características:</h3>
          <ul>
              ${product.features.map(feature => {
                  return `
                      <li><strong>${feature.type.charAt(0).toUpperCase() + feature.type.slice(1)}:</strong> ${feature.value}</li>
                  `;
              }).join('')}
          </ul> 
          <br/>
          



          <button class="add-to-cart">Añadir a la cesta</button>
      `;

      const addToCartButton = this.querySelector('.add-to-cart');
      addToCartButton.addEventListener('click', () => this.addToCart(product));
  }

  addToCart(product) {
      const event = new CustomEvent('add-to-cart', {
          detail: product,
          bubbles: true,
          composed: true
      });
      this.dispatchEvent(event);
  }
}

customElements.define('product-details', ProductDetails);

// Selecciona el contenedor de productos dentro de <news-viewer> y el botón
const productContainer = document.querySelector('news-viewer').querySelector('#product-container');
const changeViewButton = document.getElementById('change-view');

// Inicializa con vista de grid
productContainer.classList.add('grid-view');

// Agrega funcionalidad para alternar
changeViewButton.addEventListener('click', () => {
  if (productContainer.classList.contains('grid-view')) {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('flex-view');
  } else {
    productContainer.classList.remove('flex-view');
    productContainer.classList.add('grid-view');
  }
});

document.getElementById('sort-rating').addEventListener('click', () => {
  const products = [...document.querySelectorAll('.product')];

  products.sort((a, b) => {
      const ratingA = parseFloat(a.querySelector('.rating').textContent);
      const ratingB = parseFloat(b.querySelector('.rating').textContent);
      return ratingB - ratingA; // Rating mayor primero
  });

  // Reordenar productos en el DOM
  const container = document.querySelector('.products');
  container.innerHTML = '';
  products.forEach(product => container.appendChild(product));
});

