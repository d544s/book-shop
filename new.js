let fragment = document.createDocumentFragment();

const header = document.createElement("header");
header.setAttribute("id","header");
header.className = "header";
document.body.appendChild(header);


const shopName = document.createElement("h1");
shopName.textContent += "Avgustus" ;
shopName.className = "nameShop";
header.appendChild(shopName);

const shopTitle = document.createElement("h4");
shopTitle.textContent += "INDEPEND BOOKSELLER";
shopTitle.className = "nameShop";
shopTitle.className = "shopTitle";
header.appendChild(shopTitle);



const searchImg = document.createElement("img");
searchImg.src = "./images/search.png";
searchImg.className = "searchImg";
header.appendChild(searchImg);

const logoImg = document.createElement("img");
logoImg.src = "./images/askgroup.png";
logoImg.className = "logoImg";
header.appendChild(logoImg);


// nav menu


const navMenu = document.createElement("nav");
navMenu.className = "navMenu";
header.appendChild(navMenu);

let navUl = document.createElement("ul");
navMenu.appendChild(navUl);

 let about =  document.createElement('li');
 let aboutBtn = document.createElement('button');
 aboutBtn.textContent += "About";
 aboutBtn.className = "navItem";
 about.appendChild(aboutBtn);
 navUl.appendChild(about);

 let booksNav =  document.createElement('li');
 let booksBtn = document.createElement('button');
 booksBtn.textContent += "Books";
 booksBtn.className = "navItem";
 booksNav.appendChild(booksBtn);
 navUl.appendChild(booksNav);

 let events =  document.createElement('li');
 let eventsBtn = document.createElement('button');
 eventsBtn.textContent += ("Events");
 eventsBtn.className = "navItem";
 events.appendChild(eventsBtn);
 navUl.appendChild(events);

 let subscriptions =  document.createElement('li');
 let subscriptionsBtn = document.createElement('button');
 subscriptionsBtn.textContent += ("Subscriptions");
 subscriptionsBtn.className = "navItem";
 subscriptions.appendChild(subscriptionsBtn);
 navUl.appendChild(subscriptions);

 let contact =  document.createElement('li');
 let contactBtn = document.createElement('button');
 contactBtn.textContent += ("Contacts");
 contactBtn.className = "navItem";
 contact.appendChild(contactBtn);
 navUl.appendChild(contact);

 // main img

 const mainImg = document.createElement("img");
 mainImg.src = "./images/marylebone_edited.jpg.webp";
 mainImg.className = "mainImg";
 document.body.appendChild(mainImg);


// books menu title
const booksMenuTitle = document.createElement("h2");
booksMenuTitle.textContent += "BOOKS CATALOG";
booksMenuTitle.className = "booksMenuTitle";
document.body.appendChild(booksMenuTitle);








let cart = document.createElement('div');
cart.classList.add("cart");
cart.setAttribute("ondrop", "drop(event)");
cart.innerHTML = '<img src="./images/bag.png" alt="cart" ></img>';
cart.setAttribute("ondragover", "allowDrop(event)");


let cartcount = document.createElement('div');
cartcount.classList.add("cartcount");

header.append(cartcount);
header.append(cart);

let wrapper = document.createElement('div');
wrapper.classList.add("wrapper");


let main = document.createElement('main');
document.body.append(main);
let mainGrid = document.createElement('div');
mainGrid.classList.add("main-grid");
main.append(mainGrid);
wrapper.append(main);
let cartContent = document.createElement('div');
cartContent.classList.add("cart-content");

  let cartTotalPrice = document.createElement('div');
  cartTotalPrice.classList.add("cart-total-price");

  let confirmBtn = document.createElement('button');
  confirmBtn.classList.add("confirm-btn");
  confirmBtn.innerHTML = 'Order';

  let hr = document.createElement('hr');
  cartContent.insertAdjacentElement("beforeEnd", cartTotalPrice);
  cartContent.insertAdjacentElement("beforeEnd", confirmBtn);
  cartContent.insertAdjacentElement("beforeEnd", hr);

