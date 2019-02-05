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

let zero = [quotes[0].quote, quotes[0].source];
let one = [quotes[1].quote, quotes[1].source];
let two= [quotes[2].quote, quotes[2].source];
let three = [quotes[3].quote, quotes[3].source];
let four = [quotes[4].quote, quotes[4].source];

let newQuotes = [zero, one, two, three, four];

/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/
function getRandomQuote(){
  return newQuotes[Math.floor(Math.random() * newQuotes.length)]

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




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
