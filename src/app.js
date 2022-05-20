import { deposit } from "./deposit";
import { DOM } from "./dom";
import { Project } from "./project";

const App = (function() {
    let projectList = [];

    const addProject = (value) => {
        const project = new Project(value);
        projectList.push(project);
        deposit.populateStorage(projectList);
        DOM.updateDOM(projectList);
    };

    const init = () => {
        if (!localStorage.getItem('Projects')) {
            deposit.populateStorage(projectList);
        } else {
            projectList = deposit.getStorage();
        }
        DOM.updateDOM(projectList);
    };


    const handleEvents = () => {
        window.addEventListener('click', (e) => {
            if (e.target.className === 'project-item') {
                const index = e.target.dataset.key;
                DOM.updateDOM(projectList[index]);
            }
            else if (e.target.className === 'add-project') {
                DOM.openModal();

                //addProject();
                //DOM.updateDOM(projectList);
            }
            else if (e.target.className === 'modal') {
                DOM.closeModal();
            }
            else if (e.target.className === 'submit-project') {
                const input = document.getElementById('title').value;
                if (input === '') {
                    return;
                }
                addProject(input);
                DOM.closeModal();
            }
        });
    };

    return { addProject, handleEvents, init };
})();

export { App };