header.append(cartContent);

fragment.appendChild(wrapper);

document.body.appendChild(fragment);

let books =  [{
   "author": "Douglas Crockford",
   "imageLink": "./images/JavaScript.jpg",
   "title": "JavaScript: The Good Parts: The Good Parts",
   "price": 30,
   "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
 },
   {
     "author": "David Herman",
     "imageLink": "./images/EffectiveJavaScript.jpg",
     "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
     "price": 22,
     "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You???ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
   },
   {
     "author": "David Flanagan",
     "imageLink": "./images/DavidFlanagan.jpg",
     "title": "JavaScript: The Definitive Guide",
     "price": 40,
     "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
   },
   {
     "author": " Eric Elliott",
     "imageLink": "./images/EricElliott.jpg",
     "title": "Programming JavaScript Applications",
     "price": 19,
     "description": "Take advantage of JavaScript???s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that???s easier???yes, easier???to work with as your code base grows."
   },
   {
     "author": "Addy Osmani",
     "imageLink": "./images/AddyOsmani.jpg",
     "title": "Learning JavaScript Design Patterns",
     "price": 32,
     "description": "With Learning JavaScript Design Patterns, you???ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
   },
   {
     "author": "Boris Cherny",
     "imageLink": "./images/BorisCherny.jpg",
     "title": "Programming TypeScript",
     "price": 28,
     "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That???s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
   },
   {
     "author": "Alex Banks, Eve Porcello",
     "imageLink": "./images/AlexBanks_.jpg",
     "title": "Learning React, 2nd Edition",
     "price": 25,
     "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
   },
   {
     "author": "Bradley Meck Alex Young and Mike Cantelon",
     "imageLink": "./images/BradleyMeck.jpg",
     "title": "Node.js in Action",
     "price": 38,
     "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
   },
   {
     "author": "Kyle Simpson",
     "imageLink": "./images/KyleSimpson.jpg",
     "title": "You Don't Know JS Yet: Get Started",
     "price": 26,
     "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
   },
   {
     "author": "John Resig and Bear Bibeault",
     "imageLink": "./images/JohnResig.jpg",
     "title": "Secrets of the JavaScript Ninja",
     "price": 33,
     "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
   }
 ]

function createCatalog(book){
  let bookCard = document.createElement('div');
  bookCard.classList.add("bookCard");
  bookCard.setAttribute('data-bookcard', `${book.author}`)

   let bookCardHead = document.createElement('div');
  bookCardHead.classList.add("book-card-head");

  let cardHeading = document.createElement('h2');
  cardHeading.classList.add("card-heading");
  cardHeading.innerHTML = `${book.title}`;

  let cardAuthor = document.createElement('p');
  cardAuthor.classList.add("book-author")
  cardAuthor.innerHTML = `${book.author}`;

  bookCardHead.append(cardHeading);
  bookCardHead.append(cardAuthor);

  let price = document.createElement('h3');
  price.innerHTML = `$ ${book.price}`;
  price.classList.add("price");

  let descriptionBlock = document.createElement('div');
  descriptionBlock.classList.add("descriptionBlock");

  let description = document.createElement('p');
  description.innerHTML = `${book.description}`;
  description.classList.add("description");

  let cross = document.createElement('button');
  cross.innerHTML = `X`;
  cross.classList.add("cross");
  descriptionBlock.prepend(cross);

  let btnBuy = document.createElement('button');
  btnBuy.innerHTML = "Add To Cart";
  btnBuy.classList.add("btn-buy");
  btnBuy.setAttribute('data-btn', `${book.author}`)
  btnBuy.addEventListener("click", match);
  function match(event){
    if(btnBuy.dataset.btn == bookCard.dataset.bookcard){
       let cartCard = createCartContent(book);
       cartContent.append(cartCard);
    }

  }

  let btnLearn = document.createElement('button');
  btnLearn.innerHTML = "Show more";
  btnLearn.classList.add("btn-learn");

  let bookImage = document.createElement('div');
  bookImage.innerHTML = `<img src=${book.imageLink}></img>`;
  bookImage.classList.add("book-image");
  bookImage.setAttribute('data-image', `${book.author}`)
  bookImage.setAttribute("draggable", "true");
  bookImage.setAttribute("ondragstart", "drag(event)");
  bookImage.addEventListener("click", allowDrop);
  cart.setAttribute("ondrop", "drop(event)");
  cart.setAttribute("ondragover", "allowDrop(event)");
  cart.setAttribute("ondrop", "drop(event)");
  cart.setAttribute("ondragover", "allowDrop(event)");

    bookCard.append(bookImage);
  bookCard.append(bookCardHead);
  bookCard.append(price);
  descriptionBlock.append(description)
  descriptionBlock.append(btnBuy);
  descriptionBlock.append(btnLearn);
  bookCardHead.append(descriptionBlock);

  return bookCard;
}


