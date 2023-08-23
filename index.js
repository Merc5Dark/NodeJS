const fs = require("fs"); //file system

// fs.writeFile("message.txt", "NodeJS!", (err) => {
//     if (err) throw err;
//     console.log("File Saved Successfully");
// })

// Native Node Module

fs.readFile("./message.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
})