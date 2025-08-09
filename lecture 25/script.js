let cont = document.querySelector(".container");
// cont.style.border="2px solid black";
// cont.style.minHeight="400px";
// we can also use the above as well 
cont.setAttribute("style", "border: 2px solid black;color: black; min-height: 400px;display: flex; flex-direction: column; padding: 24px; gap: 16px; background-color: black")
// console.log(cont);


function createCard(title, cName, monthOld, views, thumbnail) {

    let card = document.createElement("div");
    card.classList.add("card");

    card.style.height = "150px";
    // card.style.border = "2px solid red";
    card.style.display = "flex";
    card.style.gap = "8px";
    card.style.backgroundColor = "black";
    // card.style.alignItems = "center";

    let pic = document.createElement("img");
    pic.setAttribute("src", `${thumbnail}`);
    pic.setAttribute("width", "17%");
    pic.setAttribute("height", "100%");
    pic.setAttribute("style", "object-fit: cover");
    // console.log(pic)
    card.append(pic)

    let descripBox = document.createElement("div");
    descripBox.style.display = "flex";
    descripBox.style.flexDirection = "column";
    descripBox.style.color = "white";

    if (views >= 1000000000) {
        views /= 1000000000;
        views = views.toString() + "B"
    }
    else if (views >= 1000000) {
        views /= 1000000;
        views = views.toString() + "M"
    }
    else if (views >= 1000) {
        views /= 1000;
        views = views.toString() + "K"
    }
    else {
        views = views.toString() + " views";
    }

    let list = document.createElement("ul");
    list.style.display = "flex";
    list.style.gap = "20px";
    list.style.padding = "0px";
    list.style.color = "#a1a0a0";
    list.innerHTML = `${cName}<li>${views}</li><li>${monthOld} old</li>`;
    descripBox.append(list);
    descripBox.insertAdjacentHTML("afterbegin", `<h2>${title}</h2>`);


    card.append(descripBox);
    cont.append(card);
}

createCard("Introduction to backend | sigma web development course ","codeWith", "2 months", 100, "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" );


createCard("Introduction to frontend | sigma web development course ","codeWith", "2 months", 100000000, "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" );



createCard("Introduction to java | sigma web development course ","codeWith", "2 months", 100000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx3g-BHxy02qkT1UdbP32eFujMZTB_gajBw&s" );


createCard("Introduction to php | sigma web development course ","codeWith", "2 months", 1000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9p5p0ELRguf37mwge_M7n2Isua_f6lahJQ&s" );


createCard("Introduction to frontend | sigma web development course ","codeWith", "2 months", 10000000000, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lu7q6ZRwI3te6MXdsPe6hG9QFSu8QlOW_A&s" );


createCard("Introduction to frontend | sigma web development course ","codeWith", "2 months", 100000000000, "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" );