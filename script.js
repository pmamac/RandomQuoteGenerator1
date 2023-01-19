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
    quote: `You can only find out what you actually believe (rather than what you think you believe) by watching how you act. You simply don’t know what you believe, before that. You are too complex to understand yourself.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote to Chaos',
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Everything you value is a product of unimaginably lengthy developmental processes, personal, cultural, biological.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Don’t underestimate the power of vision and direction. These are irresistible forces, able to transform what might appear to be unconquerable obstacles into traversable pathways and expanding opportunities.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018, 
    category: `Psychology`
  },
  {
    quote: `To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order. It means adopting the burden of self-conscious vulnerability, and accepting the end of the unconscious paradise of childhood, where finitude and mortality are only dimly comprehended. It means willingly undertaking the sacrifices necessary to generate a productive and meaningful reality (it means acting to please God, in the ancient language).`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018, 
    category: `Psychology`
  },
  {
    quote: `There's some real utility in gratitude.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `When you have something to say, silence is a lie.`,
    source: 'Jordan B. Peterson',
    citation: '12 Rules for Life | An Antidote for Chaos',
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Everything you value is a product of unimaginably lengthy developmental processes, personal, cultural, biological.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Don’t underestimate the power of vision and direction. These are irresistible forces, able to transform what might appear to be unconquerable obstacles into traversable pathways and expanding opportunities.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `To stand up straight with your shoulders back is to accept the terrible responsibility of life, with eyes wide open. It means deciding to voluntarily transform the chaos of potential into the realities of habitable order. It means adopting the burden of self-conscious vulnerability, and accepting the end of the unconscious paradise of childhood, where finitude and mortality are only dimly comprehended. It means willingly undertaking the sacrifices necessary to generate a productive and meaningful reality (it means acting to please God, in the ancient language).`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `There's some real utility in gratitude.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`

  },
  {
    quote: `When you have something to say, silence is a lie.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `It took untold generations to get you where you are. A little gratitude might be in order.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Strengthen the individual. Start with yourself. Take care with yourself. Define who you are. Refine your personality. Choose your destination and articulate your Being. As the great nineteenth-century German philosopher Friedrich Nietzsche so brilliantly noted, ‘He whose life has a why can bear almost any how.‘`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `It takes careful observation, and education, and reflection, and communication with others, just to scratch the surface of your beliefs.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`

  },
  {
    quote: `You must determine where you are going in your life, because you cannot get there unless you move in that direction. Random wandering will not move you forward. It will instead disappoint and frustrate you and make you anxious and unhappy and hard to get along with (and then resentful, and then vengeful, and then worse).`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Sometimes, when people have a low opinion of their own worth—or, perhaps, when they refuse responsibility for their lives—they choose a new acquaintance, of precisely the type who proved troublesome in the past. Such people don’t believe that they deserve any better—so they don’t go looking for it. Or, perhaps, they don’t want the trouble of better. Freud called this a ‘repetition compulsion.’ He thought of it as an unconscious drive to repeat the horrors of the past—sometimes, perhaps, to formulate those horrors more precisely, sometimes to attempt more active mastery and sometimes, perhaps, because no alternatives beckon. People create their worlds with the tools they have directly at hand. Faulty tools produce faulty results. Repeated use of the same faulty tools produces the same faulty results. It is in this manner that those who fail to learn from the past doom themselves to repeat it. It’s partly fate. It’s partly inability. It’s partly … unwillingness to learn? Refusal to learn? Motivated refusal to learn?`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `And if you think tough men are dangerous, wait until you see what weak men are capable of.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`

  },
  {
    quote: `We deserve some respect. You deserve some respect. You are important to other people, as much as to yourself. You have some vital role to play in the unfolding destiny of the world. You are, therefore, morally obliged to take care of yourself. You should take care of, help and be good to yourself the same way you would take care of, help and be good to someone you loved and valued. You may therefore have to conduct yourself habitually in a manner that allows you some respect for your own Being—and fair enough. But every person is deeply flawed. Everyone falls short of the glory of God. If that stark fact meant, however, that we had no responsibility to care, for ourselves as much as others, everyone would be brutally punished all the time. That would not be good. That would make the shortcomings of the world, which can make everyone who thinks honestly question the very propriety of the world, worse in every way. That simply cannot be the proper path forward.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `Order is not enough. You can’t just be stable, and secure, and unchanging, because there are still vital and important new things to be learned. Nonetheless, chaos can be too much. You can’t long tolerate being swamped and overwhelmed beyond your capacity to cope while you are learning what you still need to know. Thus, you need to place one foot in what you have mastered and understood and the other in what you are currently exploring and mastering. Then you have positioned yourself where the terror of existence is under control and you are secure, but where you are also alert and engaged. That is where there is something new to master and some way that you can be improved. That is where meaning is to be found.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `The better ambitions have to do with the development of character and ability, rather than status and power. Status you can lose. You carry character with you wherever you go, and it allows you to prevail against adversity.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `The successful among us delay gratification. The successful among us bargain with the future.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `If you’re going to insist on bending the world to your way, you better have your reasons. If you’re going to stand your ground, you better have your reasons. You better have thought them through. You might otherwise be in for a very hard landing.`,
    source: `Jordan B. Peterson`,
    citation:`12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
  {
    quote: `In the West, we have been withdrawing from our tradition-, religion- and even nation-centred cultures, partly to decrease the danger of group conflict. But we are increasingly falling prey to the desperation of meaninglessness, and that is no improvement at all.`,
    source: `Jordan B. Peterson`,
    citation: `12 Rules for Life | An Antidote for Chaos`,
    year: 2018,
    category: `Psychology`
  },
{
  quote: `RULE 4: Compare yourself to who you were yesterday, not to who someone else is today`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `Ideologies are substitutes for true knowledge, and ideologues are always dangerous when they come to power, because a simple-minded I-know-it-all approach is no match for the complexity of existence.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `To suffer terribly and to know yourself as the cause: that is Hell.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `So, attend carefully to your posture. Quit drooping and hunching around. Speak your mind. Put your desires forward, as if you had a right to them — at least the same right as others. Walk tall and gaze forthrightly ahead. Dare to be dangerous. Encourage the serotonin to flow plentifully through neural pathways desperate for its calming influence.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `Every bit of learning is a little death. Every bit of new information challenges a previous conception, forcing it to dissolve into chaos before it can be reborn as something better. Sometimes such deaths virtually destroy us.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `Perhaps you are overvaluing what you don’t have and undervaluing what you do.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
},
{
  quote: `So, listen, to yourself and to those with whom you are speaking. Your wisdom then consists not of the knowledge you already have, but the continual search for knowledge, which is the highest form of wisdom.`,
  source: `Jordan B. Peterson`,
  citation: `12 Rules for Life | An Antidote for Chaos`,
  year: 2018,
  category: `Psychology`
}
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
function printQuote() 
  const randomQuote = getRandomQuote(quotes);
  let quoteBox = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">
      ${randomQuote.source}
      <span class="citation">${randomQuote.citation}</span>
      <span class="year">${randomQuote.year}</span>
      <span class="category">${randomQuote.category}</span>
    </p>
  `;

  document.getElementById('quote-box').innerHTML = quoteBox;
  getRandomColors()
  function getRandomColors() {
    const color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    return color;
}






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);