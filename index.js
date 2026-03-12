const sections = ["General", "About", "Previous Work", "Projects", "Contact"];

const navMap = {
  About: "About",
  "Previous Work": "Previous Work",
  Projects: "Projects",
  Contact: "Contact",
};

function showSection(sectionId) {
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  const target = document.getElementById(sectionId);
  if (target) target.style.display = "block";

  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
    if (navMap[link.textContent] === sectionId) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = navMap[link.textContent];
      if (sectionId) showSection(sectionId);
    });
  });

  showSection("General");
});
