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
};

document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const resetButton = document.getElementById('reset-button');

  // Initialize EmailJS with your user ID
  emailjs.init('user_your_emailjs_user_id');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Prepare email parameters
    const emailParams = {
      to_email: 'pena_matias@hotmail.com',
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value
    };

    // Send email using EmailJS
    emailjs.send('your_emailjs_service_id', 'your_emailjs_template_id', emailParams)
      .then(function (response) {
        console.log('Email sent successfully:', response);
        // Reset the form after successful submission
        contactForm.reset();
      })
      .catch(function (error) {
        console.error('Email could not be sent:', error);
      });
  });

  resetButton.addEventListener('click', function () {
    contactForm.reset();
  });
});
