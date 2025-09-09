// Import the custom modules (taskManager.js and fileHandler.js) and the path built-in module.
// Implement the following functionality:
//1. Load existing tasks from a file named tasks.json.
//2. Add new tasks to the list.
//3. List all tasks.
//4. Save the updated task list back to the file.


const {addTask, listTasks} = require("./taskManager.js");
const { saveTasks, loadTasks} = require("./fileManager.js");

const filePath = "./tasks.json";

//1. Load existing tasks from a file named tasks.json.
let tasks = loadTasks(filePath);


//2. Add new tasks to the list.
addTask(tasks, "Practice Modules");
addTask(tasks, "Group practice");
addTask(tasks, "JavaScript Programming");


//3. List all tasks.
listTasks(tasks);


//4. Save the updated task list back to the file.
(saveTasks(filePath, tasks));