window.onload = getAll;

function getAll(){
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
      url.innerHTML = "Link al repositorio";

      let img = document.createElement("img");
      img.className = "projects-project-img";
      img.src = data.image;

      article.appendChild(title);
      article.appendChild(img);
      article.appendChild(description);
      article.appendChild(url);

      projects.appendChild(article);
      }
    );
  });

}