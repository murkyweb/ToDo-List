class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }
    
    addTask(value) {
        this.tasks.push(value);
    }

    removeTask(value) {
        this.tasks.splice(value, 1);
    }
};

export { Project };