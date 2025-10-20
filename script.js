fetch('data.json')
  .then(response => response.json())
  .then(data => {

    // About
    document.getElementById('name').textContent = data.about.name;
    document.getElementById('tagline').textContent = data.about.tagline;
    document.getElementById('roles').textContent = data.about.roles.join(' | ');
    document.getElementById('description_intro').innerHTML = data.about.description_intro;
    document.getElementById('description_details').textContent = data.about.description_details;

    // Let's Connect button
    document.getElementById('lets-connect').addEventListener('click', () => {
      document.getElementById('contact').scrollIntoView({behavior: "smooth"});
    });

    // Contact
    document.getElementById('email').textContent = data.about.email;
    document.getElementById('phone').textContent = data.about.phone;
    document.getElementById('location').textContent = data.about.location;

    // Experience
    const expContainer = document.getElementById('experience-container');
    data.experience.milestones.forEach(exp => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${exp.role} - ${exp.company}</h3><p>${exp.duration}</p>`;
      const ul = document.createElement('ul');
      exp.details.forEach(d => {
        const li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
      });
      div.appendChild(ul);
      expContainer.appendChild(div);
    });

    // Education
    const eduContainer = document.getElementById('education-container');
    data.education.forEach(edu => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${edu.degree}</h3><p>${edu.university}</p><span>${edu.year}</span>`;
      eduContainer.appendChild(div);
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    data.skills.forEach(skill => {
      const div = document.createElement('div');
      div.innerHTML = `<h4>${skill.name}</h4>
                       <p>${skill.description}</p>
                       <div class="progress">
                         <div style="width:${skill.progress}%; background-color:#007bff; color:#fff; padding:2px;">${skill.progress}%</div>
                       </div>`;
      skillsContainer.appendChild(div);
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
      const div = document.createElement('div');
      div.innerHTML = `<h4>${proj.title}</h4>
                       <p>${proj.description}</p>
                       <p>Tech: ${proj.tech.join(', ')}</p>
                       <a href="${proj.github}" target="_blank">GitHub</a>
                       ${proj.demo ? `<a href="${proj.demo}" target="_blank">Demo</a>` : ''}`;
      projectsContainer.appendChild(div);
    });

    // Honours
    const honoursContainer = document.getElementById('honours-list');
    data.honours.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      honoursContainer.appendChild(li);
    });

    // Hobbies
    const hobbiesContainer = document.getElementById('hobbies-list');
    data.hobbies.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      hobbiesContainer.appendChild(li);
    });

    // Languages
    const langsContainer = document.getElementById('languages-list');
    data.languages.forEach(l => {
      const div = document.createElement('div');
      div.textContent = `${l.language} - ${l.proficiency}`;
      langsContainer.appendChild(div);
    });

  })
  .catch(err => console.error("Error loading data.json:", err));
