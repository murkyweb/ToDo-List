const DOM = (function() {
    const updateDOM = (data) => {
        if (Array.isArray(data)) {
            //test if sending an array of objects i.e. a project list.
            const dom = document.querySelector('.project-list');
            const button = document.createElement('button');
            dom.innerHTML = '';
            button.innerHTML = 'Add Project';
            button.classList.add('add-project');
    
            data.forEach((item, index) => {
                const element = document.createElement('li');
                element.classList.add('project-item');
                element.innerHTML = `${item.name}`;
                element.dataset.key = index;
                dom.appendChild(element);
            });
            dom.appendChild(button);
        }
        else if ('tasks' in data) {
            //test if sending an object i.e a project that has a tasks attribute.
            const dom = document.querySelector('.content');
            const button = document.createElement('button');
            dom.innerHTML = `<h2>${data.name}</h2>`;
            button.innerHTML = 'Add Task';
            button.classList.add('add-task');

            data.tasks.forEach((item, index) => {
                const element = document.createElement('li');
                element.classList.add('task-item');
                element.innerHTML = `${item.name} ${item.dueDate}`;
                element.dataset.key = index;
                dom.appendChild(element);
            });
            dom.appendChild(button);
        }
    };

    const openModal= () => {
        emptyInput();
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
    };

    const closeModal = () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'none';
    }

    const emptyInput = () => {
        const input = document.getElementById('title');
        input.value = '';
    };

    return { updateDOM, openModal, closeModal };
})();

export { DOM };