class Task {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
    }

    sayMyName() {
        console.log(this.name);
    }
};

export { Task };