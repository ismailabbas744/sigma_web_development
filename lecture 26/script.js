function rand(){
        let ran = (Math.ceil(1 + Math.random()*6))*1000;
        console.log(ran);
        return ran;
    }
function fakeHacking(message) {

    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
            document.querySelector(".container").innerHTML += message;
            resolve();
        }, rand());
    })
}


async function main(){

    
    await fakeHacking("<p>Initializing Hacking</p>");

    let t =  setInterval(() => {
        let last = document.getElementsByTagName("p");
        last = last[last.length-1];
        if (last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, -3);
        }
        else{
            last.innerHTML += ".";
        }
    }, 100);


    await fakeHacking("<p>Reading your files</p>");
    await fakeHacking("<p>Password files Detected</p>");
    await fakeHacking("<p>Sending all passwords and personal files to server</p>");
    await fakeHacking("<p>Cleaning up</p>");
    await fakeHacking("");

    clearInterval(t);
}

main();