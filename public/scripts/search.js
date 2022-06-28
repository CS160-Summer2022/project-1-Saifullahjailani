function searchClicked(){
   var search_bar = document.getElementById("search-bar");
   self.location = "./../search-screen.html";
   print_f(search_bar.value);
}

function print_f(name){
    if(name==""){
        print_f_empty();
    }

}

function print_f_empty(){
    var box = document.getElementById("rating-box").appendChild(`<p class="header-font">
    Match Not Found
  </p>`);
    console.log("print")
}

const trails = [
    {
        "difficulty": "3",
        "name": "Awesome Trail",
        "Duration": "2 hr",
        "wildlife": "Buffalo, Tiger, Lion",
        "rating": "1",
        "distance": "12m",
        "elevation": "20m"
    },
    {
        "difficulty": "2",
        "name": "Good Trail",
        "Duration": "3 hr",
        "wildlife": "Buffalo, Tiger, Lion",
        "rating": "4",
        "distance": "100m",
        "elevation": "23m"
    },
    {
        "difficulty": "1",
        "name": "Best Trail",
        "Duration": "1 hr",
        "wildlife": "Buffalo, Tiger, Lion",
        "rating": "2",
        "distance": "60m",
        "elevation": "40m"
    },
    {
        "difficulty": "4",
        "name": "Wow Trail",
        "Duration": "0.5 hr",
        "wildlife": "Buffalo, Tiger, Lion",
        "rating": "3",
        "distance": "12m",
        "elevation": "26m"
    }, {
        "difficulty": "5",
        "name": "Foo Trail",
        "Duration": "15 min",
        "wildlife": "Buffalo, Tiger, Lion",
        "rating": "5",
        "distance": "12m",
        "elevation": "35m"
    },
];


