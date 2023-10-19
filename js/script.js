// COSTANTI
const userNameElem = document.getElementById("name");
const userKmElem = document.getElementById("distance");
const userAgeRangeElem = document.getElementById("ageRange")
const sendBtn = document.getElementById("send");
const deleteBtn = document.getElementById("delete");
const ticketSection = document.getElementById("ticket");



// Premo il tasto invia
sendBtn.addEventListener("click", function () {

  // RACCOLTA DATI UNPUT
  const userName = userNameElem.value;
  const userKm = parseFloat(userKmElem.value);
  const userAgeRange = userAgeRangeElem.value;
  console.log(userName, userKm, userAgeRange);
  let totalPrice = "";

  // COSTANTI
  const elderDiscount = 60 / 100;
  const minorDiscount = 80 / 100;
  const normalPrice = userKm * 0.21;

  // LOGICA
  if (userAgeRange === "elder") {
    totalPrice = normalPrice * elderDiscount;
  } else if (userAgeRange === "minor") {
    totalPrice = normalPrice * minorDiscount;
  } else {
    totalPrice = normalPrice;
  }
  console.log(totalPrice);

  // preparazioni constati per output
  const message = totalPrice.toFixed(2);
  console.log(message);

  const codeCPrandom = Math.floor(Math.random() * 99999) + 1;
  const wagonNumber = Math.floor(Math.random() * 7) + 5;

  // OUTPUT

  ticketSection.classList.remove("hidden");
  document.getElementById("price").innerHTML = message + "€";
  document.getElementById("passenger-name").innerHTML = userName;
  document.getElementById("codeCP").innerHTML = codeCPrandom;
  document.getElementById("wagon-nbr").innerHTML = wagonNumber;

});

// Premo il tasto cancella
deleteBtn.addEventListener("click", function () {
  userNameElem.value = "";
  userKmElem.value = "";
  userAgeRangeElem.value = "";
  ticketSection.classList.add("hidden");
});