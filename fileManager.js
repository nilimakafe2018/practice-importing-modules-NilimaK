//Use the fs (File System) built-in module to define and export the following functions:
// 1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format.
// 2. loadTasks(filePath): Reads and parses the tasks from the file.
//If the file doesn’t exist, return an empty array.

const fs = require("fs");


// 1. saveTasks(filePath, tasks): Writes the tasks to a file in JSON format.
function saveTasks(filePath, tasks){
    fs.writeFileSync(filePath, JSON.stringify(tasks, null));
    console.log("My tasks has been saved.")  
}

// 2. loadTasks(filePath): Reads and parses the tasks from the file.
function loadTasks(filePath){

    try{
        const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData)

    }

    catch (error) {
        return [];
    }

}

module.exports = {saveTasks, loadTasks}


 