// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    "quote": "The only way to do great work is to love what you do.",
    "person": "Steve Jobs"
  },
  {
    "quote": "In the middle of difficulty lies opportunity.",
    "person": "Albert Einstein"
  },
  {
    "quote": "Success is not the key to happiness. Happiness is the key to success.",
    "person": "Albert Schweitzer"
  },
  {
    "quote": "Believe you can and you're halfway there.",
    "person": "Theodore Roosevelt"
  },
  {
    "quote": "The future belongs to those who believe in the beauty of their dreams.",
    "person": "Eleanor Roosevelt"
  },
  {
    "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
    "person": "Franklin D. Roosevelt"
  },
  {
    "quote": "Success usually comes to those who are too busy to be looking for it.",
    "person": "Henry David Thoreau"
  },
  {
    "quote": "Don't watch the clock; do what it does. Keep going.",
    "person": "Sam Levenson"
  },
  {
    "quote": "The best revenge is massive success.",
    "person": "Frank Sinatra"
  },
  {
    "quote": "Don't be afraid to give up the good to go for the great.",
    "person": "John D. Rockefeller"
  }
];

btn.addEventListener('click', function() {

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})
