/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
let quotes = [
  { quote: "The only way to do great work is to love what you do",
    source: "Steve Jobs"
  },
  { quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
    source: "John Maxwell"
  },
  { quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
    source: "Jim Rohn"
  },
  { quote: "It's better to be a lion for a day than a sheep all your life.",
    source: "Elizabeth Kenny"
  },
  { quote: "Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.",
    source: "Anais Nin"
  }
];




/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/



function getRandomQuote(){
  let randomQuote = [Math.floor(Math.random() * quotes.length)]
    return quotes[randomQuote]
}


/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/
function printQuote() {
  let wisdom = getRandomQuote(quotes);
  let message = "";
  message += '<p class="quote">' + wisdom.quote + '.</p>';
  message += '<p class="source">' + wisdom.source + '</p>';
  return message
}
//<p class="quote">Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.</p>

//<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
