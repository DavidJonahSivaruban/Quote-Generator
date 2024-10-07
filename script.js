const quotes= [
"When Life Hits You, Keep Moving Forward - Rocky",
"Keep Moving Forward - Sly",
"Why Do We Fall? So We Can Learn To Pick Ourselves Up - Alfred",
]

const images =[
"guy1.jpg",
"chick1.jpg",
"chicke2.jpg",
]

function setQuote() {
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];
const randomPhoto = images[randomIndex];
const quoteParts = randomQuote.split(' - ');
console.log(quoteParts);
quote.innerHTML = quoteParts [0];
author.innerHTML = `- ${quoteParts[1]}`;
document.getElementById("image").src = randomPhoto;
}