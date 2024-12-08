var quotes = [
  {
    author: "-Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "-Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "-Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "-Helen Keller",
    quote: "Alone we can do so little; together we can do so much.",
  },
  {
    author: "-Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
  },
];

if (localStorage.getItem("quotes") == null) {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// console.log(getQuotes)
function Generate_Quotes() {
  var getQuotes = JSON.parse(localStorage.getItem("quotes"));

  let randomIndex = Math.floor(Math.random() * getQuotes.length); //--new length//
  // console.log(getQuotes)

  let result = getQuotes[randomIndex].quote;
  let show = getQuotes[randomIndex].author;
  console.log(result);

  document.getElementById("show-quote").innerHTML = result;
  document.getElementById("show-author").innerHTML = show;
}

function add() {
  let newQuote = document.querySelector(".input").value;
  let newAuthor = document.querySelector(".addition").value;

  let changeQuote = JSON.parse(localStorage.getItem("quotes"));

  let newChanges = { author: newAuthor, quote: newQuote };

  changeQuote.push(newChanges);

  localStorage.setItem("quotes", JSON.stringify(changeQuote));
  console.log(newChanges);

  alert("Quote-added");

  // function reSet(){
  //   document.querySelector(".form").reset();
  // }

  // document.querySelector(".addition").reset();
  document.querySelector(".input").value = "";
  document.querySelector(".addition").value = "";
}
