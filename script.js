fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // About
    document.getElementById('name').textContent = data.about.name;
    document.getElementById('tagline').textContent = data.about.tagline;
    document.getElementById('roles').textContent = data.about.roles.join(" | ");
    document.getElementById('description_intro').innerHTML = data.about.description_intro;
    document.getElementById('description_details').innerHTML = data.about.description_details;
    document.getElementById('cta').innerHTML = data.about.cta;

    // Contact
    document.getElementById('email').textContent = data.about.email;
    document.getElementById('email').href = "mailto:" + data.about.email;
    document.getElementById('phone').textContent = data.about.phone;
    document.getElementById('phone').href = "tel:" + data.about.phone;
    document.getElementById('location').textContent = data.about.location;

    // Experience
    let expContainer = document.getElementById('experience-list');
    data.experience.milestones.forEach(item => {
      let div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<h4>${item.role}</h4><p>${item.company}</p><span>${item.duration}</span>`;
      expContainer.appendChild(div);
    });

    // Education
    let eduContainer = document.getElementById('education-list');
    data.education.forEach(item => {
      let div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<h4>${item.degree}</h4><p>${item.university}</p><span>${item.year}</span>`;
      eduContainer.appendChild(div);
    });

    // Skills
    let skillsContainer = document.getElementById('skills-list');
    data.skills.forEach(skill => {
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h4>${skill.name}</h4><p>${skill.description}</p>
        <div class="progress"><div class="progress-bar" style="width:${skill.progress}%">${skill.progress}%</div></div>`;
      skillsContainer.appendChild(div);
    });

    // Projects
    let projectsContainer = document.getElementById('projects-list');
    data.projects.forEach(project => {
      let techBadges = project.tech.map(t => `<span class="badge">${t}</span>`).join(" ");
      let demoButton = project.demo ? `<a href="${project.demo}" target="_blank" class="btn btn-demo">Demo</a>` : '';
      let div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h4>${project.title}</h4><p>${project.description}</p>
        <p>${techBadges}</p>
        <a href="${project.github}" target="_blank" class="btn btn-github">GitHub</a> ${demoButton}`;
      projectsContainer.appendChild(div);
    });

    // Honours
    let honoursContainer = document.getElementById('honours-list');
    data.honours.forEach(h => {
      let li = document.createElement('li');
      li.textContent = h;
      honoursContainer.appendChild(li);
    });

    // Hobbies
    let hobbiesContainer = document.getElementById('hobbies-list');
    data.hobbies.forEach(h => {
      let li = document.createElement('li');
      li.textContent = h;
      hobbiesContainer.appendChild(li);
    });

    // Languages
    let languagesContainer = document.getElementById('languages-list');
    data.languages.forEach(lang => {
      let div = document.createElement('div');
      div.className = 'language-card';
      div.innerHTML = `<strong>${lang.language}</strong><br>${lang.proficiency}`;
      languagesContainer.appendChild(div);
    });
  })
  .catch(error => console.error("Error loading data.json:", error));

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
