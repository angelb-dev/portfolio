// Array con todos los proyectos (incluyendo los ocultos inicialmente)
const allProjects = [
    { url: "url-del-proyecto-1", image: "brave.png", name: "Nombre del Proyecto 1" },
    { url: "url-del-proyecto-2", image: "brave.png", name: "Nombre del Proyecto 2" },
    { url: "url-del-proyecto-3", image: "brave.png", name: "Nombre del Proyecto 3" },
    { url: "url-del-proyecto-4", image: "brave.png", name: "Nombre del Proyecto 4" },
    { url: "url-del-proyecto-5", image: "brave.png", name: "Nombre del Proyecto 5" },
    { url: "url-del-proyecto-6", image: "brave.png", name: "Nombre del Proyecto 6" },
    { url: "url-del-proyecto-7", image: "brave.png", name: "Nombre del Proyecto 7" },
    { url: "url-del-proyecto-8", image: "brave.png", name: "Nombre del Proyecto 8" },
    { url: "url-del-proyecto-9", image: "brave.png", name: "Nombre del Proyecto 9" },
    // Agrega aquí más proyectos
    { url: "url-del-proyecto-10", image: "brave.png", name: "Nombre del Proyecto 10" },
    { url: "url-del-proyecto-11", image: "brave.png", name: "Nombre del Proyecto 11" },
    { url: "url-del-proyecto-12", image: "brave.png", name: "Nombre del Proyecto 12" },
    { url: "url-del-proyecto-13", image: "brave.png", name: "Nombre del Proyecto 13" },
    { url: "url-del-proyecto-14", image: "brave.png", name: "Nombre del Proyecto 14" },
    // ... más proyectos ...
];

const projectsContainer = document.querySelector('.projects .project');
const initialProjectCount = 9;

function createProjectElement(project) {
    const projectElement = document.createElement('a');
    projectElement.href = project.url;
    projectElement.classList.add('project-preview-wrapper');
    projectElement.innerHTML = `
        <img src="${project.image}" alt="Vista previa de ${project.name}" class="project-preview">
        <div class="project-name">${project.name}</div>
    `;
    return projectElement;
}

function displayProjects(start, end) {
    projectsContainer.innerHTML = '';
    for (let i = start; i < end && i < allProjects.length; i++) {
        projectsContainer.appendChild(createProjectElement(allProjects[i]));
    }
    
    // Añadir botón "Ver más" o "Ver menos"
    const actionButton = document.createElement('a');
    actionButton.classList.add('project-preview-wrapper', 'action-button');
    
    if (end < allProjects.length) {
        actionButton.innerHTML = `
            <div class="project-name">Ver más proyectos</div>
        `;
        actionButton.onclick = (e) => {
            e.preventDefault();
            displayProjects(0, allProjects.length);
        };
    } else {
        actionButton.innerHTML = `
            <div class="project-name">Ver menos</div>
        `;
        actionButton.onclick = (e) => {
            e.preventDefault();
            displayProjects(0, initialProjectCount);
        };
    }
    
    projectsContainer.appendChild(actionButton);
}

// Inicializar la visualización
displayProjects(0, initialProjectCount);