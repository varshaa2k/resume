// Sidebar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
menuToggle.addEventListener('click', () => sidebar.classList.toggle('active'));

// Load JSON data dynamically
fetch('data.json')
    .then(res => res.json())
    .then(data => {

        // ===== Hero Section =====
        document.getElementById('hero-name').textContent = `Welcome, I'm ${data.about.name}`;
        document.getElementById('hero-desc').textContent = data.about.title;

        // ===== About =====
        document.getElementById('about-description').textContent = data.about.description;

        // ===== Experience Section (Two-column Layout) =====
        const experienceList = document.getElementById('experience-list');
        data.experience.milestones.forEach(exp => {
            const card = document.createElement('div');
            card.className = 'experience-card';
            card.innerHTML = `
                <div class="experience-left">
                    <h4>${exp.role}</h4>
                    <p>${exp.company}</p>
                    <span>${exp.duration}</span>
                </div>
                <div class="experience-right">
                    <ul class="experience-highlights">
                        ${exp.highlights.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
            experienceList.appendChild(card);
        });

        // ===== Qualification =====
        const qualList = document.getElementById('qualification-list');
        data.education.forEach(edu => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <h4>${edu.degree}</h4>
                <p>${edu.university}</p>
                <span>${edu.year}</span>
            `;
            qualList.appendChild(div);
        });

        // ===== Skills =====
        const skillsContainer = document.getElementById('skills-container');
        data.skills.forEach(skill => {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'col-12 col-md-6 mb-4';
            skillDiv.innerHTML = `
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width:${skill.progress}%">${skill.progress}%</div>
                </div>
            `;
            skillsContainer.appendChild(skillDiv);
        });

        // ===== Projects =====
        const projectsContainer = document.getElementById('projects-container');
        data.projects.forEach(project => {
            const div = document.createElement('div');
            div.className = 'col-12 col-md-4 mb-4';
            div.innerHTML = `
                <div class="card shadow-sm h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text flex-grow-1">${project.description}</p>
                        <a href="${project.github}" target="_blank" class="btn btn-outline-primary mb-2 w-100">GitHub</a>
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-outline-success w-100">Demo</a>` : ''}
                    </div>
                </div>`;
            projectsContainer.appendChild(div);
        });

        // ===== Contact =====
        const contactInfo = document.getElementById('contact-info');
        contactInfo.innerHTML = `
            <p><strong>Email:</strong> <a href="mailto:${data.about.email}">${data.about.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.about.phone}">${data.about.phone}</a></p>
            <p><strong>Location:</strong> ${data.about.location}</p>
            <p><strong>LinkedIn:</strong> <a href="${data.about.linkedin}" target="_blank">${data.about.linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${data.about.github}" target="_blank">${data.about.github}</a></p>
        `;
    })
    .catch(err => console.error("Error loading data:", err));
