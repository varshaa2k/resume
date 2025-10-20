// Load JSON dynamically
fetch('data.json?v=' + new Date().getTime())
  .then(res => res.json())
  .then(data => {
    // Hero
    document.getElementById('hero-name').textContent = `Hi, I'm ${data.about.name}`;
    document.getElementById('hero-desc').textContent = data.about.title;

    // About section
    const aboutDiv = document.getElementById('about-description');
    aboutDiv.innerHTML = `
      <p>${data.about.description}</p>
      <p>
        With <strong>3+ years</strong> of experience in AI and Software Engineering, 
        I design, develop, and deploy cutting-edge software and AI solutions, 
        specializing in MedTech and beyond.
      </p>
      <p>
        I’ve led cross-functional teams, translating business goals into actionable 
        Data & AI strategies that deliver results. Skilled in Python, deep learning frameworks, 
        Tableau, Power BI, Flask, MongoDB, LLMs, and Generative AI — 
        I build scalable, high-performance systems.
      </p>
    `;

    // Experience
    const expContainer = document.getElementById('experience-list');
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
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `;
      expContainer.appendChild(card);
    });

    // Qualifications
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

    // Honours
    const honoursList = document.getElementById('honours-list');
    data.honours.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      honoursList.appendChild(li);
    });

    // Hobbies
    const hobbiesList = document.getElementById('hobbies-list');
    data.hobbies.forEach(hobby => {
      const li = document.createElement('li');
      li.textContent = hobby;
      hobbiesList.appendChild(li);
    });

    // Languages
    const langList = document.getElementById('languages-list');
    data.languages.forEach(lang => {
      const li = document.createElement('li');
      li.textContent = `${lang.language} — ${lang.proficiency}`;
      langList.appendChild(li);
    });

    // Contact Info
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
      <p><strong>Email:</strong> <a href="mailto:${data.about.email}">${data.about.email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${data.about.phone}">${data.about.phone}</a></p>
      <p><strong>Location:</strong> ${data.about.location}</p>
      <p><strong>LinkedIn:</strong> <a href="${data.about.linkedin}" target="_blank">${data.about.linkedin}</a></p>
      <p><strong>GitHub:</strong> <a href="${data.about.github}" target="_blank">${data.about.github}</a></p>
    `;
  })
  .catch(err => console.error("Error loading data.json:", err));
