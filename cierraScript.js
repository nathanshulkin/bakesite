// Nathan Shulkin
// Cierra's Baker script

const app = document.getElementById('root');

const head = document.createElement('div');
head.setAttribute('class', 'logoCard');

const headImg = document.createElement('img');
headImg.src="cierraLogo/LogoFiles/ForWeb/medium.png";

head.appendChild(headImg);

const bio = document.createElement('h2');
bio.textContent="Delicious and Safe Homemade Sweets Straight Out Of Colorado Springs, Colorado";

// create contact description
const contact = document.createElement('h2');
contact.textContent="Send an email to BarnardBaking@gmail.com to place your order or ask about prices.";


// create upper menu
const menuUp = document.createElement('div');
menuUp.setAttribute('class', 'menuUp');

const menuLong = document.createElement('div');
menuLong.setAttribute('class', 'thinCard');

const logoMenu = document.createElement('div');
logoMenu.setAttribute('class', 'tinyLogoCard');
const logoImg = document.createElement('img');
logoImg.src = "cierraLogo/LogoFiles/ForWeb/small.png"

logoMenu.appendChild(logoImg);
menuUp.appendChild(logoMenu);

const custom = document.createElement('div');
custom.setAttribute('class', 'tinyCard');
const customTxt = document.createElement('p');
customTxt.textContent="Menu";

custom.addEventListener("click", menuClick);

function menuClick() {
  alert("Workin' on the menu.");
}

const cater = document.createElement('div');
cater.setAttribute('class', 'tinyCard');
const caterTxt = document.createElement('p');
caterTxt.textContent="Place an Order";

cater.addEventListener("click", learnClick);

function learnClick() {
  parent.location='mailto:barnardbaking@gmail.com';

}

const about = document.createElement('div');
about.setAttribute('class', 'tinyCard');
const aboutTxt = document.createElement('p');
aboutTxt.textContent="About Us";

about.addEventListener("click", aboutClick);

function aboutClick() {
  alert("working on the About Us page.");
}

const favorites = document.createElement('div');
favorites.setAttribute('class', 'tinyCard');
const favTxt = document.createElement('p');
favTxt.textContent="Our Favorites";

favorites.addEventListener("click", favClick);

function favClick() {
  window.scrollTo(0, 2100);
}

const us = document.createElement('div');
us.setAttribute('class', 'tinyCard');
const usTxt = document.createElement('p');
usTxt.textContent="Find Us Online";

us.addEventListener("click", usClick);

function usClick() {
  window.scrollTo(0, 1775);
}

//add menu
menuLong.appendChild(custom);
menuLong.appendChild(cater);
menuLong.appendChild(about);
menuLong.appendChild(us);
menuLong.appendChild(favorites);
custom.appendChild(customTxt);
cater.appendChild(caterTxt);
favorites.appendChild(favTxt);
us.appendChild(usTxt);
about.appendChild(aboutTxt);

menuUp.appendChild(menuLong);


// display bakery menu
const bakeryMenu = document.createElement('div');
bakeryMenu.setAttribute('class', 'container');

const bakeryMenuCard = document.createElement('div');
bakeryMenuCard.setAttribute('class', 'fullCard');

const bakeryMenuImg = document.createElement('img');
bakeryMenuImg.src = "getBakedMenu1.png";

bakeryMenuCard.appendChild(bakeryMenuImg);
bakeryMenu.appendChild(bakeryMenuCard);


// our favorites tab
const favTab = document.createElement('h2');
favTab.textContent="Our Favorites";

// create container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// create red velvet cupcake element
const redVelvCard = document.createElement('div');
redVelvCard.setAttribute('class', 'card');
const redVelvImg = document.createElement('img');
redVelvImg.src="redVelvetCup.png";
const redVelvTxt = document.createElement('p');
redVelvTxt.textContent = "Red Velvet Cupcakes";

redVelvCard.addEventListener("click", redVelvClick);

function redVelvClick() {
  window.open("redVelvetCup.png");
}

// create cheesecake element
const cheeseCakeCard = document.createElement('div');
cheeseCakeCard.setAttribute('class', 'card');
const cheeseCakeImg = document.createElement('img');
cheeseCakeImg.src="cake.png";
const cheeseCakeTxt = document.createElement('p');
cheeseCakeTxt.textContent = "Strawbery Cheesecake";

cheeseCakeCard.addEventListener("click", cheeseCakeClick);

function cheeseCakeClick() {
  window.open("cake.png");
}


