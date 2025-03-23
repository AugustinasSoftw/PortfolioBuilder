function addEducation() {
    let section = document.getElementById("education-section");
    let newEntry = document.createElement("div");
    newEntry.classList.add("education-entry");
    newEntry.innerHTML = `
        <input type="text" placeholder="Institution Name" class="institution">
        <input type="text" placeholder="Degree" class="degree">
        <input type="text" placeholder="Year of Graduation" class="grad-year">
    `;
    section.appendChild(newEntry);
}

function addExperience() {
    let section = document.getElementById("experience-section");
    let newEntry = document.createElement("div");
    newEntry.classList.add("experience-entry");
    newEntry.innerHTML = `
        <input type="text" placeholder="Job Title" class="job-title">
        <input type="text" placeholder="Company Name" class="company">
        <input type="text" placeholder="Duration" class="duration">
        <textarea placeholder="Job Description" class="job-description"></textarea>
    `;
    section.appendChild(newEntry);
}

function addSkill() {
    let section = document.getElementById("skills-section");
    let newEntry = document.createElement("input");
    newEntry.type = "text";
    newEntry.placeholder = "Skill";
    newEntry.classList.add("skill");
    section.appendChild(newEntry);
}

document.getElementById("portfolio-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("full-name").value;
    let contact = document.getElementById("contact").value;
    let linkedin = document.getElementById("linkedin").value;

    let education = [...document.querySelectorAll(".education-entry")].map(entry => 
        `${entry.querySelector(".institution").value} - ${entry.querySelector(".degree").value} (${entry.querySelector(".grad-year").value})`
    ).join("<br>");

    let experience = [...document.querySelectorAll(".experience-entry")].map(entry => 
        `<strong>${entry.querySelector(".job-title").value}</strong> at ${entry.querySelector(".company").value} (${entry.querySelector(".duration").value})<br>${entry.querySelector(".job-description").value}`
    ).join("<br><br>");

    let skills = [...document.querySelectorAll(".skill")].map(skill => skill.value).join(", ");

    document.getElementById("portfolio-preview").innerHTML = `
        <h2>${fullName}</h2>
        <p>${contact}</p>
        <p>${linkedin ? `<a href="${linkedin}">LinkedIn</a>` : ""}</p>
        <h3>Education</h3><p>${education}</p>
        <h3>Work Experience</h3><p>${experience}</p>
        <h3>Skills</h3><p>${skills}</p>
    `;
});

// Download PDF Function
document.getElementById("download-pdf").addEventListener("click", function() {
    const resume = document.getElementById("portfolio-preview").innerHTML;
    const blob = new Blob([resume], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Portfolio.pdf";
    link.click();
});
