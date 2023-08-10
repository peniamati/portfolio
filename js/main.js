let url = window.location.href;
if (!url.includes("contact")) {
  window.onload = getAll;
}

function getAll() {
  fetch("https://portfolio.free.mockoapp.net/data")
    .then((resp) => {
      return resp.json();
    })
    .then((dataArray) => {
      dataArray.forEach((data) => {
        let projects = document.getElementById("projects");

        let article = document.createElement("article");
        article.className = "projects-project";

        let title = document.createElement("h3");
        title.className = "projects-project-title";
        title.innerHTML = data.title;

        let description = document.createElement("p");
        description.className = "projects-project-description";
        description.innerHTML = data.description;

        let url = document.createElement("a");
        url.className = "projects-project-url";
        url.href = data.url;
        url.innerHTML = "Link to GitHub repository";
        url.ariaLabel = "Link to GitHub repository";

        let img = document.createElement("img");
        img.className = "projects-project-img";
        img.src = data.image;
        img.alt = "Project image";

        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(description);
        article.appendChild(url);

        projects.appendChild(article);
      });
    });
}

function sendEmail() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
  });

  emailjs.init("ynn2rbfQvTg2GXtgv");

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  emailjs
    .send("portfolioApp", "template_email", {
      to_email: "pena_matias@hotmail.com",
      from_name: name,
      from_email: email,
      message: message,
    })
    .then(function response() {
      alert("Email sent successfully!");
      form.reset();
    });
}
