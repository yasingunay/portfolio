// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");
const certificates = document.getElementById("certificates");
const certificatesBtn = document.getElementById("certificates-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  certificates.style.display = "none";
  portfolio.style.display = "flex";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.add("active-btn");
  certificatesBtn.classList.remove("active-btn");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "flex";
  portfolio.style.display = "none";
  certificates.style.display = "none";
  portfolioBtn.classList.remove("active-btn");
  skillsBtn.classList.add("active-btn");
  certificatesBtn.classList.remove("active-btn");
});


certificatesBtn.addEventListener("click", (event) => {
    certificates.style.display = "flex";
  skills.style.display = "none";
  portfolio.style.display = "none";
  skillsBtn.classList.remove("active-btn");
  portfolioBtn.classList.remove("active-btn");
  certificatesBtn.classList.add("active-btn");
});



