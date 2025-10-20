// Load JSON
fetch('data.json')
  .then(res => res.json())
  .then(data => {

    // Hero
    const heroDiv = document.querySelector('.hero div');
    if(heroDiv){
      heroDiv.querySelector('h1').textContent = `Welcome, I'm ${data.about.name}`;
      heroDiv.querySelector('.emoji').textContent = '💻 ☕️ 🧠 ❤️';
      heroDiv.querySelector('.tagline').textContent = data.about.title;
      heroDiv.querySelector('.title').textContent = `${data.about.age} | ${data.about.profession}`;
    }

    // About
    document.getElementById('about-description').innerHTML = data.about.description;

    // Experience
    const expContainer = document.getElementById('experience-list');
    data.experience.milestones.forEach(exp => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<h4>${exp.role}</h4><p>${exp.company}</p><span>${exp.duration}</span>`;
      expContainer.appendChild(div);
    });

    // Qualification
    const qualContainer = document.getElementById('qualification-list');
    data.education.forEach(edu => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `<h4>${edu.degree}</h4><p>${edu.university}</p><span>${edu.year}</span>`;
      qualContainer.appendChild(div);
    });

    // Skills
    const skillsContainer = document.getElementById('skills-container');
    data.skills.forEach(skill => {
      const div = document.createElement('div');
      div.className = 'skill-card';
      div.innerHTML = `<h4>${skill.name}</h4><p>${skill.description}</p>
        <div class="progress"><div class="progress-bar" style="width:${skill.progress}%">${skill.progress}%</div></div>`;
      skillsContainer.appendChild(div);
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');
    data.projects.forEach(project => {
      const div = document.createElement('div');
      div.className = 'project-card';
      div.innerHTML = `<h5>${project.title}</h5>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">GitHub</a>
        ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ''}`;
      projectsContainer.appendChild(div);
    });

    // Honours / Awards
    const honoursList = document.getElementById('honours-list');
    data.honours.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      honoursList.appendChild(li);
    });

    // Hobbies
    const hobbiesList = document.getElementById('hobbies-list');
    data.hobbies.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      hobbiesList.appendChild(li);
    });

    // Languages
    const languagesList = document.getElementById('languages-list');
    data.languages.forEach(l => {
      const li = document.createElement('li');
      li.textContent = l;
      languagesList.appendChild(li);
    });

    // Contact
    const contactDiv = document.getElementById('contact-info');
    contactDiv.innerHTML = `<p><strong>Email:</strong> <a href="mailto:${data.contact.email}">${data.contact.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${data.contact.phone}">${data.contact.phone}</a></p>
      <p><strong>Location:</strong> ${data.contact.location}</p>`;
  })
  .catch(err => console.error("Error loading data.json:", err));
