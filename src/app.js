import { deposit } from "./deposit";
import { DOM } from "./dom";
import { Project } from "./project";
import { Task } from "./task";

const App = (function() {
    let projectList = [];

    const addProject = (value) => {
        const project = new Project(value);
        projectList.push(project);
        deposit.populateStorage(projectList);
        DOM.updateDOM(projectList);
    };

    const removeProject = (value) => {
        projectList.splice(value, 1);
        deposit.populateStorage(projectList);
        DOM.updateDOM(projectList);
    };

    const getProject = (index) => {
        return projectList[index];
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
                DOM.selectTab(index);
                DOM.updateDOM(projectList[index]);
            }
            else if (e.target.className === 'add-project') {
                DOM.openModal('project');
            }
            else if (e.target.className === 'add-task') {
                DOM.openModal('task');
            }
            else if (e.target.className === 'remove-project') {
                const project = document.querySelector('.active');
                removeProject(project.dataset.key);
                DOM.clearDOM('.content');
            }
            else if (e.target.className === 'remove-task') {
                const projectIndex = document.querySelector('.active').dataset.key;
                const taskIndex = e.target.parentElement.dataset.key;

                projectList[projectIndex].removeTask(taskIndex);
                DOM.updateDOM(projectList[projectIndex]);
                deposit.populateStorage(projectList);
            }
            else if (e.target.className === 'project-modal') {
                DOM.closeModal('project');
            }
            else if (e.target.className === 'task-modal') {
                DOM.closeModal('task');
            }
            else if (e.target.className === 'submit-project') {
                const input = document.getElementById('title').value;
                if (input === '') {
                    return;
                }
                addProject(input);
              
                DOM.selectTab(projectList.length - 1);
                DOM.updateDOM(projectList[projectList.length - 1]);
                DOM.closeModal('project');
            }
            else if (e.target.className === 'submit-task') {
                const index = document.querySelector('.active').dataset.key;
                const name = document.getElementById('name').value;
                const date = document.getElementById('date').value;
                if (date === '' || name === '') {
                    console.log('error');
                    return;
                }
                const project = getProject(index);
                const task = new Task(name, date);

                project.addTask(task);
                DOM.updateDOM(project);
                deposit.populateStorage(projectList);
                DOM.closeModal('task');
            }
        });
    };

    return { addProject, handleEvents, init };
})();

export { App };