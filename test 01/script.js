console.log("Welcome to Javascript");



async function main() {
    
    
    let a = await fetch("http://127.0.0.1:3002/test%2001/songs/");
    let b = await a.text()
    
    let div = document.createElement("div");
    div.innerHTML = b
    
    let songs = []
    let as = div.getElementsByTagName("a");
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
        console.log(element.href.split("/songs/")[1])
        songs.push(element.href);

        }
        
    }
    // if(div.getElementsByTagName["a"].href)
    const audio = new Audio(songs[1]);
    audio.play();

    
}
play.addEventListener("click", ()=>{
    main();
})


