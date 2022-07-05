const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const addonsPrince = Object.values(product.addons);
const totalPrice = addonsPrince.reduce((a, b) => a + b);
console.log(totalPrice + product.price);
console.clear();

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li class="item">${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 0, // pagina corrente
  _per_page: 2, // numero di risultati per pagina

  get products() {
    /**
     * Qui dentro dovremmo riuscire a paginare i prodotti.
     * Possiamo procurarci un indice iniziale ed uno finale lavorando con this._page e this._per_page
     * */
    console.log("Stai leggendo i prodotti di ", this.name);
    const startIndex = 0; // ...
    const endIndex = 6; // ...
    const paginatedProducts = this._products

    return paginatedProducts;
  },

  set products(newProducts) {
    /**
     * Il consiglio è quello di spostare la parte di renderHTML dentro una funzione indipendente,
     * così da rendere il metodo più snello
     * **/

    this._products = newProducts;

    const productsHTML = this.products.map(getProductHTML).join("");
    document.body.innerHTML = `
		  <h2>Offerte lampo</h2>
		  <div class="container"><ul>${productsHTML}</ul></div>
		<div class="button">
		  <button id="1" class="button-one">1</button>
		  <button id="2" class="button-two">2</button>
		  <button id="3" class="button-three">3</button></div>
	 
	  `;
	  
  },



  set page(newPage) {
    /**
     * Aggiorniamo la pagina corrente.
     * Sarà che dobbiamo aggiornare il DOM anche qui?
     * */
  },

  renderHTML() {
    /**
     * Aggiorniamo il DOM stampando i risultati a schermo.
     * Avendo ora anche la paginazione, sarebbe il caso di mettere il nostro shop dentro un div specifico div.shop
     * con una struttura del genere
     * <body>
     *  div.shop -> aggiornato ad ogni chiamata della funzione
     *  div.pagination -> questo non si tocca mai
     * </body
     * e gestire la paginazione in modo separato, inserendo gli event listener una sola volta
     * **/
  },
};
shop.products = [
  {
    name: "tv",
    price: "1345",
  },
  {
    name: "pc",
    price: "875",
  },
  {
    name: "smartphone",
    price: 748,
  },
  {
    name: "lavatrice",
    price: "236",
  },
  {
    name: "aspirapolvere",
    price: "354",
  },

  {
    name: "mouse",
    price: "14",
  },
];

const button1 = document.querySelector('button[1]');