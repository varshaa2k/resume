fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // About
    document.getElementById('name').textContent = data.about.name;
    document.getElementById('tagline').textContent = data.about.tagline;
    document.getElementById('roles').textContent = data.about.roles.join(" | ");
    document.getElementById('description_intro').innerHTML = data.about.description_intro;
    document.getElementById('description_details').textContent = data.about.description_details;
    document.getElementById('cta').innerHTML = data.about.cta;
    document.getElementById('email').textContent = data.about.email;
    document.getElementById('phone').textContent = data.about.phone;
    document.getElementById('location').textContent = data.about.location;
    document.getElementById('resumeBtn').href = data.about.resume;

    // Experience
    const expContainer = document.getElementById('experience-container');
    data.experience.milestones.forEach(exp => {
      const div = document.createElement('div');
      div.classList.add('experience-item');
      div.innerHTML = `<h3>${exp.role} - ${exp.company}</h3><p>${exp.duration}</p><ul>${exp.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
      expContainer.appendChild(div);
    });

    // Education
    const eduContainer = document.getElementById('education-container');
    data.education.forEach(ed => {
      const div = document.createElement('div');
      div.classList.add('education-item');
      div.innerHTML = `<h3>${ed.degree}</h3><p>${ed.university}</p><span>${ed.year}</span>`;
      eduContainer.appendChild(div);
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    data.skills.forEach(skill => {
      const div = document.createElement('div');
      div.classList.add('skill');
      div.innerHTML = `<div class="skill-name">${skill.name}</div>
                       <div class="progress"><div class="progress-bar" style="width:${skill.progress}%">${skill.progress}%</div></div>
                       <p>${skill.description}</p>`;
      skillsContainer.appendChild(div);
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.innerHTML = `<h3>${proj.title}</h3>
                       <p>${proj.description}</p>
                       <div>${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
                       <a href="${proj.github}" target="_blank">GitHub</a>
                       ${proj.demo ? `<a href="${proj.demo}" target="_blank">Demo</a>` : ''}`;
      projectsContainer.appendChild(div);
    });

    // Honours
    const honoursContainer = document.getElementById('honours-container');
    data.honours.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      honoursContainer.appendChild(li);
    });

    // Hobbies
    const hobbiesContainer = document.getElementById('hobbies-container');
    data.hobbies.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      hobbiesContainer.appendChild(li);
    });

    // Languages
    const languagesContainer = document.getElementById('languages-container');
    data.languages.forEach(l => {
      const li = document.createElement('li');
      li.textContent = `${l.language} - ${l.proficiency}`;
      languagesContainer.appendChild(li);
    });

  })
  .catch(error => console.error('Error loading data.json:', error));

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
