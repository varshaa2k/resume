fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Hero
        document.getElementById("hero-name").textContent = data.about.name;
        document.getElementById("hero-tagline").textContent = data.about.tagline;
        document.getElementById("hero-roles").textContent = data.about.roles.join(" | ");

        // About
        document.getElementById("about-intro").innerHTML = data.about.description_intro;
        document.getElementById("about-details").textContent = data.about.description_details;
        document.getElementById("about-cta").innerHTML = data.about.cta;

        // Experience
        const expList = document.getElementById("experience-list");
        data.experience.milestones.forEach(exp => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `<h4>${exp.role}</h4><p>${exp.company}</p><span>${exp.duration}</span>`;
            expList.appendChild(div);
        });

        // Education
        const eduList = document.getElementById("education-list");
        data.education.forEach(edu => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `<h4>${edu.degree}</h4><p>${edu.university}</p><span>${edu.year}</span>`;
            eduList.appendChild(div);
        });

        // Skills
        const skillsList = document.getElementById("skills-list");
        data.skills.forEach(skill => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
                <div class="progress">
                    <div class="progress-bar" style="width:${skill.progress}%">${skill.progress}%</div>
                </div>
            `;
            skillsList.appendChild(div);
        });

        // Projects
        const projectsList = document.getElementById("projects-list");
        data.projects.forEach(project => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
                <a href="${project.github}" target="_blank">GitHub</a>
                ${project.demo ? `<a href="${project.demo}" target="_blank">Demo</a>` : ""}
            `;
            projectsList.appendChild(div);
        });

        // Honours
        const honoursList = document.getElementById("honours-list");
        data.honours.forEach(h => {
            const li = document.createElement("li");
            li.textContent = h;
            honoursList.appendChild(li);
        });

        // Hobbies
        const hobbiesList = document.getElementById("hobbies-list");
        data.hobbies.forEach(hobby => {
            const li = document.createElement("li");
            li.textContent = hobby;
            hobbiesList.appendChild(li);
        });

        // Languages
        const languagesList = document.getElementById("languages-list");
        data.languages.forEach(lang => {
            const li = document.createElement("li");
            li.textContent = `${lang.language} - ${lang.proficiency}`;
            languagesList.appendChild(li);
        });

        // Contact
        document.getElementById("contact-email").textContent = data.about.email;
        document.getElementById("contact-phone").textContent = data.about.phone;
        document.getElementById("contact-location").textContent = data.about.location;

    })
    .catch(err => console.error("Error loading data.json:", err));
