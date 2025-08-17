// to download songs

// this to for the wesite if it has to other pages to download 
let as = document.querySelector(".touch-new").querySelectorAll("a")
let page1 = [];
as.forEach(element =>{page1.push(element.href)})



let page2 = [];
for (let i=0; i<page1.length; i++) {
    let get2 = async ()=>{let a = await fetch(page1[i]);
    let b = await a.text();
    let div = document.createElement("div")
    div.innerHTML = b;
    let alink = div.querySelector(".touch-new").querySelector("a"); page2.push(alink.href)};get2()
}



let songsLink = [];
for (let i=0; i<p2.length; i++) {
    let get3 = async ()=>{let a = await fetch(p2[i]);
    let b = await a.text();
    let div = document.createElement("div")
    div.innerHTML = b;
    let alink = div.querySelector(".touch-new").querySelector("a"); songsLink.push(alink.href)};get3()
}


songsLink.forEach((url, index) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = ""; // Let browser decide filename
  document.body.appendChild(a);

  setTimeout(() => {
    a.click();
    document.body.removeChild(a);
  }, index * 4000); // 4s delay to avoid blocking
})