books.forEach(book=>{
  let card = createCatalog(book);
  mainGrid.append(card);
});

let total = 0;
function createCartContent(book){
  let bookAdded = document.createElement('div');
  bookAdded.classList.add("book-added");
  let cartBookImage = document.createElement('div');
  cartBookImage.innerHTML = `<img src=${book.imageLink}></img>`;
  cartBookImage.classList.add("cart-book-image");
   let cartBookHeading = document.createElement('span');
   cartBookHeading.innerHTML = `${book.title} <p>${book.author}</p>`;
   cartBookHeading.classList.add("cart-card-heading");
  let price = document.createElement('h3');
  price.innerHTML = `$ ${book.price}`;
  price.classList.add("cart-price");
  let bookPrice = Number(book.price);
  total = total + bookPrice;

  let hr = document.createElement('hr');
  let removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerHTML = 'Remove from cart';

  bookAdded.append(cartBookImage);
  bookAdded.append(cartBookHeading);
  bookAdded.append(price);
  bookAdded.append(removeBtn);
  bookAdded.append(hr);

  removeBtn.addEventListener("click", removeBook);
  function removeBook(event){
    total = total - bookPrice;
    bookAdded.remove();
    cartTotalPrice.innerHTML = 'Total price: $ ' + total;
    count--;
    cartcount.innerHTML = `<h2>${count}</h2>`;
    if(count===0){
    cartContent.classList.remove("cart-content-show");
    cartcount.innerHTML = ``;
  }
  }
  cartTotalPrice.innerHTML = 'Total price: $ ' + total;

  return bookAdded;
}

let buyAction = document.querySelectorAll(".btn-buy");

let count = 0;
for(let x of buyAction){
x.addEventListener("click", addToCart);
function addToCart(event){

  count++;

  cartcount.innerHTML = `<h2>${count}</h2>`;
  cartContent.classList.add("cart-content-show");
   }
  }


  let crosses = document.querySelectorAll(".cross");
  for(let cross of crosses){
    let closest = cross.closest('div');
    cross.addEventListener("click", close);
    function close(event){
      closest.classList.add("descriptionBlock");
      closest.classList.remove("descriptionBlock-show")
    }
  }

let learnAction = document.querySelectorAll(".btn-learn");
for(let y of learnAction){
let closest = y.closest('div');
y.addEventListener("click", showDescription);
 function showDescription(event){
  closest.classList.toggle("descriptionBlock-show");}
  }

let imgeToDrag = document.querySelectorAll(".book-image");
for(let el of imgeToDrag){

  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");

    let dataSlice = data.slice(32);
    let sliceInt = dataSlice.match(/\d+/)[0];
    count++;
    cartcount.innerHTML = `<h2>${count}</h2>`;
     cartContent.classList.add("cart-content-show");
         let bookToDragToCart = createCartContent(books[sliceInt-1]);
         cartContent.append(bookToDragToCart);

    }}


 function allowDrop(event) {
  event.preventDefault();
  }

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
 }

 cart.addEventListener("click", showHide);
 function showHide(event){
  cartContent.classList.toggle("cart-content-show");
 }

  document.querySelector(".confirm-btn").onclick = function () {
    location.href = "delivery/index.html";
  };
