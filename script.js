var quotes = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "Helen Keller",
    quote: "Alone we can do so little; together we can do so much.",
  },
  {
    author: "Steve Jobs",
    quote: "Innovation distinguishes between a leader and a follower.",
  },
];


localStorage.setItem("quotes" , JSON.stringify(quotes))


var getQuotes = JSON.parse(localStorage.getItem("quotes"))

console.log(getQuotes)
