const DOM = (function() {
    const updateDOM = (data) => {
        if (Array.isArray(data)) {
            //test if sending an array of objects i.e. a project list.
            const dom = clearDOM('.project-list');
            const button = createButton('Add', 'Project');

            data.forEach((item, index) => {
                const element = createNewItem(item, 'Project', index);
                dom.appendChild(element);
            });
            dom.appendChild(button);
        }
        else if ('tasks' in data) {
            //test if sending an object i.e a project that has a tasks attribute.
            const dom = clearDOM('.content');
    
            const addTaskBtn = createButton('Add', 'Task');
            const removeProjectBtn = createButton('Remove', 'Project');
    
            dom.innerHTML = `<h2>${data.name}</h2><ul class='task-list'></ul>`;
            const ul = document.querySelector('.task-list');
            console.log(ul);

            data.tasks.forEach((item, index) => {
                const element = createNewItem(item, 'Task', index);
                const removeTaskBtn = createButton('Remove', 'Task');
                element.appendChild(removeTaskBtn);
                ul.appendChild(element);
            });
            dom.appendChild(addTaskBtn);
            dom.appendChild(removeProjectBtn);
        }
    };

    const clearDOM = (element) => {
        const dom = document.querySelector(`${element}`);
        dom.innerHTML = ''; 
        return dom;
    };

    const openModal = (type) => {
        emptyInput();
        const modal = document.querySelector(`.${type}-modal`);
        modal.style.display = 'block';
    };

    const closeModal = (type) => {
        const modal = document.querySelector(`.${type}-modal`);
        modal.style.display = 'none';
    };

    const emptyInput = () => {
        const input = document.getElementById('title');
        input.value = '';
    };

    const createButton = (type, category) => {
        const button = document.createElement('button');
        if (category === 'Project') {
            button.innerText = `${type} ${category}`;
        }
        else {
            button.innerText = ``;
        }
        button.classList.add(`${type.toLowerCase()}-${category.toLowerCase()}`);

        return button;
    };

    const createNewItem = (item, category, index) => {
        const element = document.createElement('li');
        element.classList.add(`${category.toLowerCase()}-item`);
        element.innerHTML = (category === 'Task') ? `<span class='name'>${item.name}</span> <span class='date'>${item.dueDate}</span>` : `${item.name}`;
        element.dataset.key = index;

        return element;
    };

    const selectTab = (index) => {
        const tabs = document.querySelectorAll('.project-item');
        tabs.forEach((item) => {
            item.classList.remove('active');
        });
        const tab = document.querySelector(`.project-item[data-key='${index}']`);
        tab.classList.add('active');
    };

    return { updateDOM, openModal, closeModal, selectTab, clearDOM, };
})();

export { DOM };