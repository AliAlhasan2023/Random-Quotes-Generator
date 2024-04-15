let generateBtn = document.querySelector(".generate");
let autoBtn = document.querySelector(".auto");
let stopBtn = document.querySelector(".stop");
let quoteDiv = document.querySelector(".quote-display");
let quoteId = document.querySelector(".quote-id");
let author = document.querySelector(".author");
let autoStatus = document.querySelector(".auto-status");

let intervalId;

generateBtn.onclick = generateQute;
autoBtn.onclick = statAutoPaly;
stopBtn.onclick = stopAutoPaly;

async function getQuotes() {
  const response = await fetch("quotes.json");
  const data = await response.json();
  return data;
}

async function generateQute() {
  const quotes = await getQuotes();
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDiv.innerHTML = quote.text;
  quoteId.innerHTML = quote.id;
  author.innerHTML = `By: ${quote.author}`;
}

function statAutoPaly() {
  intervalId = setInterval(generateQute, 10000);
  autoStatus.innerHTML = "Auto: ON";
}

function stopAutoPaly() {
  clearInterval(intervalId);
  autoStatus.innerHTML = "";
}
