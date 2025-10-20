document.addEventListener('DOMContentLoaded', () => {

    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Load JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            loadExperience(data.experience.milestones);
            loadEducation(data.education);
            loadSkills(data.skills);
            loadProjects(data.projects);
            loadHonours(data.honours);
            loadHobbies(data.hobbies);
            loadLanguages(data.languages);
        })
        .catch(err => console.error('Error loading data.json:', err));

    // Scroll to section
    window.scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    function loadExperience(exp) {
        const container = document.getElementById('experience-container');
        exp.forEach(e => {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            div.innerHTML = `<h4>${e.role}</h4><p>${e.company}</p><span>${e.duration}</span>`;
            container.appendChild(div);
        });
    }

    function loadEducation(edu) {
        const container = document.getElementById('education-container');
        edu.forEach(e => {
            const div = document.createElement('div');
            div.classList.add('timeline-item');
            div.innerHTML = `<h4>${e.degree}</h4><p>${e.university}</p><span>${e.year}</span>`;
            container.appendChild(div);
        });
    }

    function loadSkills(skills) {
        const container = document.getElementById('skills-container');
        skills.forEach(s => {
            const div = document.createElement('div');
            div.classList.add('skill-card');
            div.innerHTML = `<h4>${s.name}</h4><p>${s.description}</p><div class="progress-bar" style="width:${s.progress}%">${s.progress}%</div>`;
            container.appendChild(div);
        });
    }

    function loadProjects(projects) {
        const container = document.getElementById('projects-container');
        projects.forEach(p => {
            const div = document.createElement('div');
            div.classList.add('project-card');
            const techHtml = p.tech ? p.tech.map(t => `<span>${t}</span>`).join('') : '';
            div.innerHTML = `
                <h4>${p.title}</h4>
                <p>${p.description}</p>
                <div class="tech-list">${techHtml}</div>
                <a href="${p.github}" target="_blank" class="btn btn-primary">GitHub</a>
                ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-outline-success">Demo</a>` : ''}
            `;
            container.appendChild(div);
        });
    }

    function loadHonours(honours){
        const container = document.getElementById('honours-list');
        honours.forEach(h => {
            const li = document.createElement('li');
            li.textContent = h;
            container.appendChild(li);
        });
    }

    function loadHobbies(hobbies){
        const container = document.getElementById('hobbies-list');
        hobbies.forEach(h => {
            const li = document.createElement('li');
            li.textContent = h;
            container.appendChild(li);
        });
    }

    function loadLanguages(langs){
        const container = document.getElementById('languages-list');
        langs.forEach(l => {
            const div = document.createElement('div');
            div.textContent = `${l.language} - ${l.proficiency}`;
            container.appendChild(div);
        });
    }
});
