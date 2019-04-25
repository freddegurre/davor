var quotes = ["It is what is", 
            "I can´t say over the phone",
            "Do you want the short or long version?",
            "It can be arranged",
            "You know, its a done deal", 
            "As we all know",
            "Waste of the money",
            "Royal family - they have Air Planes",
            "One might think so",
            "Bare in mind", 
            "This is all i can tell you right now",
            "That's about it",
            "Let me put it like this ...", 
            "This is Slavic way of doing business",
            "Lets put it this way",
            "I will say this only once", 
            "This is not the time and place to talk about it",
            "u can always dance on yacht in wheelchair"];

function newQuote (){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    document.getElementById("randomQuote").textContent = randomQuote;
}

newQuote();

$("button").click(function(){
    newQuote();
  });

