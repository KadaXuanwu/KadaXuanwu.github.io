const projects = [
    {
        image: "Resources/Images/SplashartUtilitydesigner.png",
        category: "Unity Tool",
        title: "Utility Designer",
        description: "A graphical tool for the Unity Asset Store that allows the creation of Non-Player Characters by combining the concept of Utility AI and Behaviour Trees."
    },
    {
        image: "Resources/Images/SplashartDonthitme.png",
        category: "Game",
        title: "Don't Hit Me",
        description: "An online battle arena, which is all about MISSING your abilities! Gain score when using abilities, but be mindful, others will steal score from you when hit."
    }
];

function createProjectSection(project) {
    const projectContainer = document.getElementById('project-container');

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('project-image');

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title + ' Image';

    imageDiv.appendChild(image);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('project-description');

    const category = document.createElement('h2');
    category.textContent = "// " + project.category;

    const title = document.createElement('h1');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    descriptionDiv.appendChild(category);
    descriptionDiv.appendChild(title);
    descriptionDiv.appendChild(description);

    projectDiv.appendChild(imageDiv);
    projectDiv.appendChild(descriptionDiv);

    projectContainer.appendChild(projectDiv);
}

projects.forEach(project => {
    createProjectSection(project);
});
