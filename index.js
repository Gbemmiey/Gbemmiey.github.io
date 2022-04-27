let contact = document.getElementById("contactPage");
let about = document.getElementById("aboutPage");
let author = document.getElementById('name');

contact.addEventListener("click", function () {
  console.log("clicked");
  author.textContent = 'Adeyemo'
});

