let bgcolors = ["red", "green", "brown", "yellow", "black", "grey", "blue", "lightgreen", "lightblue", "orange"];
let colors = ["red", "green", "brown", "yellow", "black", "grey", "blue", "lightgreen", "lightblue", "orange"];

for (let i = 0; i < 5; i++) {
    let bgrand = Math.round(Math.random() * 10);
    let crand = Math.round(Math.random() * 10);
    let b = document.getElementsByClassName("box")[i];
    b.style.backgroundColor = bgcolors[bgrand];
    b.style.color = colors[crand];

}

