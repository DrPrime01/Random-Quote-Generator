const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const button = document.querySelector("button");
let twitter = document.getElementById("twitter")
let whatsapp = document.getElementById("whatsapp")
let instagram = document.getElementById("instagram")

let quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
"If life were predictable it would cease to be life, and be without flavor.",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
"Life is what happens when you're busy making other plans.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"When you reach the end of your rope, tie a knot in it and hang on.",
"Always remember that you are absolutely unique. Just like everyone else."
]

let authors = ["Nelson Mandela", "Walt Disney", "Steve Jobs", "Eleanor Roosevelt", "Oprah Winfrey", "James Cameron", "John Lennon", "Mother Teresa", "D. Roosevelt", "Magaret Mead"]



const change = function () {
    let randomQuote = Math.floor(Math.random() * quotes.length)
    let randomQuoteSelect = quotes[randomQuote];
        let author = '';
        if (randomQuote==0) {
            author = authors[0]
        }
        else if (randomQuote==1) {
            author = authors[1]
        }
        else if (randomQuote==2) {
            author == authors[2]
        }
        else if (randomQuote==3) {
            author = authors[3]
        }
        else if (randomQuote==4) {
            author = authors[4]
        }
        else if (randomQuote==5) {
            author = authors[5]
        }
        else if (randomQuote==6) {
            author = authors[6]
        }
        else if (randomQuote==7) {
            author = authors[7]
        }
        else if (randomQuote==8) {
            author = authors[8]
        }
        else {
            author = authors[9]
        }
    
    quoteAuthor.textContent = author;
    quote.textContent = randomQuoteSelect;
    console.log(randomQuoteSelect);

    let twitterAttr = `https://twitter.com/intent/tweet?text=+${randomQuoteSelect} \n ${author}`
        twitter.setAttribute("href", twitterAttr)
    let whatsappAttr = `whatsapp://send?text=+${randomQuoteSelect} \n ${author}`
        whatsapp.setAttribute("href", whatsappAttr)
    
}

change();