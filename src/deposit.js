import { Project } from "./project";
import { Task } from "./task";

const deposit = (function() {
    const populateStorage = (data) => {
        localStorage.setItem('Projects', JSON.stringify(data, null, " "));
    };
    
    const getStorage = () => {
        const data = JSON.parse(localStorage.getItem('Projects'));
        const projects = data.map((item) => Object.assign(new Project(), item));
        for (let i = 0; i < projects.length; i++) {
            projects[i].tasks = projects[i].tasks.map((task) => Object.assign(new Task(), task));
        }
        return projects;
    };

    return { populateStorage, getStorage };
})();

export { deposit };
 