// create fruity pebbles cupcake element
const fPeb = document.createElement('div');
fPeb.setAttribute('class', 'card');
const fPebImg = document.createElement('img');
fPebImg.src="fPebbles.png";
const fPebTxt = document.createElement('p');
fPebTxt.textContent ="Fruity Pebble Cupcakes";

fPeb.addEventListener("click", fPebClick);

function fPebClick() {
  window.open("fpebbles.png");
}

// chocolate cupcakes
const chocoCup = document.createElement('div');
chocoCup.setAttribute('class', 'card');
const chocoCupImg = document.createElement('img');
chocoCupImg.src="chocoCup.png";
const chocoCupTxt = document.createElement('p');
chocoCupTxt.textContent="Triple Chocolate Cupcakes";

chocoCup.addEventListener("click", chocoCupClick);

function chocoCupClick() {
  window.open("chocoCup.png");
}


// cookies
const cookie = document.createElement('div');
cookie.setAttribute('class', 'card');
const cookieImg = document.createElement('img');
cookieImg.src="cookies.png";
const cookieTxt = document.createElement('p');
cookieTxt.textContent="Chocolate Chip Cookies - $10 for a dozen";

cookie.addEventListener("click", cookieClick);

function cookieClick() {
  window.open("cookies.png");
}

// pecan pie
const pPie = document.createElement('div');
pPie.setAttribute('class', 'card');
const pPieImg = document.createElement('img');
pPieImg.src="pecanPie.png";
const pPieTxt = document.createElement('p');
pPieTxt.textContent="Pecan Pie - $15";

pPie.addEventListener("click", pPieClick);

function pPieClick() {
  window.open("pecanPie.png");
}
// add text
container.appendChild(favTab);

// add fPeb
container.appendChild(fPeb);
fPeb.appendChild(fPebImg);
fPeb.appendChild(fPebTxt);

// add cheeseCake
container.appendChild(cheeseCakeCard);
cheeseCakeCard.appendChild(cheeseCakeImg);
cheeseCakeCard.appendChild(cheeseCakeTxt);

// add red velv
container.appendChild(redVelvCard);
redVelvCard.appendChild(redVelvImg);
redVelvCard.appendChild(redVelvTxt);

// add chococupp
container.appendChild(chocoCup);
chocoCup.appendChild(chocoCupImg);
chocoCup.appendChild(chocoCupTxt);



// social media
const social = document.createElement('div');
social.setAttribute('class', 'container');

const findUs = document.createElement('h2');
findUs.textContent="Find Us Online";

//instagram
const insta = document.createElement('div');
insta.setAttribute('class', 'smallCard');
const instaLogo = document.createElement('img');
instaLogo.src="instagramLogo.png";
insta.appendChild(instaLogo);

// how to make stuff clickable
insta.addEventListener("click", instaClick);

function instaClick() {
  window.open("https://instagram.com/getbakedcolorado");
}

//facebook
const fb = document.createElement('div');
fb.setAttribute('class', 'smallCard');
const fbLogo = document.createElement('img');
fbLogo.src="facebookLogo.png";
fb.appendChild(fbLogo);

fb.addEventListener("click", fbOpen);

function fbOpen() {
  window.open("https://facebook.com/getbakedcolorado");
}

//twitter
const twit = document.createElement('div');
twit.setAttribute('class', 'smallCard');
const twitLogo = document.createElement('img');
twitLogo.src="twitterLogo.png";
twit.appendChild(twitLogo);

twit.addEventListener("click", twitOpen);

function twitOpen() {
  window.open("https://twitter.com");
}

// add to social
social.appendChild(findUs);
social.appendChild(fb);
social.appendChild(insta);
social.appendChild(twit);


// create clickable menu for webpage, add it to dropdown 
const menuDDown = document.createElement('div');
menuDDown.setAttribute('id', 'myDropdown');
menuDDown.setAttribute('class', 'dropdown-content');


// create drop down
const ddown = document.createElement('div');
ddown.setAttribute('class', 'dropbtn');
ddown.addEventListener("click", dropdownClick);
ddown.textContent="get baked";

ddown.appendChild(menuDDown);

// drop down button click
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClick() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// add elements to page
app.appendChild(menuUp);
//app.appendChild(ddown);
app.appendChild(head);
app.appendChild(bio);
app.appendChild(bakeryMenu);
app.appendChild(social);
app.appendChild(container);
app.appendChild(contact);
