const tm = require('./taskManager');
const fh = require('./fileHandler');
const path = require('path');
//Build file path
const filepath = path.join(__dirname, 'tasks.json' );
//Load tasks
let allTasksArray = fh.loadTasks(filepath);
console.log(allTasksArray);

tm.addTask(allTasksArray, "Meal prep for week");
tm.addTask(allTasksArray, "Do laundry");
tm.addTask(allTasksArray, "Fold laundry");

tm.listTasks(allTasksArray);

fh.saveTasks(filepath, allTasksArray)