/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//This code will be a multidimensional array, containing a bunch of arrays within one array.
const quotes = [
  {
    quote: `“You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don’t know what you believe, before that. You are too complex to understand yourself.”`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote to Chaos',
    year: 2018,
  },
  {
    quote: `Everything you value is a product of unimaginably lengthy developmental processes, personal, cultural, biological.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
  },
  {
    quote: `“Don’t underestimate the power of vision and direction. These are irresistible forces, able to transform what might appear to be unconquerable obstacles into traversable pathways and expanding opportunities.”`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
  },
  {
    quote: `“To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order. It means adopting the burden of self-conscious vulnerability, and accepting the end of the unconscious paradise of childhood, where finitude and mortality are only dimly comprehended. It means willingly undertaking the sacrifices necessary to generate a productive and meaningful reality (it means acting to please God, in the ancient language).”`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
  },
  {
    quote: `“There's some real utility in gratitude.”`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
  },
  {
    quote: `“When you have something to say, silence is a lie.”`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
  },
]

//end of array.



/***
 * `getRandomQuote` function
***/

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);
  let quoteBox = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">
      ${randomQuote.source}
      <span class="citation">${randomQuote.citation}</span>
      <span class="year">${randomQuote.year}</span>
    </p>
  `;
  document.getElementById('quote-box').innerHTML = quoteBox;
}




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);