document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json?v=' + new Date().getTime())
        .then(res => res.json())
        .then(data => {

            // Hero Section
            const heroDiv = document.querySelector('.hero div');
            if(heroDiv) {
                heroDiv.querySelector('h1').textContent = `Welcome, I'm ${data.about.name}`;
                heroDiv.querySelectorAll('p')[1].textContent = data.about.tagline;
                heroDiv.querySelectorAll('p')[2].textContent = `${data.about.age} | ${data.about.profession} | ${data.about.roles.join(' | ')}`;
            }

            // About Section
            const about = document.querySelector('#about .col-lg-6');
            if(about) {
                about.querySelectorAll('p')[0].innerHTML = data.about.description_intro;
                about.querySelectorAll('p')[1].innerHTML = data.about.description_details;
                about.querySelectorAll('p')[2].innerHTML = data.about.cta;
            }

            // Experience
            const exp = document.querySelector('#experience .timeline');
            if(exp) {
                exp.innerHTML = '';
                data.experience.milestones.forEach(m => {
                    const div = document.createElement('div');
                    div.className = 'timeline-item';
                    div.innerHTML = `<br><br><br>
                        <h4>${m.role}</h4>
                        <p>${m.company}</p>
                        <span>${m.duration}</span>`;
                    exp.appendChild(div);
                });
            }

            // Qualification
            const qual = document.querySelector('#qualification .timeline');
            if(qual) {
                qual.innerHTML = '';
                data.education.forEach(edu => {
                    const div = document.createElement('div');
                    div.className = 'timeline-item';
                    div.innerHTML = `<div class="timeline-content">
                            <h4>${edu.degree}</h4>
                            <p>${edu.university}</p>
                            <span>${edu.year}</span>
                        </div>
                        <br><br><br>`;
                    qual.appendChild(div);
                });
            }

            // Skills
            const skills = document.querySelector('#skills .row');
            if(skills) {
                skills.innerHTML = '';
                data.skills.forEach(skill => {
                    const div = document.createElement('div');
                    div.className = 'col-md-6 mb-4';
                    div.innerHTML = `<h4>${skill.name}</h4>
                        <p>${skill.description}</p>
                        <div class="progress" style="height: 20px;">
                            <div class="progress-bar bg-info" role="progressbar" style="width: ${skill.progress}%" aria-valuenow="${skill.progress}" aria-valuemin="0" aria-valuemax="100">
                                ${skill.progress}%
                            </div>
                        </div>`;
                    skills.appendChild(div);
                });
            }

            // Projects
            const projects = document.querySelector('#projects .row');
            if(projects) {
                projects.innerHTML = '';
                data.projects.forEach(p => {
                    const div = document.createElement('div');
                    div.className = 'col-md-4 mb-4';
                    div.innerHTML = `<div class="card shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">${p.title}</h5>
                                <p class="card-text">${p.description}</p>
                                <a href="${p.github}" class="btn btn-outline-primary" target="_blank">GitHub</a>
                                ${p.demo ? `<a href="${p.demo}" class="btn btn-outline-success" target="_blank">Demo Video posted on LinkedIn</a>` : ''}
                            </div>
                        </div>`;
                    projects.appendChild(div);
                });
            }

            // Contact
            const contact = document.querySelector('#contact .contact-details');
            if(contact) {
                contact.innerHTML = `<p><strong>Email:</strong> <a href="mailto:${data.about.email}">${data.about.email}</a></p>
                    <p><strong>Phone:</strong> <a href="tel:${data.about.phone}">${data.about.phone}</a></p>
                    <p><strong>Location:</strong> ${data.about.location}</p>`;
            }

        })
        .catch(err => console.error('Error loading data.json:', err));
});
