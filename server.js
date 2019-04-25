var quotes = ["It is what is", 
            "I can´t say over the phone",
            "Do you want the short or long version?",
            "It can be arranged",
            "You know, its a done deal", 
            "As we all know",
            "Waste of the money",
            "Royal family - they have Air Planes",
            "One might think so"];

function newQuote (){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById("randomQuote").textContent = randomQuote;
}

newQuote();

$("button").click(function(){
    newQuote();
  });

