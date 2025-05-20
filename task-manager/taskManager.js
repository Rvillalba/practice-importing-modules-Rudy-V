//Function to add task
function addTask(tasks, task){
    tasks.push(task);
    console.log(`\n("${task}" has been added to the list)`);
}
//Function to log tasks
function listTasks(tasks){
    console.log("\nCURRENT TASKS");
    tasks.forEach(task => console.log(task));
}
//Export command
module.exports = {addTask, listTasks}