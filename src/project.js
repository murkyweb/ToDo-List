class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    }

    addTask(value) {
        this.tasks.push(value);
    }
};

export { Project };