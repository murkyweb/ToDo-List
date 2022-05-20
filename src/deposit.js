import { Project } from "./project";

const deposit = (function() {
    const populateStorage = (data) => {
        localStorage.setItem('Projects', JSON.stringify(data, null, " "));
    };
    
    const getStorage = () => {
        const data = JSON.parse(localStorage.getItem('Projects'));
        const projects = data.map((project) => Object.assign(new Project(), project));
        return projects;
    };

    return { populateStorage, getStorage };
})();

export { deposit };
 