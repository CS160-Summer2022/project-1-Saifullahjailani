"use strict";
const trails = [
    {
        "Difficulty": "3",
        "Name": "Awesome Trail",
        "Duration": "2 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "1",
        "Distance": "12m",
        "Elevation": "20m"
    },
    {
        "Difficulty": "2",
        "Name": "Good Trail",
        "Duration": "3 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "4",
        "Distance": "100m",
        "Elevation": "23m"
    },
    {
        "Difficulty": "1",
        "Name": "Best Trail",
        "Duration": "1 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "2",
        "Distance": "60m",
        "Elevation": "40m"
    },
    {
        "Difficulty": "4",
        "Name": "Wow Trail",
        "Duration": "0.5 hr",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "3",
        "Distance": "12m",
        "Elevation": "26m"
    }, {
        "Difficulty": "5",
        "Name": "Foo Trail",
        "Duration": "15 min",
        "Wildlife": "Buffalo, Tiger, Lion",
        "Rating": "5",
        "Distance": "12m",
        "Elevation": "35m"
    },
];

function print_f(){
    var key = localStorage.getItem("search");
    localStorage.removeItem("search");
    console.log(key);
    if(key==""){
        print_f_empty();
    } else
    {
        print_search(key);
    }

}

function print_f_empty(){
    
    var box = document.getElementById("Rating-box");
    box.innerHTML = `
    <p class="header-font" id="Rating">
    Match Not Found
    </p>
    `;

}
document.addEventListener("DOMContentLoaded", print_f());


function print_card(elem){
    console.log("here");
    var grid = document.getElementById("simple-grid-i");
    for(var p in elem){
        var div = document.createElement('div');
        div.innerHTML = `
        <p class="simple-grid-font">
        ${p} : ${elem[p]}
        </p>
        `
        grid.appendChild(div);
    }
    
    
}


function print_search(key){
    
    for(var i = 0; i < trails.length; i++){
        if(trails[i].Name.toLowerCase().search(key.toLowerCase())!=-1 || trails[i].Wildlife.toLowerCase().search(key.toLowerCase()) != -1){
            print_card(trails[i]);
            break;
        }
        
    }
    
}

