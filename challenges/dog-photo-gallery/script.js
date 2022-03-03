const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");
const image = document.createElement("img");
const li = document.createElement("li");
li.style.listStyleType = "none";
const error = document.querySelector("#err");

const changeThePic = () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    })
    .then((dogPic) => {
      ul.appendChild(li);
      li.appendChild(image);
      image.src = dogPic.message;
    })
    .catch((error) => {
      const errorMessage = document.createElement("p");
      errorMessage.innerText = error;
      ul.appendChild(errorMessage);
    });
btn.addEventListener("click", changeThePic);
