// Adjectives names

let adj1 = "Crazy";
let adj2 = "Amazing";
let adj3 = "Fire";

// Shop Name 

let sn1 = "Engine"
let sn2 = "Food"
let sn3 = "Garments"

// Anotehr word

let aw1 = "Bros"
let aw2 = "Limited"
let aw3 = "Hub"

let a;
let b;
let c;

let rand = Math.random() * 10;
console.log(rand);
if (rand <= 3) {
    a = adj1;
    if (rand <= 1) {
        b = sn1;
        if (rand <= 0.3) {
            c = aw1;
        }
        else if (rand <= 0.6) {
            c = aw2;
        }
        else {
            c = aw3;
        }

    }
    else if (rand > 1 && rand <= 2) {
        b = sn2;
        if (rand <= 1.4) {
            c = aw1;
        }
        else if (rand <= 1.6) {
            c = aw2;
        }
        else {
            c = aw3;
        }
    }
    else {
        b = sn3;
        if (rand <= 2.3) {
            c = aw1;
        }
        else if (rand <= 2.6) {
            c = aw2;

        }
        else {
            c = aw3;

        }
    }
}
else if (rand > 3 && rand <= 6) {
    a = adj2;
    if (rand <= 4) {
        b = sn1;
        if (rand <= 3.3) { c = aw1; }
        else if (rand <= 3.6) { c = aw2; }
        else { c = aw3; }
    }
    else if (rand > 4 && rand <= 5) {
        b = sn2;
        if (rand <= 4.3) { c = aw1; }
        else if (rand <= 4.6) { c = aw2; }
        else { c = aw3; }

    }
    else {
        b = sn3;
        if (rand <= 5.3) { c = aw1; }
        else if (rand <= 5.6) { c = aw2; }
        else { c = aw3; }

    }
}
else {
    a = adj3;
    if (rand <= 7) {
        b = sn1;
        if (rand <= 6.3) { c = aw1; }
        else if (rand <= 6.6) { c = aw2; }
        else { c = aw3; }

    }
    else if (rand > 7 && rand <= 8.5) {
        b = sn2;
        if (rand <= 7.5) { c = aw1; }
        else if (rand <= 8) { c = aw2; }
        else { c = aw3; }

    }
    else {
        b = sn3;
        if (rand <= 9) { c = aw1; }
        else if (rand <= 9.5) { c = aw2; }
        else { c = aw3; }

    }

}

console.log(`The suggested business name is : ${a} ${b} ${c}`);