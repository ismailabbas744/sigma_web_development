import fs from "fs/promises";
import path from "path";

const basePath = "f://me//web development//sigma web development//lecture 32";
let files = await fs.readdir(basePath);
for (const item of files) {
    let ext = path.extname(item)
    // await fs.mkdir("a")
    // console.log(ext.split(".")[1])
    if(ext!=".json" && ext!= ".js" && ext!=""){
        let oldPath = `${basePath}/${item}`
        
        if(files.includes(`${ext.split(".")[1]}`)){
            let newPath = `${basePath}/${ext.split(".")[1]}/${item}`
            fs.rename(oldPath, newPath)
        }
        else{
            fs.mkdir(`${ext.split(".")[1]}`)
            let newPath = `${basePath}/${ext.split(".")[1]}/${item}`
            fs.rename(oldPath, newPath)
        }
    }
}