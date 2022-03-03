let divEl = document.querySelector("#div");
fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let image = document.createElement("img");
    divEl.appendChild(image);
    image.src = data.img;
  })
  .catch((error) => {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = error;
    divEl.appendChild(errorMessage);
  });
