const fs = require("fs");

fs.writeFile("message.txt", "Hello from NODEJS!", (err) => {
    if (err) throw err;
    console.log("The file is saved successfully");
})