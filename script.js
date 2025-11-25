
// Smooth Scroll Navbar
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function () {
    document.querySelectorAll(".navbar a").forEach(a => a.classList.remove("active"));
    this.classList.add("active");
  });
});

// Fade-in animation for elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .project-card").forEach(el => observer.observe(el));

// Animate skill bar on scroll
const skillBars = document.querySelectorAll('.skill-progress');

function animateSkills() {
  skillBars.forEach(bar => {
    let width = bar.style.width;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector(".skills-section");
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    animateSkills();
  }
});

// Skill Animation on Scroll
const skills = document.querySelectorAll(".skill-per");

window.addEventListener("scroll", () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (rect < screenHeight - 50) {
      skill.style.width = skill.getAttribute("per") + "%";
      skill.classList.add("active");
    }
  });
});