var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};
$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

const openNav = document.querySelector(".mobile-nav-icons__open");
const closeNav = document.querySelector(".mobile-nav-icons__close");
const mobileNavBar = document.querySelector(".mobileNav");

openNav.addEventListener("click", function () {
  mobileNavBar.classList.add("showNav");
  openNav.classList.toggle("hidden");
  closeNav.classList.toggle("hidden");
  console.log("opened nav");
});

closeNav.addEventListener("click", function () {
  mobileNavBar.classList.remove("showNav");
  closeNav.classList.toggle("hidden");
  openNav.classList.toggle("hidden");
});
