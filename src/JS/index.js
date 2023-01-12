// Selcting Elements

const nextBtn=document.querySelector(".next-btn");
const quote=document.querySelector(".quote");
const authorName=document.querySelector(".name");
const soundBtn=document.querySelector(".sound");
const copyBtn=document.querySelector(".copy");
const twitterBtn=document.querySelector(".twitter");





// Get Random Quote

function randomQuote(){
  // fetching random quotes froman api
  nextBtn.classList.add("loading");
  nextBtn.innerText="Loading Quote";
  fetch("https://api.quotable.io/random")
    .then((result)=> result.json())
    .then((data)=>{
    quote.innerText=data.content;
     nextBtn.innerText="New Quote";     nextBtn.classList.remove("loading");
    authorName.innerText=data.author;
  })
}

// Text to speech
function textToSpeech(){
  // Using Web Speech API
  
  let utterance=new SpeechSynthesisUtterance(`${quote.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
}

// Copy Quote to clipboard
function copyQuote(){
  navigator.clipboard.writeText(quote.innerText);
}

// Tweet the Quote in Twitter
function tweetQuote(){
  let tweetUrl=`https://twitter.com/intent.tweet?url=${quote.innerText}`
  window.open(tweetUrl, "_blank");
}



// Event Handlers

nextBtn.addEventListener("click",randomQuote)

soundBtn.addEventListener("click",textToSpeech);

copyBtn.addEventListener("click", copyQuote)


twitterBtn.addEventListener("click",tweetQuote);

