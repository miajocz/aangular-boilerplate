//toggle button
const details = document.querySelector('summary');

function showOrHideDesc() {
  if (document.querySelector(".description").hidden == true){
    document.querySelector(".description").hidden = false;
  }
  else {
    document.querySelector(".description").hidden = true;

  }
}

function changeBackColor() {
  /*
not sure about this
  */
  if (document.querySelector(".wrapper").style.backgroundColor == 'white') {
    document.querySelector(".wrapper").style.backgroundColor = 'red';
  } else {
    document.querySelector(".wrapper").style.backgroundColor = 'white';
  }
}

function changeHeading() {
  document.querySelector(".header").innerHTML = "<h1>something else</h1>";
}

document.querySelector(".dup-button").addEventListener("click", (e) => {
  const card = document.querySelector(".wrapper");
  const cardCopy = card.cloneNode(true);
  card.appendChild(cardCopy);
  card.parentNode.insertBefore(cardCopy, card.nextSibling);
  
});

function deleteCard() {
  const card = document.querySelector(".wrapper");
  card.remove();
}