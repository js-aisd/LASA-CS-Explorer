const courses = {
  fundamentals: "data/fundamentals.json",
  apcs: "data/apcs.json",
  advanced: "data/advanced.json",
  web: "data/web.json",
  independent: "data/independent.json"
};

async function loadCourse(name) {
  const file = courses[name];
  if (!file) return;

  const response = await fetch(file);
  const data = await response.json();

  document.getElementById("course-title").textContent = data.title;

  const body = document.getElementById("course-table");
  body.innerHTML = "";

  data.rows.forEach(row => {
    body.innerHTML += `
      <tr>
        <td>${row.date}</td>
        <td>${row.notes}</td>
        <td>${row.activities}</td>
      </tr>`;
  });
}

document.querySelectorAll(".course-nav a").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    loadCourse(link.dataset.course);
  };
});

loadCourse("fundamentals");
