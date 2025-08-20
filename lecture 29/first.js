const fs = require("fs");
fs.writeFile("my.txt","This is the first file that i am creating using commonjs writeFile", ()=>{
    console.log("file is created");
    // fs.appendFile("my.txt", "\n\n\n\n This is the text after append i.e it does not remove the previous text in the file", ()=>{
    //     console.log("done")

    // })
});

// we can also do it in seperate
fs.appendFile("my.txt", "\n\n\n\n This is the text after append i.e it does not remove the previous text in the file", ()=>{
        console.log("done")
        fs.readFile("my.txt",(e, data)=>{
            console.log(e, data.toString())

        });
    })