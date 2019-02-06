
// created an array of quotes

let quotes = [
  { quote: "The only way to do great work is to love what you do",
    source: "Steve Jobs",
    citation: "Stanford University Commencement Speach",
    year: 2005,
    tag: "*work*"
  },
  { quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
    source: "John Maxwell",
    tag: "*professional*"
  },
  { quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    source: "Jim Rohn",
    tag: "*professional*"
  },
  { quote: "It's better to be a lion for a day than a sheep all your life.",
    source: "Elizabeth Kenny",
    tag: "*life*"
  },
  { quote: "Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.",
    source: "Anais Nin",
    tag: "*life*"
  },
  {
    quote: "I don’t want you to overcome fear of failure. I want you to be afraid of failure.",
    source: "Jocko Willink",
    citation: "Discipline Equals Freedom",
    year: 2018,
    tag: "*professional*"
  }
];


// the getRandomQuote function generates a random number and returns an object form the array.

function getRandomQuote(array){
  let randomQuote = [Math.floor(Math.random() * quotes.length)]
    return quotes[randomQuote]
}


// assigns a variable to the object pulled from the array and converts it to an HTML string.
//the returned string will differ depending on the properties of the object.

function printQuote() {
  let wisdom = getRandomQuote(quotes);
  let message = "";
  if (wisdom.citation){
    message += '<p class="quote">' + wisdom.quote + '.</p>';
    message += '<p class="source">' + wisdom.source +
    '<span class="citation">' + wisdom.citation + '</span>' +
    '<span class="year">' + wisdom.year + '</span>'+
    '<span class="tag">'  + wisdom.tag  + '</span></p>';
  } else {
    message += '<p class="quote">' + wisdom.quote + '.</p>';
    message += '<p class="source">' + wisdom.source +
    '<span class="tag"> ' + wisdom.tag + '</span></p>';
  }

  document.getElementById("quote-box").innerHTML = message;
};
printQuote();

/***
  This line works so I'm just going to use it.
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
