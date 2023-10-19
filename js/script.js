// COSTANTI
const userNameElem = document.getElementById("name");
const userKmElem = document.getElementById("distance");
const userAgeRangeElem = document.getElementById("ageRange")
const sendBtn = document.getElementById("send");
const deleteBtn = document.getElementById("delete")
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
  console.log(totalPrice)
  const message = totalPrice.toFixed(2);
  console.log(message)
  document.getElementById("price").innerHTML = message + "€";

  // OUTPUT
  ticketSection.classList.remove("hidden");

});

// Premo il tasto cancella
deleteBtn.addEventListener("click", function () {
  userName = "";
  userKm = "";
  userAgeRange = "";
  ticketSection.classList.add("hidden")
});