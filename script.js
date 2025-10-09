// Fetch the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // ===== Hero Section =====
        document.getElementById('hero-name').textContent = `Welcome, I'm ${data.about.name}`;
        document.getElementById('hero-desc').textContent = `${data.about.title} | ${data.about.location} | ${data.about.email}`;

        // ===== About Section =====
        document.getElementById('about-description').textContent = data.about.description;

        // About stats (Years XP, Projects Completed)
        const statsContainer = document.getElementById('about-stats');
        statsContainer.innerHTML = `
            <div class="col-6 mb-4">
                <div class="card shadow-sm p-4">
                    <h1 class="display-4 text-primary">03+</h1>
                    <p class="text-muted">Years XP</p>
                </div>
            </div>
            <div class="col-6 mb-4">
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
                <p>${exp.company}</p>
                <span>${exp.duration}</span>
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
            skillDiv.className = 'col-md-6 mb-4';
            skillDiv.innerHTML = `
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
                <div class="progress" style="height: 20px;">
                    <div class="progress-bar bg-info" role="progressbar" style="width: ${skill.progress}%;">
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
            div.className = 'col-md-4 mb-4';
            div.innerHTML = `
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.github}" class="btn btn-outline-primary" target="_blank">GitHub</a>
                        ${project.demo ? `<a href="${project.demo}" class="btn btn-outline-success" target="_blank">Demo Video</a>` : ''}
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
