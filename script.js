// Sidebar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // ===== Hero Section =====
        document.getElementById('hero-name').textContent = `Welcome, I'm ${data.about.name}`;
        document.getElementById('hero-desc').textContent = `${data.about.title}`;

        // ===== About Section =====
        document.getElementById('about-description').textContent = data.about.description;

        const statsContainer = document.getElementById('about-stats');
        statsContainer.innerHTML = `
            <div class="col-6 col-sm-6 mb-4">
                <div class="card shadow-sm p-4">
                    <h1 class="display-4 text-primary">03+</h1>
                    <p class="text-muted">Years XP</p>
                </div>
            </div>
            <div class="col-6 col-sm-6 mb-4">
                <div class="card shadow-sm p-4">
                    <h1 class="display-4 text-success">${data.projects.length}+</h1>
                    <p class="text-muted">Projects Completed</p>
                </div>
            </div>
            <div class="col-12">
                <div class="card shadow-sm p-4">
                    <a href="assets/Varshaa_Resume.pdf" class="btn btn-outline-success mt-3" download>
                        <i class="fas fa-download"></i> Get Resume
                    </a>
                </div>
            </div>
        `;

        // ===== Experience Section =====
const experienceList = document.getElementById('experience-list');
data.experience.milestones.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.innerHTML = `
        <h4>${exp.role}</h4>
        <p><strong>${exp.company}</strong></p>
        <span>${exp.duration}</span>
        ${exp.highlights ? `
            <ul>
                ${exp.highlights.map(point => `<li>${point}</li>`).join('')}
            </ul>
        ` : ''}
    `;
    experienceList.appendChild(div);
});


        // ===== Qualification Section =====
        const qualList = document.getElementById('qualification-list');
        data.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <div class="timeline-content">
                    <h4>${edu.degree}</h4>
                    <p>${edu.university}</p>
                    <span>${edu.year}</span>
                </div>
            `;
            qualList.appendChild(div);
        });

        // ===== Skills Section =====
        const skillsContainer = document.getElementById('skills-container');
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'col-12 col-md-6 mb-4';
            skillDiv.innerHTML = `
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
                <div class="progress" style="height: 20px;">
                    <div class="progress-bar bg-info" role="progressbar" style="width: ${skill.progress}%; height: 100%;">
                        ${skill.progress}%
                    </div>
                </div>
            `;
            skillsContainer.appendChild(skillDiv);
        });

        // ===== Projects Section =====
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'col-12 col-md-4 mb-4';
            div.innerHTML = `
                <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text flex-grow-1">${project.description}</p>
                        <div>
                            <a href="${project.github}" class="btn btn-outline-primary mb-2 w-100" target="_blank">GitHub</a>
                            ${project.demo ? `<a href="${project.demo}" class="btn btn-outline-success w-100" target="_blank">Demo Video</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
            projectsContainer.appendChild(div);
        });

        // ===== Contact Section =====
        const contactInfo = document.getElementById('contact-info');
        contactInfo.innerHTML = `
            <p><strong>Email:</strong> <a href="mailto:${data.about.email}">${data.about.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.about.phone}">${data.about.phone}</a></p>
            <p><strong>Location:</strong> ${data.about.location}</p>
            <p><strong>LinkedIn:</strong> <a href="${data.about.linkedin}" target="_blank">${data.about.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${data.about.github}" target="_blank">${data.about.github}</a></p>
        `;
    })
    .catch(err => console.error('Error loading data:', err));
